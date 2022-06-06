import React from 'react';

import { useSelector } from "react-redux";
import { getStatus } from "./state/selectors";

import { Container, Typography, Box } from '@material-ui/core';

import NewsList from './components/NewsList';
import { Task2 } from './Task2';

function App() {
    const status = useSelector(getStatus);
    return (
        <Container maxWidth="md">
            <Box p={2} sx={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                <Typography variant="h4">Hacker News Topstories</Typography>
                <Typography variant="subtitle2">{status.message}</Typography>
            </Box>
            <NewsList />
            <Task2 />
        </Container>
    );
}

export default App;
