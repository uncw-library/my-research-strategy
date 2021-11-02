import { Grid, TextField, Typography } from '@material-ui/core'

function SearchStatement(props) {
    return (
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="subtitle1" align="left" style={{ marginTop: 15, marginBottom: -15 }}>
                    <label htmlFor="searchStatement">My search statement</label>
                </Typography>
                <TextField
                    id="searchStatement"
                    value={props.query}
                    margin="normal"
                    disabled
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}

export default SearchStatement