import React from 'react'
import { Card, TextField, Typography, Grid } from 'material-ui'
import { CardContent } from 'material-ui/Card';

const styles = {
    card: {
        margin: 10,
    }
}

export default ({ data, updateTextBox, question }) =>
<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
    <Card style={styles.card}>
        <CardContent>
        <Typography gutterBottom variant="subheading" component="h2" align="left"
                    style={{marginTop: 15, marginBottom: -15}}>Keyword:</Typography>
          <TextField
            id={`keyword_${data.id}`}
            value={data.keyword}
            onChange={(e) => updateTextBox(e, 'keyword', data.id)}
            margin="normal"
            disabled={question ? false: true}
            fullWidth
          />
        { data.keyword ?
            <Typography gutterBottom component="p" align="left"
                    style={{marginTop: 5, marginBottom: -5}}
                    dangerouslySetInnerHTML={{__html: `<a href="http://www.thesaurus.com/browse/${data.keyword}" target="_blank">Look up synonyms for ${data.keyword}</a>`}}>
                    </Typography> : ''
        }
          <TextField
            id={`synonym1_${data.id}`}
            value={data.synonym1}
            onChange={(e) => updateTextBox(e, 'synonym1', data.id)}
            margin="normal"
            disabled={data.keyword ? false: true}
            fullWidth
          />
          <TextField
            id={`synonym2_${data.id}`}
            value={data.synonym2}
            onChange={(e) => updateTextBox(e, 'synonym2', data.id)}
            margin="normal"
            disabled={data.keyword ? false: true}
            fullWidth
          />
        </CardContent>
    </Card>
</Grid>
