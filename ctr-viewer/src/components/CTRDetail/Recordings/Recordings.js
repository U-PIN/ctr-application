import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

const Recordings = ({ recordings }) => {
    const rows = recordings.map((recording, index)=> {
        if (recording.MediaStreamType == 'AUDIO') {
            return (
                <Container headingVariant='h4' title={"Recording #" + String(index + 1)}>
                    <ColumnLayout>
                        <Column>
                            <Stack>
                                <KeyValuePair label="Media Stream Type" value={recording.MediaStreamType}></KeyValuePair>
                                <KeyValuePair label="Location" value={recording.Location}></KeyValuePair>
                                <KeyValuePair label="Status" value={recording.Status}></KeyValuePair>
                                <KeyValuePair label="Sorage Type" value={recording.StorageType}></KeyValuePair>
                            </Stack>
                        </Column>    
                    </ColumnLayout>
                </Container>
            );
        }
        else if (recording.MediaStreamType == 'VIDEO') {
            return (
                <Container headingVariant='h4' title={"Recording #" + String(index + 1)}>
                    <ColumnLayout>
                        <Column>
                            <Stack>
                                <KeyValuePair label="Media Stream Type" value={recording.MediaStreamType}></KeyValuePair>
                                <KeyValuePair label="Location" value={recording.Location}></KeyValuePair>
                                <KeyValuePair label="Storage Type" value={recording.StorageType}></KeyValuePair>
                                <KeyValuePair label="Participant Type" value={recording.ParticipantType}></KeyValuePair>
                            </Stack>
                        </Column>  
                        <Column>
                            <Stack>
                                <KeyValuePair label="Fragment Start Number" value={recording.FragmentStartNumber}></KeyValuePair>
                                <KeyValuePair label="Fragment Stop Number" value={recording.FragmentStopNumber}></KeyValuePair>
                                <KeyValuePair label="Start Timestamp" value={recording.StartTimestamp}></KeyValuePair>
                                <KeyValuePair label="Stop Timestamp" value={recording.StopTimestamp}></KeyValuePair>
                            </Stack>
                        </Column>    
                    </ColumnLayout>
                </Container>
            );
        }
        else if (recording.MediaStreamType == 'CHAT') {
            return (
                <Container headingVariant='h4' title={"Recording #" + String(index + 1)}>
                    <ColumnLayout>
                        <Column>
                            <Stack>
                                <KeyValuePair label="Media Stream Type" value={recording.MediaStreamType}></KeyValuePair>
                                <KeyValuePair label="Location" value={recording.Location}></KeyValuePair>
                                <KeyValuePair label="Status" value={recording.Status}></KeyValuePair>
                                <KeyValuePair label="Storage Type" value={recording.StorageType}></KeyValuePair>
                            </Stack>
                        </Column>  
                    </ColumnLayout>
                </Container>
            )   
        }
    });

    return (
        <div>
            { rows }
        </div>
    )
};

export default Recordings;