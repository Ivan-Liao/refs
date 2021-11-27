import boto3
from secrets import AWS_S3_ID, AWS_S3_PASSWORD

"""
Configuration
"""
sqs = boto3.resource(
    "sqs",
    aws_access_key_id=AWS_S3_ID,
    aws_secret_access_key=AWS_S3_PASSWORD,
    region_name="us-east-1",
)

"""
Functions
"""


def create_queue():
    queue = sqs.create_queue(QueueName="test", Attributes={"DelaySeconds": "5"})

    print(queue.url)
    print(queue.attributes.get("DelaySeconds"))


def show_queues():
    # get a queue by name
    queue = sqs.get_queue_by_name(QueueName="test")
    print(queue.url)
    print(queue.attributes.get("DelaySeconds"))

    # print all queues
    for queue in sqs.queues.all():
        print(queue.url)

def send_messages():
    pass

def process_messages():
    pass

if __name__ == "__main__":
    # create_queue()
    show_queues()
