import boto3
import json
import datetime

ctr_table = "ContactTraceRecordTable"
region_name = "us-west-2"

def lambda_handler(event, context):
    
    dynamodb = boto3.client("dynamodb", region_name=region_name)
    response = dynamodb.scan(TableName=ctr_table)

    start_time = event["queryStringParameters"]["StartTime"]
    end_time = event["queryStringParameters"]["EndTime"]

    ctr_list = []

    for item in response["Items"]:
        ctr = {}
        for key in item:
            ctr[key] = item[key]["S"]

        ctr_list.append(ctr)

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "ctr_list": ctr_list
        })
    }
