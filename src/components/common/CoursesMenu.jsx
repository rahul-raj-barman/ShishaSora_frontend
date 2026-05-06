import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

function CoursesMenu() {

    let[anchorRef, setAnchorRef] = useState(null)
    let[subMenuAnchor, setSubMenuAnchor] = useState(null)

    const setRef = (e) => {
        setAnchorRef(e.currentTarget)
    }


    const handleClose = () => {
        setAnchorRef(null)
    }

  return (
    <>

        <button className="ms-[45vw] bg-red-400 p-4 cursor-pointer"
            onClick={(e) => setRef(e)}
        >Menu</button>

      <Menu 
        anchorEl={anchorRef}
        open = {Boolean(anchorRef)}
        onClose={handleClose}

      >

        <MenuItem 
            onMouseEnter={(e) => setSubMenuAnchor(e.currentTarget)}
        
        >Hello bro</MenuItem>
        <MenuItem>Hello bro</MenuItem>
        <MenuItem>Hello bro</MenuItem>
        <MenuItem>Hello bro</MenuItem>
        <MenuItem>Hello bro</MenuItem>
      </Menu>

    </>
  );
}

export default CoursesMenu;
