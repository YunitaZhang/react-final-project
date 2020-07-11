import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Component untuk menampilkan Header

export default ({ styles, action }) => {
    const history = useHistory()
    const data = localStorage.getItem('username')
    if (data === null) {
        history.push('/login')
    }
    function logout(e) {
        e.preventDefault();
        localStorage.clear()
        history.push('/')
    }
    const title = useSelector(state => state.title)
    return (
        <AppBar position="fixed" className={styles.appBar}>
            <Toolbar>
                <IconButton
                    color="dark"
                    aria-label="open drawer"
                    edge="start"
                    onClick={action}
                    className={styles.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={styles.title}>
                    {title}
                </Typography>
                <Button onClick={logout}>
                    <Typography variant="body1" className={styles.title}>
                        Logout
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}