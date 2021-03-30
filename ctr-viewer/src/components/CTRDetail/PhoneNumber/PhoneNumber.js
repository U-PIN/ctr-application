import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

const PhoneNumber = ({ ctr }) => {
    return (
        <Container headingVariant='h4' title='Phone Numbers'>
            <ColumnLayout>
                <Column>
                    <Stack>
                        <KeyValuePair label="Connect Phone Number" value={ctr.SystemEndpoint.Address}></KeyValuePair>
                        <KeyValuePair label="Customer Phone Number" value={ctr.CustomerEndpoint.Address}></KeyValuePair>
                    </Stack>
                </Column>
            </ColumnLayout>
        </Container>
    );
}

export default PhoneNumber;