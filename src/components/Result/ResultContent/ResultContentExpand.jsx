import { useState, useEffect, memo } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Text } from '../../UI/Text/Text'
import { getArticleText } from '../../../api/axios';
import { Loader } from '../../UI/Loader/Loader';

export const ResultContentExpand = memo(({ articleUrl, onText, title, onError }) => {

  const style = useStyles();
  const [content, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getResult(articleUrl)
    return articleUrl
  }, [articleUrl]);

  const getResult = async (url) => {
    setData([]);
    onError(false)

    try {
      const { full_text: content } = await (await getArticleText(url.trim())).data.article;
      setData(content);
      onText(content)
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setData([])
      onError(true)
      console.error(err);
    }
  }


  return (
    <Container>
      {isLoading ?
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
        </Accordion>
      }
    </Container>
  )
})

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