import base64
import boto3
import json
import pprint
import os

ctr_table = "ContactTraceRecordTable-CTRApplication"
region_name = os.environ.get('AWS_REGION')

def process_records(records, position):
    while position < len(records):
        record = records[position]
        payload = json.loads(base64.b64decode(record['kinesis']['data']).decode())
        ddb_items = convert_payload(payload)
        dynamoDB = boto3.client('dynamodb', region_name = region_name)
        dynamoDB.put_item(TableName=ctr_table, Item=ddb_items)
        position = position + 1 

def convert_payload(payload):
    ddb_items = {}

    for key in payload.keys():
        if type(payload[key]) is dict:
            ddb_items[key] = {
                'S': json.dumps(payload[key])
            }
        else:
            ddb_items[key] = {
                'S': str(payload[key])
            }
    return ddb_items 
    
def lambda_handler(event, context):
    process_records(event['Records'], 0)