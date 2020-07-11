import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../Layouts/Footer'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#c86d49',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: '#c86d49'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: '#FDEECE',
        color: '#c86d49'
    },
    title: {
        color: '#c86d49'
    },
}));

//Halaman untuk Login

export default () =>  {
    const history = useHistory();
    const data = localStorage.getItem('username')
    if (data !== null) {
        history.push('/home')
    }
    const classes = useStyles();
    const [name, SetName] = useState('');
    const [pass, SetPass] = useState('');
    const [openAlert, SetOpenAlert] = useState(false);

    function processLogin(e) {
        e.preventDefault();
        if (name === 'yunita' && pass === 'yunita') {
            localStorage.setItem('username', name)
            history.push('/dashboard')
        } else {
            SetOpenAlert(true)
            SetName('')
            SetPass('')
        }
    }
    const handleClose = () => {
        SetOpenAlert(false)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <img alt='' src='/images/logo.jpg' width='100%'/>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Log In
                </Typography>
                <form className={classes.form} noValidate onSubmit={processLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={name}
                        onChange={e => SetName(e.target.value)}
                        label="Nama Akun"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={pass}
                        onChange={e => SetPass(e.target.value)}
                        label="Password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Masuk
                    </Button>

                    <Snackbar 
                        open={openAlert} 
                        autoHideDuration={3000} 
                        onClose={handleClose}
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    >
                        <Alert onClose={handleClose} severity="error">
                            Nama Akun / Password Salah
                        </Alert>
                    </Snackbar>
                </form>
            </div>
            <Box mt={8}>
                <Footer />
            </Box>
        </Container>
    );
}