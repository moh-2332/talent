import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { getFirstLetter } from "../helpers/text"

import useStyles from "./styles";

function NewsListEntry({ story }) {
    const classes = useStyles();

    const { by, title, time, text, score, kids: comments } = story;
    const createdAt = time ? new Date(time * 1000).toLocaleString() : "Not available";

    return (
        <Card className={classes.story}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar className={classes.avatar}>{getFirstLetter(by)}</Avatar>
                }
                title={title}
                subheader={`Created By: ${by} on ${createdAt}`}
            />
            <Box className={classes.info}>
                <Grid container>
                    {score && <Grid item xs={6}><Typography className={classes.whiteText} component="span" mt={3}>Score: {score}</Typography></Grid>}
                    {comments?.length && <Grid item xs={6}><Typography className={classes.whiteText}>Comments: {comments.length}</Typography></Grid>}
                </Grid>
            </Box>
            <CardContent className={classes.text}>
                <Typography variant="body2" color="primary">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NewsListEntry;