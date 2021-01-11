import React from 'react'
import { Button, Grid, Icon } from '@material-ui/core'

export default ({ addAdditionalKeywordForm }) =>
<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
  <Button aria-label="Add additional keywords" onClick={(e) => addAdditionalKeywordForm()}>
    <Icon style={{paddingTop: 30, fontSize: 175, color: "#006666"}}>add</Icon>
  </Button>
</Grid>
