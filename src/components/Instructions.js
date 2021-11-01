import React from 'react'
import { Grid, Typography } from '@material-ui/core'

class Instructions extends React.Component {
   render() {
      return (
         <Grid container style={{ marginTop: 30, marginBottom: 30 }}>
            <Grid item xl={5} lg={6} md={6} sm={12} xs={12}>
               {(this.props.activeView === 'createQuestion') ?
                  <iframe class="tscplayer_inline smart-player-embed-container-iframe embeddedObject" name="tsc_player" scrolling="no" frameborder="0" type="text/html"
                     style={{ overflow: 'hidden' }} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/1934c64e-166b-4411-800a-303bc7bde9af/embed"
                     height="300" width="95%" title="Research">
                  </iframe> : (this.props.activeView === 'search') ?
                     <iframe className="tscplayer_inline embeddedObject" name="tsc_player" scrolling="no" frameBorder="0" type="text/html"
                        style={{ overflow: 'hidden' }} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/70eca49f-40d1-4752-94f9-0d9165a4e93c/embed"
                        height="300" width="95%" title="Research">
                     </iframe> :
                     <iframe className="tscplayer_inline embeddedObject" name="tsc_player" scrolling="no" frameBorder="0" type="text/html"
                        style={{ overflow: 'hidden' }} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/52a3bf79-ba2a-4552-b0dd-6da70106c867/embed"
                        height="300" width="95%" title="Research">
                     </iframe>
               }
            </Grid>
            <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
               <Typography variant='title' align='left' style={{ marginBottom: 10 }}>
                  {this.props.activeDireactions.title}
               </Typography>
               <Typography component='p' align='left' dangerouslySetInnerHTML={{ __html: this.props.activeDireactions.text }}>
               </Typography>
            </Grid>
         </Grid>
      )
   }
}

export default Instructions