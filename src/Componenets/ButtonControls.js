import React from 'react'
import { Button, Icon, Grid } from '@material-ui/core'

const styles = {
    button: {
        margin: 10,
        textTransform: "capitalize"
    },
}

export default ({ activeView, question, searchStatement, updateActiveView, startOver }) =>
<Grid container>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
       <Button color={(activeView === "createQuestion") ? "default" : "primary"} variant="raised" style={styles.button}
          onClick={(e) => updateActiveView('createQuestion')}>1. Create Research Question</Button>

          <Icon style={{fontSize: 60, fontWeight: 'bold', marginBottom: -25}}>arrow_forward</Icon>

       <Button color={(activeView === "identifyConcepts") ? "default" : "primary"} variant="raised" style={styles.button}
          disabled={!question ? true : false}
          onClick={(e) => updateActiveView('identifyConcepts')}>2. Identify Key Concepts</Button>

          <Icon style={{fontSize: 60, fontWeight: 'bold', marginBottom: -25}}>arrow_forward</Icon>

       <Button color={(activeView === "findTerms") ? "default" : "primary"} variant="raised" style={styles.button}
          disabled={!searchStatement ? true : false}
          onClick={(e) => updateActiveView('findTerms')}>3. Find Related Terms</Button>

          <Icon style={{fontSize: 60, fontWeight: 'bold', marginBottom: -25}}>arrow_forward</Icon>

       <Button color={(activeView === "search") ? "default" : "primary"} variant="raised" style={styles.button}
          disabled={!searchStatement ? true : false}
          onClick={(e) => updateActiveView('search')}>4. Search</Button>

       <Button color="primary" variant="raised" style={styles.button} onClick={(e) => startOver()}>Start Over</Button>
       <Button color="secondary" variant="raised" style={styles.button} href="https://library.uncw.edu/ask" target="_blank">Help</Button>
    </Grid>
</Grid>
