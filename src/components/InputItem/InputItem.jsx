import { Button, Container, Input, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { THEME } from '../../theme';
import { Text } from '../UI/Text/Text';
import is from "is_js"
import { getArticleText, getKeyTermsExtraction, getSummarization } from '../../api/axios';



export const InputItem = ({ title, onClick, onKeyTerms, onShortSummary, onLongSummary, isLoading }) => {

  const styles = useStyles();
  const [value, setValue] = useState("");

  const inputFieldHandler = (event) => {
    setValue(event.target.value)
  }

  const resetSummarizeHandler = () => {
    onClick('', '');
    onKeyTerms([]);
    onShortSummary('');
    onLongSummary('');
  }

  const summarizeHandler = async () => {
    if (is.url(value)) {
      resetSummarizeHandler();
      /*       const { full_text, title } = await (await getArticleText(value.trim())).data.article
            onClick(full_text, title); */
      onArticleLinkHandler(value.trim())

      const { keyterms } = await (await getKeyTermsExtraction(full_text.trim())).data.article
      onKeyTerms(keyterms);

      const { short_summary } = await (await getSummarization(full_text)).data.article;
      onShortSummary(short_summary);

      const { long_summary } = await (await getSummarization(full_text, 'long')).data.article;
      onLongSummary(long_summary);


    } else {
      alert("Ivalid input");
      setValue('')
    }
  }

  return (
    <Container className={styles.container}>
      <Text
        variant='h6'
        title={title || 'Enter Article URL'}
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
      <Button disabled={isLoading} onClick={summarizeHandler} className={styles.button} size='large' variant='contained' color='primary'>
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