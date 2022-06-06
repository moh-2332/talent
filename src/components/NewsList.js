import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadTopstories } from "../state/actions";
import { getStories } from '../state/selectors';

import NewsListEntry from "./NewsListEntry";

import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import useStyles from "./styles";

const PER_PAGE = 10;

function NewsList() {
    const dispatch = useDispatch();

    const [selectedStory, setSelectedStory] = useState(null);
    const [page, setPage] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const stories = useSelector(getStories);

    const classes = useStyles();

    useEffect(() => {
        if (!selectedStory && stories.length) {
            setSelectedStory(stories[0]);
        }
    }, [stories, selectedStory])

    useEffect(() => {
        dispatch(loadTopstories(page * PER_PAGE, (page + 1) * PER_PAGE));
    }, [dispatch, page])

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const storyClickedHandler = (story) => {
        setSelectedStory(story);
    }

    const scrollHandler = (event) => {
        event.preventDefault()
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        if (window.innerHeight + document.documentElement.scrollTop !== scrollHeight) return;

        setPage(page => page + 1);
    }

    const openHandler = () => setOpenModal(true);

    const closeHandler = () => setOpenModal(false);

    return (
        <React.Fragment>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                    {stories.map((story, index) => (
                        <Grid item key={index}>
                            <List sx={{ bgcolor: 'background.paper' }}>
                                <ListItem className={classes.item} onClick={() => storyClickedHandler(story)} selected={selectedStory?.id === story.id}>
                                    <ListItemText>
                                        <Typography variant="subtitle2">
                                            {story.title}
                                        </Typography>
                                        <Typography variant="subtitle2" color="primary">
                                            {story.time ? new Date(story.time * 1000).toLocaleString() : "Not available"}
                                        </Typography>
                                    </ListItemText>
                                    <Hidden smUp>
                                        <Button size="small" color="secondary" variant="text" onClick={openHandler}>Details...</Button>
                                    </Hidden>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Grid>
                    ))}
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={6}>
                        {selectedStory && <NewsListEntry story={selectedStory} />}
                    </Grid>
                </Hidden>
                <Modal
                    keepMounted
                    open={openModal}
                    onClose={closeHandler}
                >
                    <Box className={classes.modal}>
                        {selectedStory && <NewsListEntry story={selectedStory} />}
                    </Box>
                </Modal>
            </Grid >
        </React.Fragment>
    );
}

export default NewsList;
