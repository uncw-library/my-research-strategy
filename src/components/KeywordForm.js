import { Card, CardContent, TextField, Typography, Grid } from '@material-ui/core'

function KeywordForm(props) {
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
      <Card style={{ margin: 10 }}>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2" align="left"
            style={{ marginTop: 15, marginBottom: -15 }}>
            <label htmlFor={`keyword_${props.data.id}`}>2. Keyword:</label>
          </Typography>
          <TextField
            id={`keyword_${props.data.id}`}
            value={props.data.keyword}
            onChange={(e) => props.updateTextBox(e, 'keyword', props.data.id)}
            margin="normal"
            disabled={props.question ? false : true}
            fullWidth
          />
          {props.data.keyword ?
            <Typography gutterBottom component="p" align="left"
              style={{ marginTop: 5, marginBottom: -5 }}
              dangerouslySetInnerHTML={{ __html: `<a href="http://www.thesaurus.com/browse/${props.data.keyword}" target="_blank">Look up synonyms for ${props.data.keyword}</a>` }}>
            </Typography> : ''
          }
          <Typography gutterBottom variant="subtitle1" component="h2" align="left"
            style={{ marginTop: 15, marginBottom: -15 }}>
            <label htmlFor={`synonym1_${props.data.id}`}>3. Related terms:</label>
          </Typography>
          <TextField
            id={`synonym1_${props.data.id}`}
            value={props.data.synonym1}
            onChange={(e) => props.updateTextBox(e, 'synonym1', props.data.id)}
            margin="normal"
            disabled={props.data.keyword ? false : true}
            fullWidth
          />
          <Typography gutterBottom variant="subtitle1" component="h2" align="left"
            style={{ marginTop: 15, marginBottom: -15 }}>
            <label htmlFor={`synonym2_${props.data.id}`}>Related terms:</label>
          </Typography>
          <TextField
            id={`synonym2_${props.data.id}`}
            value={props.data.synonym2}
            onChange={(e) => props.updateTextBox(e, 'synonym2', props.data.id)}
            margin="normal"
            disabled={props.data.keyword ? false : true}
            fullWidth
          />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default KeywordForm