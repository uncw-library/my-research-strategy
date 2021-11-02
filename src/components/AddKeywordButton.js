import { Button, Grid, Icon } from '@material-ui/core'

function AddKeywordButton(props) {
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Button aria-label="Add additional keywords" onClick={(e) => props.addKeywordForm()}>
        <Icon style={{ paddingTop: 30, fontSize: 175, color: "#006666" }}>add</Icon>
      </Button>
    </Grid>
  )
}

export default AddKeywordButton;