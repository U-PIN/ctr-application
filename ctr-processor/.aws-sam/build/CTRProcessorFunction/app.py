import base64
import boto3
import json
import pprint

ctr_table = "ContactTraceRecordTable"
region_name = "us-west-2"

def process_records(records, position):
    if (position >= len(records)):
        return

    record = records[position]
    payload = json.loads(base64.b64decode(record['kinesis']['data']).decode())
    
    ddb_items = convert_payload(payload)
    dynamoDB = boto3.client('dynamodb', region_name = region_name)
    dynamoDB.put_item(TableName=ctr_table, Item=ddb_items)

def convert_payload(payload):

    keys = [
        "AgentConnectionAttempts",
        "Attributes",
        "Channel",
        "ConnectedToSystemTimestamp",
        "ContactId",
        "CustomerEndpoint",
        "DisconnectReason",
        "DisconnectTimestamp",
        "InitiationMethod",
        "InitiationTimestamp",
        "InstanceARN",
        "LastUpdateTimestamp",
        "Queue",
        "SystemEndpoint",
    ]
    items = {}

    if payload["Agent"] == None:
        for key in keys:
            if key in ["Attributes", "CustomerEndpoint", "SystemEndpoint"]:
                for k in payload[key].keys():
                    items[key + "." + k] = payload[key][k]

            elif key == "Queue":
                if payload[key] == None:
                    continue
                else:
                    for k in payload[key].keys():
                        items[key + "." + k] = payload[key][k]

            else:
                items[key] = payload[key]

    else:
        keys.append("Agent")
        for key in keys:
            if key in ["Attributes", "CustomerEndpoint", "SystemEndpoint"]:
                for k in payload[key].keys():
                    items[key + "." + k] = payload[key][k]

            elif key == "Queue":
                for k in payload[key].keys():
                    items[key + "." + k] = payload[key][k]
                    
            elif key == "Agent":
                for k in payload[key].keys():
                    if k in ["HierarchyGroups", "RoutingProfile"]:
                        continue
                    else:
                        items[key + "." + k] = payload[key][k]
            else:
                items[key] = payload[key]
                

    ddb_items = {}
    for key in items.keys():
        ddb_items[key] = {
            'S': str(items[key])
        }
    
    return ddb_items


def lambda_handler(event, context):
    process_records(event['Records'], 0)