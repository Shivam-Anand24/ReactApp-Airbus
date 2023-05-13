import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
//import ConstructionIcon from '@material-ui/icons/Construction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BuildIcon from '@material-ui/icons/Build';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Monitor Board" />
    </ListItemButton>


    <ListItemButton>
  <ListItemIcon>
    <FontAwesomeIcon icon={faTools} />
  </ListItemIcon>
  <ListItemText primary="Fabrication" />
</ListItemButton>


<ListItemButton>
  <ListItemIcon>
    <PeopleAltIcon />
  </ListItemIcon>
  <ListItemText primary="Sub Assembly" />
</ListItemButton>


<ListItemButton>
  <ListItemIcon>
    <BuildIcon />
  </ListItemIcon>
  <ListItemText primary="Assembly" />
</ListItemButton>
  </React.Fragment>
);
