import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

const Agent = ({ ctr }) => {

    let hierarchyGroups = "";

    for (let level in ctr.Agent.HierarchyGroups) {
        if (ctr.Agent.HierarchyGroups[level] != null) {
            hierarchyGroups = hierarchyGroups + ctr.Agent.HierarchyGroups[level].GroupName + "/";
        } else {
            hierarchyGroups = hierarchyGroups.slice(0, -1);
            break;
        }
    }

    if (hierarchyGroups.length == 0) {
        hierarchyGroups = "-"
    }

    return (
        <Container headingVariant='h4' title='Agent Information'>
            <ColumnLayout>
                <Column>
                    <Stack>
                        <KeyValuePair label="Agent Name" value={ctr.Agent.Username}></KeyValuePair>
                        <KeyValuePair label="Agent ARN" value={ctr.Agent.ARN}></KeyValuePair>
                        <KeyValuePair label="Hierarchy Group" value={hierarchyGroups} ></KeyValuePair>
                    </Stack>
                </Column>
                <Column>
                    <Stack>
                        <KeyValuePair label="Connected To Agent Timestamp" value={ctr.Agent.ConnectedToAgentTimestamp}></KeyValuePair>
                        <KeyValuePair label="ACW Start Timestamp" value={ctr.Agent.AfterContactWorkStartTimestamp}></KeyValuePair>
                        <KeyValuePair label="ACW End Timestamp" value={ctr.Agent.AfterContactWorkEndTimestamp}></KeyValuePair>
                        <KeyValuePair label="Number of Holds" value={ctr.Agent.NumberOfHolds + " time(s)"}></KeyValuePair>                        
                    </Stack>
                </Column>
                <Column>
                    <Stack>
                        <KeyValuePair label="ACW Duration" value={ctr.Agent.AfterContactWorkDuration + " second(s)"}></KeyValuePair>
                        <KeyValuePair label="Agent Interaction Duration" value={ctr.Agent.AgentInteractionDuration + " second(s)"}></KeyValuePair>
                        <KeyValuePair label="Customer Hold Duration" value={ctr.Agent.CustomerHoldDuration + " second(s)"}></KeyValuePair>
                        <KeyValuePair label="Longest Hold Duration" value={ctr.Agent.LongestHoldDuration + " second(s)"}></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
        </Container>
    );
}

export default Agent;