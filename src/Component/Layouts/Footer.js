import React from 'react'
import { Typography } from '@material-ui/core'

const style = {
    root: {
        flexGrow: 1,
        textAlign: "center",
        marginTop: 5,
        padding: 5
    }
}

// Component untuk menampilkan footer

export default () => {
    return (
        <Typography style={style.root} variant="body2" color="textSecondary">
            {'Copyright © Yunita '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}