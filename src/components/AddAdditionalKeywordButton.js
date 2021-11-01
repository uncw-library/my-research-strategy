import React from 'react'
import { Button, Grid, Icon } from '@material-ui/core'

class AddAdditionalKeywordButton extends React.Component {
  render() {
    return (
      <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
        <Button aria-label="Add additional keywords" onClick={(e) => this.props.addAdditionalKeywordForm()}>
          <Icon style={{ paddingTop: 30, fontSize: 175, color: "#006666" }}>add</Icon>
        </Button>
      </Grid>
    )
  }
}

export default AddAdditionalKeywordButton;