import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function EditButton() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <IconButton aria-label="edit" className={classes.margin}>
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
