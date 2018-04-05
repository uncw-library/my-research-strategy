import React from 'react'
import { AppBar, Button, Toolbar, Typography } from 'material-ui'

export default props =>
<div style={{flexGrow: 1}}>
    <AppBar position="static" color="inherit">
        <Toolbar>
            <Typography variant="title" style={{flex:1}} gutterBottom align="left">
                Randall Library My Research Strategy
            </Typography>
            <Button href="Https://Library.uncw.edu" style={{color: '#006666'}}>
                Return to Randall Library Website
            </Button>
        </Toolbar>
    </AppBar>
</div>