import React, { useState } from 'react'
import { Header, Menu } from '../Layouts'
import { Gallery, Calculator } from '../Content'
import CssBaseline from '@material-ui/core/CssBaseline';
import Welcome from './Welcome';
import Footer from '../Layouts/Footer'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from '../../reducers'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        background: '#FDEECE',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
        color: '#c86d49'
    },
    logo: {
        display: 'flex',
        padding: 11.6,
        alignItems: 'center',
    },
    menu: {
        color: '#c86d49'
    }
}));

//Component Utama setelah Login


export default props => {
    const [mobileOpen, setMobileOpen] = useState();
    const { windows } = props;
    const classes = useStyles();
    const store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    const container = windows !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <Provider store={store}>
                <CssBaseline />
                <Header styles={classes} action={handleDrawerToggle} />
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                        >
                            <Menu styles={classes} />
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{ paper: classes.drawerPaper }}
                            variant="permanent"
                            open
                        >
                            <Menu styles={classes} />
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                        <Route path='/home/' exact><Welcome /></Route>
                        <Route path='/home/gallery'><Gallery title="Gallery"/></Route>
                        <Route path='/home/calculator'><Calculator title="Calculator"/></Route>
                    <Footer />
                </main>
            </Provider>
        </div>
    )
}