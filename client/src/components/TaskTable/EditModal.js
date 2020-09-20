import React from 'react';
import './TaskTable.css';

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { orange, blueGrey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[200],
      },
      secondary: {
        main: blueGrey[400],
      },
    },
  });

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 180,
  },
}));

export default function EditButton({open, onClose}) {

  const classes = useStyles();
  const [number, setPriority] = React.useState('');

  const handleChange = (event) => {
    setPriority(event.target.value);
  };


  return (
    <div>
      <div>
      <ThemeProvider theme={theme}>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog">Edit Task</DialogTitle>
        <DialogContent>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="simple-select-outlined-label">Priority</InputLabel>
          <Select
            labelId="simple-select-outlined-label"
            id="simple-select-outlined"
            value={number}
            onChange={handleChange}
            label="Priority"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
          </FormControl>
        </div>
        <div>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task description"
            type="text"
            variant="outlined"
            fullWidth
            />
        </div>
        <div>
            <TextField
            margin="dense"
            id="outlined-textarea"
            label="Notes"
            multiline
            variant="outlined"
            rows={4}
            fullWidth
            />
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary" variant="text">
            Cancel
          </Button>
          <Button onClick={onClose} color="secondary" variant="text">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
      </div>
    </div>
  );
}
