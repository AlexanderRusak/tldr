import { AppBar, Container, makeStyles, Tab, Tabs } from '@material-ui/core'
import { useState } from 'react';
import { ResultContent } from '../Result/ResultContent/ResultContent';
import { CardItem } from '../UI/CardItem/CardItem';
import { Loader } from '../UI/Loader/Loader';
import { TabPanel } from '../UI/TabPanel/TabPanel'
import { Text } from '../UI/Text/Text';

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
      <TabPanel className={classes.panel} value={value} index={0}>
        {!short ? <Loader /> :
          <CardItem text={short} />
        }
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={1}>
        {!long ? <Loader /> :
          <CardItem text={long} />
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
  },
  panel: {
    '& .MuiBox-root': {
      marginTop: 20,
      padding: 0,
      width: '100vw'
    }
  }
})