import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 250,
        marginBottom: '50px'
    },
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#c86d49',
        marginBottom: '50px'
    },
    title: {
        color: '#c86d49'
    },
}));


export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Card className={classes.root}>
                        <CardContent>
                            <img alt='' src='/images/logo.jpg' width='100%' />
                        </CardContent>
                    </Card>
                    <Typography variant='h5'>
                        Welcome to Happiness
                    </Typography>
                    <Typography variant='h5'>
                        Cuteness Puppies in here
                    </Typography>
                </div>
            </Container>
        </React.Fragment>
    )
}