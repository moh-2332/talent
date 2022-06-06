import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        list: {
            overflowY: "auto",
            maxHeight: "85vh",
        },
        item: {
            cursor: "pointer",
            alignItems: "flex-start"
        },
        story: {
            position: "sticky",
            top: 74
        },
        header: {
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
        },
        info: {
            padding: '5px 10px',
            backgroundColor: theme.palette.primary.main
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main
        },
        text: {
            overflowY: "auto",
            maxHeight: "55vh",
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
        },
        whiteText: {
            color: '#fff'
        }
    }
});

export default useStyles;