import { Accordion, AccordionDetails, AccordionSummary, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Text } from '../../UI/Text/Text'
import { getArticleText } from '../../../api/axios';
import { API_LINK } from '../../../api/link';

export const ResultContentExpand = ({ title, content, isExpand = false }) => {

  const style = useStyles();
  /*  const [article, setArticle] = useState(null);
 
   const { full_text, title } = await(await getArticleText(articleLink.trim())).data.article */



  return (
    <Container>
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