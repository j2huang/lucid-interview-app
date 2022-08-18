import logo from './lucidlogo.png';
import './App.css';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material";

import { createTheme } from '@mui/material/styles';

// Define our own theme
// TODO move this to template theme definition folder
const theme = createTheme({
  palette: {
    primary: {
      main: '#C8F1F6',
      contrastText: '#0A203A',
    }
  },
});

function App() {

  // TODO manage these states better maybe using redux
  const [expanded1, setExpanded1] = React.useState('sec1');
  const handleChange1 = (panel) => (event, newExpanded) => {
    setExpanded1(newExpanded ? panel : false);
  };

  const [expanded2, setExpanded2] = React.useState('sec2');
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };

  return (
    <div id="TestContainer" className="App">
      <ThemeProvider theme={theme}>
        <img className="Logo" src={logo} alt="logo" />

        <div id="LeftSideNav">
          <Button className="ActionButton" variant="contained" color="primary">Deploy</Button>

          <Accordion expanded={expanded1 === "sec1"} onChange={handleChange1('sec1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="sec1-content"
              id="sec1-header"
            >
              <h2 className="NavSectionHeader">Deployment</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Link href="#" className="NavLink">Deployment</Link>
                <Link href="#" className="NavLink">Current Builds</Link>
                <Link href="#" className="NavLink">Scheduled Builds</Link>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded2 === "sec2"} onChange={handleChange2('sec2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="sec2-content"
              id="sec2-header"
            >
              <h2 className="NavSectionHeader">Pipeline Management</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Link href="#" className="NavLink">Configure Pipeline</Link>
                <Link href="#" className="NavLink">Delete Pipeline</Link>
                <Link href="#" className="NavLink">Full Stage View</Link>
              </div>
            </AccordionDetails>
          </Accordion>

          <div className="TopLevelLinkContiner">
            <Link href="#" className="NavLink">Open Blue Ocean</Link>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
