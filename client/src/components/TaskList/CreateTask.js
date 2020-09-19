import React from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, blueGrey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//Others supporting imports
import { FiPlus } from 'react-icons/fi';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[200],
      },
      secondary: {
        main: blueGrey[100],
      },
    },
  });

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function CreateTask() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div>
      <div>
        
        <button className="btns orangeButton" onClick={handleClickOpen}><FiPlus/> Create a Task</button>
        
        <ThemeProvider theme={theme}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new Task</DialogTitle>
        
        <DialogContent>
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Select Deadline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
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
`        </div>

        <div>
            <TextField
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
          <Button onClick={handleClose} color="primary" variant="outlines">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlines">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
      </div>
    </div>
  );
}
