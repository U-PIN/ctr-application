import React from 'react';
import axios from 'axios';
import Container from 'aws-northstar/layouts/Container';
import SearchUtility from '../SearchUtility/SearchUtility';
import CTRTable from '../Table/CTRTable';

class PageContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        const defaultDatetime = new Date();
        const startTime = defaultDatetime.getUTCFullYear() + 
                    '-' + 
                    (defaultDatetime.getUTCMonth() + 1).toString().padStart(2, '0') + 
                    '-' + 
                    (defaultDatetime.getUTCDate() - 3).toString().padStart(2, '0') + 
                    'T' + 
                    defaultDatetime.getUTCHours().toString().padStart(2, '0') + 
                    ':' + 
                    defaultDatetime.getUTCMinutes().toString().padStart(2, '0') + 
                    ':' + 
                    defaultDatetime.getUTCSeconds().toString().padStart(2, '0') + 
                    'Z';
        
        const endTime = defaultDatetime.getUTCFullYear() + 
                    '-' + 
                    (defaultDatetime.getUTCMonth() + 1).toString().padStart(2, '0') + 
                    '-' + 
                    defaultDatetime.getUTCDate().toString().padStart(2, '0') + 
                    'T' + 
                    defaultDatetime.getUTCHours().toString().padStart(2, '0') + 
                    ':' + 
                    defaultDatetime.getUTCMinutes().toString().padStart(2, '0') + 
                    ':' + 
                    defaultDatetime.getUTCSeconds().toString().padStart(2, '0') + 
                    'Z';

        this.state = {
            isLoading: true,
            ctrList: [],
            startTime: startTime,
            endTime: endTime
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    }

    async componentDidMount() {
        await this.getContactTraceRecords(this.state.startTime, this.state.endTime);
    }

    getContactTraceRecords(startTime, endTime) {
        axios({
            url: process.env.REACT_APP_CTR_API + "?StartTime=" + startTime + "&EndTime=" + endTime,
            method: 'get'
        })
        .then((response) => {
            this.setState({
                ctrList: response.data.ctr_list,
                isLoading: false
            })
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                isLoading: false
            })
        })        
    }

    async handleClick() {
        this.getContactTraceRecords(this.state.startTime, this.state.endTime);
    }

    handleStartTimeChange(value) {
        this.setState(
            {
                startTime: value
            }
        )
    }

    handleEndTimeChange(value) {
        this.setState(
            {
                endTime: value
            }
        )
    }

    render() {
        const {
            isLoading,
            ctrList,
            startTime,
            endTime
        } = this.state;

        return (
            <Container>
                <SearchUtility 
                    startTime={this.state.startTime}
                    endTime={this.state.endTime}
                    handleClick={this.handleClick}
                    handleStartTimeChange={this.handleStartTimeChange}
                    handleEndTimeChange={this.handleEndTimeChange}
                />
                <CTRTable
                    ctrList={this.state.ctrList}
                />
            </Container>
        )
    }
}

export default PageContainer;