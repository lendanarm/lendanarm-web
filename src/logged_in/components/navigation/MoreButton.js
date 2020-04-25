import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SimpleMenu({ classes, selectedTab, links }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const moreItems = [
    {
      link: "/c/account_settings",
      name: "Settings",
      icon: {
        desktop: (
          <SettingsIcon
            className={
              selectedTab === "Settings"
                ? classes.textPrimary
                : classes.moreIcons
            }
            fontSize="small"
          />
        ),
        mobile: <SettingsIcon className="text-white" />,
      },
    },
    {
      link: "/c/beta",
      name: "Beta",
      icon: {
        desktop: (
          <AllInclusiveIcon
            className={
              selectedTab === "Beta" ? classes.textPrimary : classes.moreIcons
            }
            fontSize="small"
          />
        ),
        mobile: <AllInclusiveIcon className="text-white" />,
      },
    },

    {
      link: "/",
      name: "Logout",
      icon: {
        desktop: (
          <PowerSettingsNewIcon
            className={classes.moreIcons}
            fontSize="small"
          />
        ),
        mobile: <PowerSettingsNewIcon className="text-white" />,
      },
    },
  ];

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<MoreHorizIcon />}
        className={classes.menuLink + " " + classes.moreStyle}
      >
        More
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {moreItems.map((element, index) => (
          <Link
            to={element.link}
            className={classes.moreLink}
            key={index}
            ref={(node) => {
              links[index] = node;
            }}
          >
            <MenuItem onClick={handleClose} className={classes.moreSpacing}>
              <ListItemIcon>{element.icon.desktop}</ListItemIcon>
              {element.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

// {
//         link: false,
//         name: "More",
//         onClick: () => {
//           handleClickMore();
//         },
//         icon: {
//           desktop: (
//             <MoreHorizIcon
//               className={
//                 selectedTab === "More"
//                   ? classes.textPrimary + " " + classes.iconMargin
//                   : "text-white" + " " + classes.iconMargin
//               }
//               fontSize="small"
//             />
//           ),
//           mobile: <MoreHorizIcon className="text-white" />,
//         },
// },
