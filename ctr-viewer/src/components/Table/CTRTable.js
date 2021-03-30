import React from 'react';
import Table from 'aws-northstar/components/Table';
import CTRDetail from '../CTRDetail/CTRDetail';

const columnDefinitions = [
    {
        id: 'ContactId',
        width: 300,
        Header: 'Contact ID',
        accessor: 'ContactId',
        Cell: ({row}) => {
            if (row && row.original) {
                return <CTRDetail ctr={row.original} />
            }
        }
    },
    {
        id: 'Channel',
        width: 100,
        Header: 'Channel',
        accessor: 'Channel'
    },
    {
        id: 'CustomerEndpoint.Address',
        width: 200,
        Header: 'Customer Phone Number',
        accessor: 'CustomerEndpoint.Address'
    },
    {
        id: 'SystemEndpoint.Address',
        width: 200,
        Header: 'Connect Phone Number',
        accessor: 'SystemEndpoint.Address'
    },
    {
        id: 'InitiationTimestamp',
        width: 200,
        Header: 'Initiation Timestamp',
        accessor: 'InitiationTimestamp'
    },
    {
        id: 'DisconnectTimestamp',
        width: 200,
        Header: 'Disconnect Timestamp',
        accessor: 'DisconnectTimestamp'
    },
    {
        id: 'Queue.Name',
        width: 300,
        Header: 'Queue',
        accessor: 'Queue.Name'
    },
    {
        id: 'Agent.Username',
        width: 200,
        Header: 'Agent',
        accessor: 'Agent.Username'
    },
]

const CTRTable = ({ ctrList, isLoading }) => {
    return (
        <div>
            <Table 
                tableTitle='Contact Trace Records'
                disableRowSelect={true}
                columnDefinitions={columnDefinitions}
                loading={isLoading}
                items={ctrList}
                pageSizes={[50, 100, 150]}
                defaultPageSize={50}
                sortBy={[{
                    id: 'InitiationTimestamp',
                    desc: true
                }]}
                getRowId={React.useCallback(data => data.ContactId, [])}
            />
        </div>
    );
}

export default CTRTable;