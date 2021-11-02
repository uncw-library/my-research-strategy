import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'


class ResearchQuestion extends React.Component {
    // export default ({ question, updateTextBox }) =>
    render() {
        return (
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="subtitle1" align="left" style={{ marginTop: 15, marginBottom: -15 }}>
                        <label htmlFor="researchQuestion">1. My research question or statement</label>
                    </Typography>
                    <TextField
                        id="researchQuestion"
                        value={this.props.question}
                        //Below updateResearchQuestion
                        onChange={(e) => this.props.updateTextBox(e, 'question')}
                        margin="normal"
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }
}

export default ResearchQuestion