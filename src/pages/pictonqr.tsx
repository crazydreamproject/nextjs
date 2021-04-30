import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import QRCode from 'qrcode.react';
import { Container, Box, Card, CardActionArea, CardMedia, Divider, Grid, Link, TextField, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import AppBar from '../appbar';
import BottomNav from '../bottomnav';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        textAlign: 'center',
    },
    icon: {
        width: 100,
        height: 100,
    },
    overlayImage: {
        width: 512,
        height: 290,
    },
    promoVideo: {
        width: 240,
        height: 320,
    },
    googlePlay: {
        width: 260,
        height: 100,
    },
    appStore: {
        borderRadius: 13,
        width: 240,
        height: 60,
    },
    appStoreCard: {
        padding: 10,
        borderRadius: 13,
        width: 260,
        height: 83,
    }
});

export default function PictOnQR() {
    const [url, setUrl] = useState("https://picsum.photos/200");
    const classes = useStyles();
    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(ev.target.value);
    }
    return (
        <Container maxWidth="sm">
            <AppBar />
            <Box my={4} style={{ textAlign: 'center' }}>
                <Typography variant="h6" component="h1" gutterBottom>
                    PictOnQR
                </Typography>
                <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                    <Grid item xs={3}>
                        <Card className={classes.icon}>
                            <CardMedia className={classes.icon} image='/icon.png' title='Pict On QR' />
                        </Card>
                    </Grid>
                    <Typography variant="body1">
                        PictOnQR is a smartphone app that overlay picture and video in QR code data on top of camera display.
                    </Typography>
                    <ReactPlayer controls={true} loop={true} width={240} url='https://youtu.be/HW1CNRzT8Bo' />
                </Grid>
                {/*
                <Card className={classes.overlayImage}>
                    <CardMedia className={classes.overlayImage} image='/overlay-image.png' title='Pict On QR' />
                </Card>
                */}
            </Box>
            <Divider />
            <Box my={4}>
                <Link href='https://play.google.com/store/apps/details?id=com.cdp.pictonqr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <Card className={classes.googlePlay}>
                        <CardActionArea>
                            <CardMedia className={classes.googlePlay} image='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' title='Get it on Google Play' />
                        </CardActionArea>
                    </Card>
                </Link>
                <Link href='https://apple.co/3e1tmeK'>
                    <Card className={classes.appStoreCard}>
                        <CardActionArea>
                            <CardMedia className={classes.appStore} image='https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg'
                             title='"Download on the App Store' />
                        </CardActionArea>
                    </Card>
                </Link>
            </Box>
            <Divider />
            <Box my={4}>
                <Typography variant="body1">
                    Input URL of picture, and scan generated QR Code with smartphone app.
                </Typography>
                <form>
                    <TextField id="pictonqrUrlText" label="URL" fullWidth onChange={handleChange} ></TextField>
                </form>
            </Box>
            <Box my={4} display="flex" alignItems="center" justifyContent="center" >
                <QRCode value={url} />
            </Box>
            <Divider />
            <Box my={4}>
                <Typography variant="body1">
                    If QR Code does not contain URL to picture, then some icon will overlay on QR Code.
                </Typography>
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
                <Typography variant="body1">
                    If favicon of URL is available, favicon will be displayed instead.
                </Typography>
            </Box>
            <BottomNav />
        </Container>
    );
}
