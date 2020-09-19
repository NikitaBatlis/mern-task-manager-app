import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Edit list</MenuItem>
        <MenuItem onClick={handleClose}>Clear completed</MenuItem>
        <MenuItem onClick={handleClose}>Delete list</MenuItem>
      </Menu>
    </div>
  );
}
