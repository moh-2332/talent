import React, { useState } from 'react';

import NewsListEntry from "./NewsListEntry"

import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import useStyles from "./styles";

const stories = [
    {
        by: "d23",
        id: 31624401,
        score: 402,
        text: "I feel like every time I search for something I expect the products to be either fake, filled with fake reviews, broken when I receive them, or from a no-name fake brand that popped up last week.  It has become seemingly impossible to wade through the mess.<p>What&#x27;s worse, there seems to be zero way to report these listings.  I tried submitting a review warning other customers about the fake reviews for a fake product, but the review was not approved.  In that particular instance, I was actively recommended a &quot;wasp trap&quot; by Amazon.  Curious, I saw it was rated 4.8.<p>Turns out the positive reviews were all for... a pet cemetery headstone (complete with photos, to make the issue completely unambiguous).  The listing itself was posted by a seller that had almost all negative reviews that were -- removed by Amazon!  The reason?  Amazon took responsibility, since it was fulfilled by Amazon.  The problem: none of the negative reviews had anything to do with things like shipping time.  They were all basically calling the product a scam.<p>This seems like a looming disaster for Amazon.  It baffles me that there is no way for customers to at least report these issues.  I&#x27;ve done most of my shopping for the last 15 years on Amazon, but I&#x27;m seriously considering stopping.  Is anyone else in this boat?",
        time: 1654372352,
        title: "Ask HN: Anyone else quickly losing confidence in Amazon?",
        type: "story",
        kids: [
            {
                by: "ziml77",
                id: 31625399,
                parent: 31624401,
                text: "Losing confidence? No, I lost that years ago. For quite some time the vast majority of the listings have been drop-shipped AliExpress garbage. Many of them are obvious because of terrible photoshops, randomly named branding, and those strange bold brackets in the product description.<p>But some can be harder to spot because of tricks that sellers use to essentially hijack listings for other products to carry all the positive reviews along. Or they may just go the route of putting completely fake reviews on the product. Some may even be from verified purchasers because they packed a card along with the product offering compensation for a 5 star review. Or they can get verified reviews in an even slimier way involving ordering from themselves and then shipping random crap to people who&#x27;ve they&#x27;ve sent stuff to before.<p>And then there&#x27;s the inventory that&#x27;s poisoned with counterfeits. Thanks to inventory co-mingling counterfeit and legit products can end up getting mixed together. There&#x27;s a chance that even buying from a fully legit listing will end up with you getting sent a counterfeit product.<p>However, despite all of that I do still use Amazon. Their immense investment into logistics means that many things will make it to me next-day. And their return policies allow me to order with the confidence that if I get a fraudulent item (or just something I don&#x27;t like) it will be fairly painless to get a replacement or my money back.<p>That said, I have also been making more efforts over the years to not use Amazon. I tend to buy all my major electronics from Best Buy or direct from the manufacturer. And I would <i>never</i> buy any food or medicine from Amazon. I don&#x27;t want to risk things that go into me being counterfeit.",
                time: 1654379041,
                type: "comment"
            }
        ]
    },
    {
        by: "d23",
        id: 31624402,
        score: 402,
        text: "I feel like every time I search for something I expect the products to be either fake, filled with fake reviews, broken when I receive them, or from a no-name fake brand that popped up last week.  It has become seemingly impossible to wade through the mess.<p>What&#x27;s worse, there seems to be zero way to report these listings.  I tried submitting a review warning other customers about the fake reviews for a fake product, but the review was not approved.  In that particular instance, I was actively recommended a &quot;wasp trap&quot; by Amazon.  Curious, I saw it was rated 4.8.<p>Turns out the positive reviews were all for... a pet cemetery headstone (complete with photos, to make the issue completely unambiguous).  The listing itself was posted by a seller that had almost all negative reviews that were -- removed by Amazon!  The reason?  Amazon took responsibility, since it was fulfilled by Amazon.  The problem: none of the negative reviews had anything to do with things like shipping time.  They were all basically calling the product a scam.<p>This seems like a looming disaster for Amazon.  It baffles me that there is no way for customers to at least report these issues.  I&#x27;ve done most of my shopping for the last 15 years on Amazon, but I&#x27;m seriously considering stopping.  Is anyone else in this boat?",
        time: 1654372352,
        title: "Ask HN: Anyone else quickly losing confidence in Amazon?",
        type: "story",
        kids: [
            31625399,
            31625978,
            31624935,
            31625282,
        ]
    },
    {
        by: "d23",
        id: 31624403,
        score: 402,
        text: "I feel like every time I search for something I expect the products to be either fake, filled with fake reviews, broken when I receive them, or from a no-name fake brand that popped up last week.  It has become seemingly impossible to wade through the mess.<p>What&#x27;s worse, there seems to be zero way to report these listings.  I tried submitting a review warning other customers about the fake reviews for a fake product, but the review was not approved.  In that particular instance, I was actively recommended a &quot;wasp trap&quot; by Amazon.  Curious, I saw it was rated 4.8.<p>Turns out the positive reviews were all for... a pet cemetery headstone (complete with photos, to make the issue completely unambiguous).  The listing itself was posted by a seller that had almost all negative reviews that were -- removed by Amazon!  The reason?  Amazon took responsibility, since it was fulfilled by Amazon.  The problem: none of the negative reviews had anything to do with things like shipping time.  They were all basically calling the product a scam.<p>This seems like a looming disaster for Amazon.  It baffles me that there is no way for customers to at least report these issues.  I&#x27;ve done most of my shopping for the last 15 years on Amazon, but I&#x27;m seriously considering stopping.  Is anyone else in this boat?",
        time: 1654372352,
        title: "Ask HN: Anyone else quickly losing confidence in Amazon?",
        type: "story"
    }
]

function NewsList() {
    const [selectedStory, setSelectedStory] = useState(stories[0]);
    const classes = useStyles();

    const storyClickedHandler = (story) => {
        setSelectedStory(story);
        console.log(story)
    }

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {stories.map((story) => (
                        <Grid item key={story.id}>
                            <List sx={{ bgcolor: 'background.paper' }}>
                                <ListItem className={classes.entry} onClick={() => storyClickedHandler(story)} selected={selectedStory.id === story.id}>
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
                        <NewsListEntry story={selectedStory} />
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment>
    );
}

export default NewsList;
