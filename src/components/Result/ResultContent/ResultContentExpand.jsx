import { Accordion, AccordionDetails, AccordionSummary, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Text } from '../../UI/Text/Text'
import { getArticleText } from '../../../api/axios';
import { API_LINK } from '../../../api/link';
import { useState, useEffect } from 'react';
import { Loader } from '../../UI/Loader/Loader';

export const ResultContentExpand = ({ articleUrl }) => {

  const style = useStyles();
  const [[content, title], setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    getResult()
    return () => {
      getResult()
    };
  }, [isLoading, articleUrl]);

  const getResult = async () => {
    try {
      setData([])
      const { full_text: content, title } = await (await getArticleText(articleUrl.trim())).data.article;
      console.log(content, title);
      setData([content, title]);
      setIsLoading(false);

    } catch (err) {
      console.log(err, "dddd");
      setIsLoading(false);
      setData([])
      setIsError(true);
      console.error(err);
    } finally {
      ////
      setIsLoading(false)
    }

  }

  return (
    <Container>
      {isError &&
        <button onClick={getResult}>Reload</button>}
      {isLoading && !isError ?
        <Loader /> :
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
        </Accordion>}
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