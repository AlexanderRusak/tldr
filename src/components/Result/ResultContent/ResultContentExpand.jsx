import { Accordion, AccordionDetails, AccordionSummary, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Text } from '../../UI/Text/Text'
import { getArticleText, getKeyTermsExtraction } from '../../../api/axios';
import { useState, useEffect } from 'react';
import { Loader } from '../../UI/Loader/Loader';

export const ResultContentExpand = ({ articleUrl, data }) => {

  const style = useStyles();
  const [[content, title], setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    getResult(articleUrl)
    return () => {
      getResult()
    };
  }, [articleUrl]);

  const getResult = async (url) => {
    setData([]);
    setIsError(false)

    try {
      const { full_text: content, title } = await (await getArticleText(url.trim())).data.article;
      setData([content, title]);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setData([])
      setIsError(true)
      console.error(err);
    }
  }

  const getKeyTerms = async (data) => {
    setData([]);
    setIsError(false)

    try {
      const { keyterms } = await (await getKeyTermsExtraction(data.trim())).data.article
      setData([content, title]);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setData([])
      setIsError(true)
      console.error(err);
    }
  }
  return (
    <Container>
      {isLoading ?
        <Loader /> :
        isError ?
          <Text title='Error' /> :
          <Accordion className={style.card}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text title={title} />
            </AccordionSummary>
            <AccordionDetails>
              <Text title={content} />
            </AccordionDetails>
          </Accordion>
      }
    </Container>
  )
}

const useStyles = makeStyles({
  card: {
    marginTop: 20
  },
  header: {

    textTransform: 'capitalize',
  },
  text: {
    textTransform: 'capitalize',
  }
})