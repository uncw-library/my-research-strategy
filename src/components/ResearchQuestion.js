import { Grid, TextField, Typography } from '@material-ui/core'

function ResearchQuestion(props) {
    return (
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="subtitle1" align="left" style={{ marginTop: 15, marginBottom: -15 }}>
                    <label htmlFor="researchQuestion">1. My research question or statement</label>
                </Typography>
                <TextField
                    id="researchQuestion"
                    value={props.question}
                    //Below updateResearchQuestion
                    onChange={(e) => props.updateTextBox(e, 'question')}
                    margin="normal"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}

export default ResearchQuestion