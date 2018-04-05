import React from 'react'
import { Grid, Typography } from 'material-ui'

export default ({ activeImage, activeDireactions}) =>
<Grid container style={{marginTop:30, marginBottom:30}}>
    <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
       <img alt={activeImage.name} src={activeImage.location} style={{marginBottom:10}}/>
    </Grid>
    <Grid item xl={8} lg={6} md={6} sm={12} xs={12}>
       <Typography variant='title' align='left' style={{marginBottom:10}}>
          {activeDireactions.title}
       </Typography>
       <Typography component='p' align='left' dangerouslySetInnerHTML={{__html: activeDireactions.text}}>
       </Typography>
    </Grid>
</Grid>
