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
            top: 100
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
        },
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }
    }
});

export default useStyles;