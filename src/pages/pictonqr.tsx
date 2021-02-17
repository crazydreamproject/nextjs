import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Container, Box, Divider, TextField, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import AppBar from '../appbar';
import BottomNav from '../bottomnav';

export default function PictOnQR() {
    const [url, setUrl] = useState("https://picsum.photos/200");
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(ev.target.value);
    }
    return (
        <Container maxWidth="sm">
            <AppBar />
            <Box my={4}>
                <Typography variant="h6" component="h1" gutterBottom>
                    PictOnQR
                </Typography>
                <span>PictOnQR is a smartphone app that overlay picture of QR data on camera view.</span>
            </Box>
            <Divider />
            <Box my={4}>
                Input URL of picture, and scan generated QR Code with smartphone app.
                <form>
                    <TextField id="pictonqrUrlText" label="URL" fullWidth onChange={handleChange} ></TextField>
                </form>
            </Box>
            <Box my={4} display="flex" alignItems="center" justifyContent="center" >
                <QRCode value={url} />
            </Box>
            <Divider />
            <Box my={4}>
                If QR Code does not contain URL to picture, then some icon will overlay on QR Code.
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Icon</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <PublicIcon />
                            </TableCell>
                            <TableCell>
                                Data is URL. Click to open in browser.
                        </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <InfoIcon />
                            </TableCell>
                            <TableCell>
                                Data is text string. Click to copy to clipboard.
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <br />
                If favicon of URL is available, favicon will be displayed instead.
            </Box>
            <BottomNav />
        </Container>
    );
}
