import React from 'react'
import { Grid, Typography } from 'material-ui'

export default ({ activeImage, activeDireactions}) =>
<Grid container style={{marginTop:30, marginBottom:30}}>
    <Grid item xl={5} lg={6} md={6} sm={12} xs={12}>
       <iframe className="tscplayer_inline embeddedObject" name="tsc_player" scrolling="no" frameBorder="0" type="text/html"
               style={{overflow:'hidden'}} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/52a3bf79-ba2a-4552-b0dd-6da70106c867/embed"
               height="300" width="95%" title="Research">
       </iframe>
    </Grid>
    <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
       <Typography variant='title' align='left' style={{marginBottom:10}}>
          {activeDireactions.title}
       </Typography>
       <Typography component='p' align='left' dangerouslySetInnerHTML={{__html: activeDireactions.text}}>
       </Typography>
    </Grid>
</Grid>
