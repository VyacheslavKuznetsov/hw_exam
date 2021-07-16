import {
  AppBar,
  Box,
  CssBaseline,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import React, { useState } from "react";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { Keys } from "./components/keys";
import { ClassLifecycle, FuncLifecycle } from "./components/lifecycle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Жизненный цикл" {...a11yProps(0)} />
          <Tab label="Условный рендеринг" {...a11yProps(1)} />
          <Tab label="Списки и ключи" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Paper elevation={5}>
          <ClassLifecycle arg={77} />
        </Paper>
        <Paper elevation={5}>
          <FuncLifecycle arg={77} />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ConditionalRendering />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Keys />
      </TabPanel>
    </div>
  );
}

export default App;
