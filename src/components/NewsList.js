import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadTopstories } from "../state/actions";
import { getStories, getLoading, getError } from '../state/selectors';

import NewsListEntry from "./NewsListEntry";

import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import useStyles from "./styles";

let isInitial = true;

function NewsList() {
    const dispatch = useDispatch();

    const stories = useSelector(state => getStories(state));
    const loading = useSelector(state => getLoading(state));
    const error = useSelector(state => getError(state));

    const [selectedStory, setSelectedStory] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        if (!error && !loading && !selectedStory && stories.length) {
            setSelectedStory(stories[0]);
        }
    }, [error, loading, stories, selectedStory])

    useEffect(() => {
        if (isInitial) {
            dispatch(loadTopstories());
            isInitial = false;
        }
    }, [dispatch])

    const storyClickedHandler = (story) => {
        setSelectedStory(story);
    }

    return (
        <React.Fragment>
            {error && <Typography variant="subtitle2" color="secondary">{error}</Typography>}
            {!error && loading && <Typography variant="subtitle2" color="primary">Loading...</Typography>}
            {!error && !loading &&
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        {stories.map((story, index) => (
                            <Grid item key={index}>
                                <List sx={{ bgcolor: 'background.paper' }}>
                                    <ListItem className={classes.entry} onClick={() => storyClickedHandler(story)} selected={selectedStory?.id === story.id}>
                                        <ListItemText>
                                            <Typography variant="subtitle2">
                                                {story.title}
                                            </Typography>
                                            <Typography variant="subtitle2" color="primary">
                                                {story.time ? new Date(story.time * 1000).toLocaleString() : "Not available"}
                                            </Typography>
                                        </ListItemText>
                                        <Hidden smUp>
                                            <Button size="small" color="secondary" variant="outlined">Details...</Button>
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
                </Grid >}
        </React.Fragment>
    );
}

export default NewsList;
