import { Button, Card, CardContent, CardHeader, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { getKeyTermsExtraction } from '../../../api/axios';
import { Loader } from '../../UI/Loader/Loader';
import { Text } from '../../UI/Text/Text'

export const ResultContent = ({ data, title }) => {

  const style = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [keyTerms, setKeyTerms] = useState([]);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getKeyTerms(data)
    return () => {
      getKeyTerms(data)
    };
  }, [data]);


  const getKeyTerms = async (data) => {
    setKeyTerms([]);
    setIsError(false)
    try {
      const { keyterms } = await (await getKeyTermsExtraction(data.trim())).data.article
      setKeyTerms(keyterms.join(', '));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setKeyTerms([])
      setIsError(true)
      console.error(err);
    }
  }


  return (
    <Container>
      {isLoading ?
        <Loader /> :
        <Card className={style.card}>
          <CardHeader className={style.header} title={title} />
          <CardContent >

            <Text variant='h6' title={keyTerms} className={style.text} />
          </CardContent>
        </Card >}
    </Container>
  )
}

const useStyles = makeStyles({
  card: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textTransform: 'capitalize',
  },
  text: {
    textTransform: 'capitalize',
    textAlign: 'justify'
  }
})