import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../action';
import { listGallery } from '../Layouts/List'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Component untuk menampilkan gallery

export default ({ title }) => {
    
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setTitle(title))
    })

    return (
        <React.Fragment>
            <Grid container>
                {listGallery.map(list => {
                    return (
                        <Grid item xs={6} style={{padding: '10px'}}>
                            <Paper elevation={3}>
                                <img alt={list.key} src={list.image} width='100%' />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}