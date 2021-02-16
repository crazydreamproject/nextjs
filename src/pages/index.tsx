import React from 'react';
import Link from 'next/link';
import { Container, Box, List, ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '../appbar';

export default function Index() {
    return (
        <Container maxWidth="sm">
            <AppBar />
            <Box my={4}>
                <Typography variant="h6" component="h1" gutterBottom>
                    Welcome to Crazy Dream Project - Home Page!
                    <br />
                    Project List
                </Typography>
            </Box>
            <Box>
                <List >
                    <Link href="pictonqr">
                        <ListItem button divider selected >
                            <ListItemText>PictOnQR</ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Container>
    );
}
