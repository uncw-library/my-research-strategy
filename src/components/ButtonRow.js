import React from 'react'
import { Button, Icon, Grid } from '@material-ui/core'

const styles = {
   button: {
      margin: 10,
      textTransform: "capitalize"
   },
}

function ButtonRow(props) {
   return (
      <Grid container>
         <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button color={(props.activeView === "createQuestion") ? "primary" : "default"} variant="contained" style={styles.button}
               onClick={(e) => props.updateActiveView('createQuestion')}>1. Create Research Question</Button>

            <Icon style={{ fontSize: 60, fontWeight: 'bold', marginBottom: -25 }}>arrow_forward</Icon>

            <Button color={(props.activeView === "identifyConcepts") ? "primary" : "default"} variant="contained" style={styles.button}
               disabled={!props.question ? true : false}
               onClick={(e) => props.updateActiveView('identifyConcepts')}>2. Identify Key Concepts</Button>

            <Icon style={{ fontSize: 60, fontWeight: 'bold', marginBottom: -25 }}>arrow_forward</Icon>

            <Button color={(props.activeView === "findTerms") ? "primary" : "default"} variant="contained" style={styles.button}
               disabled={!props.query ? true : false}
               onClick={(e) => props.updateActiveView('findTerms')}>3. Find Related Terms</Button>

            <Icon style={{ fontSize: 60, fontWeight: 'bold', marginBottom: -25 }}>arrow_forward</Icon>

            <Button color={(props.activeView === "search") ? "primary" : "default"} variant="contained" style={styles.button}
               disabled={!props.query ? true : false}
               onClick={(e) => props.updateActiveView('search')}>4. Search</Button>

            <Button color="primary" variant="contained" style={styles.button} onClick={(e) => props.startOver()}>Start Over</Button>
            <Button color="secondary" id="help" variant="contained" style={styles.button} href="https://library.uncw.edu/ask" target="_blank">Help</Button>
         </Grid>
      </Grid>
   )
}

export default ButtonRow