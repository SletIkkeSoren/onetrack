import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import MusicNote from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Kontakt info" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Presse" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Beskrivelse" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Lyt" icon={<MusicNote />} {...a11yProps(3)} />
          <Tab label="Social info" icon={<ThumbDown />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        +4523935530250 <br/>
        Rådhuspladsen 5, 2300 st th. <br/>
        email@email.com
      </TabPanel>
      <TabPanel value={value} index={1}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore <br/>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br/> dolor in reprehenderit in voluptate velit esse cillum <br/> dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br/>proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </TabPanel>
      <TabPanel value={value} index={2}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore <br/>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br/> dolor in reprehenderit in voluptate velit esse cillum <br/> dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br/>proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </TabPanel>
      <TabPanel value={value} index={3}>
        SPOTIFY <br/>
        FACEBOOK <br/>
        SOUNDCLOUD
      </TabPanel>
      <TabPanel value={value} index={4}>
        SPOTIFY <br/>
        FACEBOOK <br/>
        SOUNDCLOUD
      </TabPanel>
    </div>
  );
}