import React from 'react';
//Material UI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';


export default function MoreMenu({handleDeleteTaskList, taskListId }) {
  
  //Menu Open/CLose Handle
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Delete Task List handle
  const onhandleDeleteTaskList = () => {
    handleDeleteTaskList({
      taskListId: taskListId
    });
    handleClose();
  };


  return (
    <div>
        <IconButton
                aria-label="more"
                aria-controls="simplel-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
            <MoreVertIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem onClick={onhandleDeleteTaskList}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Delete list" />
      </MenuItem>
      </Menu>
    </div>
  );
}
