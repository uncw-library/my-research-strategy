import React from 'react'
import { Button, Grid } from 'material-ui'

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
          onClick={(e) => updateActiveView('createQuestion')}>Create Research Question</Button>
       <Button color={(activeView === "identifyConcepts") ? "default" : "primary"} variant="raised" style={styles.button}
          disabled={!question ? true : false}
          onClick={(e) => updateActiveView('identifyConcepts')}>Identify Key Concepts</Button>
       <Button color={(activeView === "findTerms") ? "default" : "primary"} variant="raised" style={styles.button}
          disabled={!searchStatement ? true : false}
          onClick={(e) => updateActiveView('findTerms')}>Find Releated Terms</Button>
       <Button color="primary" variant="raised" style={styles.button} onClick={(e) => startOver()}>Start Over</Button>
       <Button color="secondary" variant="raised" style={styles.button}>Help</Button>
    </Grid>
</Grid>
