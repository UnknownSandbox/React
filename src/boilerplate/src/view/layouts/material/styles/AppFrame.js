export default theme => ({
    '@global': {
        html: {
            boxSizing: 'border-box',
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        body: {
            margin: 0,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            lineHeight: '1.2',
            overflowX: 'hidden',
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
            width: 'auto',
        },
    },
    root: {
        display: 'flex',
        alignItems: 'stretch',
        minHeight: '100vh',
        width: '100%',
    },
    grow: {
        flex: '1 1 auto',
    },
    title: {
        marginLeft: 24,
        flex: '0 1 auto',
    },
    appBar: {
        transition: theme.transitions.create('width'),
    },
    appBarHome: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    [theme.breakpoints.up('lg')]: {
        drawer: {
            width: '250px',
        },
        appBarShift: {
            width: 'calc(100% - 250px)',
        },
        navIconHide: {
            display: 'none',
        },
    },
})