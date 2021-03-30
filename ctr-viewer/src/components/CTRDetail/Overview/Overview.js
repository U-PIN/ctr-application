import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

const Overview = ({ ctr }) => {
    return (
        <Container headingVariant='h4' title='Overview of the Contact'>
            <ColumnLayout>
                <Column>
                    <Stack>
                        <KeyValuePair label="Contact ID" value={ctr.ContactId}></KeyValuePair>
                        <KeyValuePair label="Channel" value={ctr.Channel}></KeyValuePair>
                        <KeyValuePair label="Initiation Method" value={ctr.InitiationMethod}></KeyValuePair>
                        <KeyValuePair label="Disconnect Reason" value={ctr.DisconnectReason}></KeyValuePair>
                    </Stack>
                </Column>
                <Column>
                    <Stack>
                        <KeyValuePair label="Agent Connection Attempts" value={ctr.AgentConnectionAttempts + " time(s)"}></KeyValuePair>
                        <KeyValuePair label="Initiation Timestamp" value={ctr.InitiationTimestamp}></KeyValuePair>
                        <KeyValuePair label="Connected To System Timestamp" value={ctr.ConnectedToSystemTimestamp}></KeyValuePair>
                        <KeyValuePair label="Last Update Timestamp" value={ctr.LastUpdateTimestamp}></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
        </Container>
    );
}

export default Overview;