export default theme => ({
    paper: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        color: theme.palette.text.secondary,
        '&:hover': {
            color: theme.palette.primary[500],
        },
    },
    toolbar: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    anchor: {
        color: theme.palette.text.secondary,
    },
})