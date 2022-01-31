import useStyles from './useStyles';
import { Box, Grid, Typography, Button } from '@mui/material';
import FormInput from '../../components/FormInput/FormInput';

export default function Settings(): JSX.Element {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box width="70%" ml={5}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                paddingBottom: '2rem',
                fontSize: 68,
              }}
            >
              Find the care your dog deserves
            </Typography>
            <Box width="70%" mb={2}>
              <FormInput
                id="email"
                label="Where"
                fullWidth
                margin="normal"
                name="email"
                placeholder="Anywhere"
                autoComplete="email"
                autoFocus
              />
            </Box>
            <Box display="flex" flexDirection="row" width="70%" mb={2}>
              <FormInput
                id="date"
                label="drop in"
                fullWidth
                margin="normal"
                name="date"
                placeholder="mm/dd/yyyy"
                autoFocus
              />
              <FormInput
                id="date"
                label="drop off"
                fullWidth
                margin="normal"
                name="date"
                placeholder="mm/dd/yyyy"
                autoFocus
              />
            </Box>
            <Box textAlign="left">
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className={classes.formButton}
                disableElevation
              >
                Find my dog sitter
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.rightHalf} />
      </Grid>
    </Box>
  );
}
