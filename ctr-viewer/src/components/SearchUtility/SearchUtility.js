import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from 'aws-northstar/layouts/Grid';
import Form from 'aws-northstar/components/Form';
import FormSection from 'aws-northstar/components/FormSection';
import FormField from 'aws-northstar/components/FormField';
import Input from 'aws-northstar/components/Input';
import Button from 'aws-northstar/components/Button';

const useStyles = makeStyles(theme => ({
    datetimeSelect: {
        width: "25%",
        marginBottom: theme.spacing(2)
    },
    formSection: {
        width: "50%"
    },
    datetimeInput: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1)
    }
}));

const SearchUtility = ({ startTime, endTime, handleClick, handleStartTimeChange, handleEndTimeChange }) => {

    const classes = useStyles();

    return (
        <div>
            <Form
                actions = {
                    <Button variant="primary" onClick={() => handleClick()} >Submit</Button>
                }
                className={classes.datetimeSelect}
            >
                <FormSection header='Datetime Select'>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <FormField label='Start Time' className={classes.datetimeInput}>
                                <Input 
                                    type='text' 
                                    value={startTime} 
                                    controlId="startTime"
                                    onChange={(value) => handleStartTimeChange(value)} 
                                />
                            </FormField>
                        </Grid>
                        <Grid item xs={6}>
                            <FormField label='End Time' className={classes.datetimeInput}>
                                <Input 
                                    type='text' 
                                    value={endTime} 
                                    controlId="endTime" 
                                    onChange={(value) => handleEndTimeChange(value)}
                                />
                            </FormField>
                        </Grid>
                    </Grid>
                </FormSection>
            </Form>
        </div>
    );
}

export default SearchUtility;