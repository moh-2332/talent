import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography, Box } from '@material-ui/core';
import store from './state/store';
import NewsList from './components/NewsList';
// import { Task2 } from './Task2';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Box m={2}><Typography variant="h4">Hacker News Topstories</Typography></Box>
                <NewsList />
                {/* <Task2 /> */}
            </Container>
        </Provider>
    );
}

export default App;
