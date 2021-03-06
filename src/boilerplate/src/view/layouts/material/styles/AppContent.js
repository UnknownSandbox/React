export default theme => ({
    content: theme.mixins.gutters({
        paddingTop: 80,
        flex: '1 1 100%',
        minHeight: '100%',
        maxWidth: '100%',
        margin: '0 auto',
    }),
    [theme.breakpoints.up(948)]: {
        content: {
            maxWidth: 900,
        },
    },
})