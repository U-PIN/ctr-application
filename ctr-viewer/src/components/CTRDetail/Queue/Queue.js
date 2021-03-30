import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

const Queue = ({ ctr }) => {
    return (
        <Container headingVariant='h4' title='Queue Information'>
            <ColumnLayout>
                <Column>
                    <Stack>
                        <KeyValuePair label="Queue Name" value={ctr.Queue.Name}></KeyValuePair>
                        <KeyValuePair label="Queue ARN" value={ctr.Queue.ARN}></KeyValuePair>
                    </Stack>
                </Column>
                <Column>
                    <Stack>
                        <KeyValuePair label="Queue Dequeue Timestamp" value={ctr.Queue.DequeueTimestamp}></KeyValuePair>
                        <KeyValuePair label="Queue Enqueue Timestamp" value={ctr.Queue.EnqueueTimestamp}></KeyValuePair>
                        <KeyValuePair label="Queue Duration" value={ctr.Queue.Duration + " second(s)"}></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
        </Container>
    );
}

export default Queue;