import React from 'react';
import { Button, Menu } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { MenuItem } from '@material-ui/core';

const AppBarMenu = ({ title, items }) => {
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getMenuItems = () => {
        return items.map((label) =>
            <MenuItem key={label} style={{fontFamily: 'inherit'}} onClick={handleClose}>{label}</MenuItem>
        )
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (
        <div>
            <Button
                style={{
                    fontFamily: 'inherit',
                    backgroundColor: 'black',
                    border: 'none'
                }}
                aria-controls='simple-menu'
                aria-haspopup='true'
                color='inherit'
                onClick={handleClick}
                endIcon={
                    <ArrowDropDownIcon style={{ marginLeft: '-0.5rem' }} />
                }
            >
                {title}
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {getMenuItems()}
            </Menu>
        </div>
    );
};

export default AppBarMenu;
