import React from 'react'
import { Button, Icon, Grid } from '@material-ui/core'

const styles = {
   button: {
      margin: 10,
      textTransform: "capitalize"
   },
}
class ButtonControls extends React.Component {
   render() {
      return (
         <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
               <Button color={(this.props.activeView === "createQuestion") ? "default" : "primary"} variant="raised" style={styles.button}
                  onClick={(e) => this.props.updateActiveView('createQuestion')}>1. Create Research Question</Button>

               <Icon style={{ fontSize: 60, fontWeight: 'bold', marginBottom: -25 }}>arrow_forward</Icon>

               <Button color={(this.props.activeView === "identifyConcepts") ? "default" : "primary"} variant="raised" style={styles.button}
                  disabled={!this.props.question ? true : false}
                  onClick={(e) => this.props.updateActiveView('identifyConcepts')}>2. Identify Key Concepts</Button>

               <Icon style={{ fontSize: 60, fontWeight: 'bold', marginBottom: -25 }}>arrow_forward</Icon>

               <Button color={(this.props.activeView === "findTerms") ? "default" : "primary"} variant="raised" style={styles.button}
                  disabled={!this.props.searchStatement ? true : false}
                  onClick={(e) => this.props.updateActiveView('findTerms')}>3. Find Related Terms</Button>

               <Icon style={{ fontSize: 60, fontWeight: 'bold', marginBottom: -25 }}>arrow_forward</Icon>

               <Button color={(this.props.activeView === "search") ? "default" : "primary"} variant="raised" style={styles.button}
                  disabled={!this.props.searchStatement ? true : false}
                  onClick={(e) => this.props.updateActiveView('search')}>4. Search</Button>

               <Button color="primary" variant="raised" style={styles.button} onClick={(e) => this.props.startOver()}>Start Over</Button>
               <Button color="secondary" id="help" variant="raised" style={styles.button} href="https://library.uncw.edu/ask" target="_blank">Help</Button>
            </Grid>
         </Grid>
      )
   }
}

export default ButtonControls