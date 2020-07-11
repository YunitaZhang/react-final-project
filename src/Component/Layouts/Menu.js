import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { listMenu } from './List';
import Avatar from '@material-ui/core/Avatar';

//Component untuk menampilkan menu samping

export default ({ styles }) => {
    return (
        <React.Fragment>
            <div className={styles.logo}>
                <Button color="primary" component={Link} to="/home">
                    <img alt="Yunita" src="/images/home.jpg" width='100%'/>
                </Button>
            </div>
            <List component="nav" className={styles.menu}>
                {listMenu.map(list => {
                    return (
                        <ListItem button
                            component={Link}
                            to={`/home/${list.key}`}
                            key={list.key}>
                            <ListItemIcon>
                                <Avatar className={styles.avatar}>
                                    <img alt='' src='/images/logo.jpg' width='100%' />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary={list.title} />
                        </ListItem>
                    )
                })}
            </List>
        </React.Fragment>
    )
}
