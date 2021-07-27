import { Button, Container, Input, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { THEME } from '../../theme';
import { Text } from '../UI/Text/Text';
import is from "is_js"

export const InputItem = ({ onArticleLink, isReady }) => {

  const styles = useStyles();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputFieldHandler = (event) => {
    setValue(event.target.value)
  }

  const onArticleHandler = (value) => {
    if (is.url(value)) {
      setIsLoading(true)
      onArticleLink(value.trim())
    } else {
      alert("Ivalid input");
      setValue('');
      console.log(isLoading);
      setIsLoading(false)
    }
  }

  const summarizeHandler = () => {
    onArticleHandler(value);
  }

  return (
    <Container className={styles.container}>
      <Text
        variant='h6'
        title={'Enter Article URL'}
        className={styles.text}
      />
      <Input
        className={styles.input}
        classes={{ focused: styles.focusedInput }}
        placeholder={'https:// ...'}
        fullWidth={true}
        disableUnderline={true}
        onChange={inputFieldHandler}
        value={value}
      />
      <Button disabled={!isReady && isLoading} onClick={summarizeHandler} className={styles.button} size='large' variant='contained' color='primary'>
        <Text title='Summarize this' />
      </Button>
    </Container>
  )
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '3rem',
    border: 'none'
  },
  text: {
    textTransform: 'capitalize',
    fontWeight: 500
  },
  input: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: THEME.BORDER_COLOR,
    padding: '1rem',
  },
  focusedInput: {
    borderColor: THEME.MAIN_COLOR,
    borderWidth: '2px'
  },
  button: {
    marginTop: '4rem',
    width: '100%',
    height: 50
  }
})