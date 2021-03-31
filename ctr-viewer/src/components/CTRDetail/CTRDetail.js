import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Link from 'aws-northstar/components/Link';
import Button from 'aws-northstar/components/Button';
import Container from 'aws-northstar/layouts/Container';
import Overview from './Overview/Overview';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import Queue from './Queue/Queue';
import Agent from './Agent/Agent';
import Recordings from './Recordings/Recordings';
import Attributes from './Attributes/Attributes';

const CTRDetail = ({ ctr }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BrowserRouter>
                <Link href={"/" + ctr.ContactId } onClick={handleClickOpen}>
                    {ctr.ContactId}
                </Link>
            </BrowserRouter>
            <Dialog
                fullWidth="true"
                maxWidth="md"
                open={open}
                onClose={handleClose}
            >
                <Container 
                    headingVariant='h2'
                    title={"Contact ID: " + ctr.ContactId }
                >
                    <Overview ctr={ctr} />
                    {ctr.SystemEndpoint === null ? "" : <PhoneNumber ctr={ctr} />}
                    {ctr.Queue === null ? "" : <Queue ctr={ctr} />}
                    {ctr.Agent === null ? "" : <Agent ctr={ctr} />}
                    {ctr.Recordings == null ? "" : <Recordings recordings={ctr.Recordings} />}
                    {Object.keys(ctr.Attributes).length == 0 ? "" : <Attributes ctr={ctr} />}
                </Container>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CTRDetail;