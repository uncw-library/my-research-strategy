import React from 'react'
import { Grid, TextField, Typography } from 'material-ui'

export default ({ searchStatement }) =>
<Grid container>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="subheading" align="left" style={{marginTop: 15, marginBottom: -15}}>
            My search statement
        </Typography>
        <TextField
          id="searchStatement"
          value={searchStatement}
          margin="normal"
          disabled
          fullWidth
        />
    </Grid>
</Grid>
