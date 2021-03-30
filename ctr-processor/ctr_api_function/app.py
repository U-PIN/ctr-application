import ast
import boto3
import json
import datetime
import os

ctr_table = "ContactTraceRecordTable-CTRApplication"
region_name = os.environ.get('AWS_REGION')

def lambda_handler(event, context):
    
    dynamodb = boto3.client("dynamodb", region_name=region_name)
    response = dynamodb.scan(TableName=ctr_table)

    start_time = event["queryStringParameters"]["StartTime"]
    end_time = event["queryStringParameters"]["EndTime"]

    ctr_list = []

    for item in response["Items"]:
        ctr = {}
        if start_time <= item["InitiationTimestamp"]["S"] <= end_time: 
            for key in item:
                try:
                    ctr[key] = ast.literal_eval(item[key]["S"].replace('null', 'None'))
                    
                except:
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