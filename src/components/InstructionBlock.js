import { Grid, Typography } from '@material-ui/core'

function InstructionBlock(props) {
   return (
      <Grid container style={{ marginTop: 30, marginBottom: 30 }}>
         <Grid item xl={5} lg={6} md={6} sm={12} xs={12}>
            <VideoBox activeView={props.activeView} />
         </Grid>
         <Grid item xl={7} lg={6} md={6} sm={12} xs={12}>
            <Typography variant='h6' align='left' style={{ marginBottom: 10 }}>
               {props.instruction.title}
            </Typography>
            <Typography variant='body1' align='left' dangerouslySetInnerHTML={{ __html: props.instruction.text }}>
            </Typography>
         </Grid>
      </Grid>
   )
}

function VideoBox(activeView) {
   if (activeView === 'createQuestion') {
      return (
      <iframe className="tscplayer_inline smart-player-embed-container-iframe embeddedObject" name="tsc_player" scrolling="no" frameBorder="0" type="text/html"
      style={{ overflow: 'hidden' }} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/1934c64e-166b-4411-800a-303bc7bde9af/embed"
      height="300" width="95%" title="Research" />
      )
   }
   if (activeView === 'search') {
      return (
         <iframe className="tscplayer_inline embeddedObject" name="tsc_player" scrolling="no" frameBorder="0" type="text/html"
         style={{ overflow: 'hidden' }} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/70eca49f-40d1-4752-94f9-0d9165a4e93c/embed"
         height="300" width="95%" title="Research" />
      )
   } 
   return (
      <iframe className="tscplayer_inline embeddedObject" name="tsc_player" scrolling="no" frameBorder="0" type="text/html"
         style={{ overflow: 'hidden' }} src="https://www.screencast.com/users/Randall_Library/folders/Tammy uploads/media/52a3bf79-ba2a-4552-b0dd-6da70106c867/embed"
         height="300" width="95%" title="Research" />
   )
}

export default InstructionBlock