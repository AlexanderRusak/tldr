import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { THEME } from '../../theme';
import { Text } from '../UI/Text/Text'


export const SummarizationComponent = () => {

  const styles = useStyles();
  const [value, setValue] = useState('Short');

  const changeHandler = () => {
    setValue(value === 'Short' ? 'Long' : 'Short')
  }

  return (
    <FormControl className={styles.container} >
      <FormLabel>
        <Text variant='h6' title='Summarization' className={styles.text} />
      </FormLabel>
      <RadioGroup className={styles.radioGroup} value={value} onChange={changeHandler}>
        <FormControlLabel className={styles.text} value='Short' control={<Radio />} label='Short' />
        <FormControlLabel className={styles.text} value='Long' control={<Radio />} label='Long' />
      </RadioGroup>
    </FormControl>
  )
}


const useStyles = makeStyles({
  text: {
    float: 'left',
    color: THEME.TEXT_COLOR
  },
  radioGroup: {
    border: '2px solid #eee',
    paddingLeft: '1rem',
    paddingRight: '2rem',
  }
})