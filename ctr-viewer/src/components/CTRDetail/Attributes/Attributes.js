import React from 'react';
import Container from 'aws-northstar/layouts/Container';
import ColumnLayout, { Column } from 'aws-northstar/layouts/ColumnLayout';
import KeyValuePair from 'aws-northstar/components/KeyValuePair';
import Stack from 'aws-northstar/layouts/Stack';

const Attributes = ({ ctr }) => {
    const attributes = [];

    for (let key in ctr) {
        if (key.indexOf('Attributes') === 0) {
            for (let attributeKey in ctr[key]) {
                attributes.push(
                    {
                        "key": attributeKey,
                        "value": ctr[key][attributeKey]
                    }
                )
            }
        }
    }

    const rows = attributes.map((attribute, index) => 
        <KeyValuePair label={attribute["key"]} value={attribute["value"]}></KeyValuePair>
    );

    return (
        <Container headingVariant='h4' title='Attributes'>
            <ColumnLayout>
                <Column>
                    <Stack>
                        {rows}
                    </Stack>
                </Column>
            </ColumnLayout>
        </Container>
    );
}

export default Attributes;