import React from 'react'
import { Card, CardContent, TextField, Typography, Grid } from '@material-ui/core'

const styles = {
  card: {
    margin: 10,
  }
}

class AddKeywordForm extends React.Component {
  render() {
    return (
      <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
        <Card style={styles.card}>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2" align="left"
              style={{ marginTop: 15, marginBottom: -15 }}><label htmlFor={`keyword_${this.props.data.id}`}>2. Keyword:</label></Typography>
            <TextField
              id={`keyword_${this.props.data.id}`}
              value={this.props.data.keyword}
              onChange={(e) => this.props.updateTextBox(e, 'keyword', this.props.data.id)}
              margin="normal"
              disabled={this.props.question ? false : true}
              fullWidth
            />
            {this.props.data.keyword ?
              <Typography gutterBottom component="p" align="left"
                style={{ marginTop: 5, marginBottom: -5 }}
                dangerouslySetInnerHTML={{ __html: `<a href="http://www.thesaurus.com/browse/${this.props.data.keyword}" target="_blank">Look up synonyms for ${this.props.data.keyword}</a>` }}>
              </Typography> : ''
            }
            <Typography gutterBottom variant="subtitle1" component="h2" align="left"
              style={{ marginTop: 15, marginBottom: -15 }}><label htmlFor={`synonym1_${this.props.data.id}`} >3. Related terms:</label></Typography>
            <TextField
              id={`synonym1_${this.props.data.id}`}
              value={this.props.data.synonym1}
              onChange={(e) => this.props.updateTextBox(e, 'synonym1', this.props.data.id)}
              margin="normal"
              disabled={this.props.data.keyword ? false : true}
              fullWidth
            />
            <Typography gutterBottom variant="subtitle1" component="h2" align="left"
              style={{ marginTop: 15, marginBottom: -15 }}><label htmlFor={`synonym2_${this.props.data.id}`} >Related terms:</label></Typography>
            <TextField
              id={`synonym2_${this.props.data.id}`}
              value={this.props.data.synonym2}
              onChange={(e) => this.props.updateTextBox(e, 'synonym2', this.props.data.id)}
              margin="normal"
              disabled={this.props.data.keyword ? false : true}
              fullWidth
            />
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default AddKeywordForm