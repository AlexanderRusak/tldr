import { AppBar, Container, makeStyles, Tab, Tabs } from '@material-ui/core'
import { useState } from 'react';
import { ResultContent } from '../Result/ResultContent/ResultContent';
import { Loader } from '../UI/Loader/Loader';
import { TabPanel } from '../UI/TabPanel/TabPanel'

export const TabComponent = ({ short, long }) => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.appBar}>
      <AppBar variant='elevation' position='static'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Short" />
          <Tab label="Long" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {!short ? <Loader /> :
          <ResultContent title='Short result' title={short} />
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {!long ? <Loader /> :
          <ResultContent title='Long result' title={long} />
        }
      </TabPanel>
    </Container>
  )
}

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '5rem'
  }
})