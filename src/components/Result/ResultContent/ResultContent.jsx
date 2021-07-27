import { useState, useEffect, memo, useCallback } from 'react';
import { Card, CardContent, CardHeader, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { getKeyTermsExtraction } from '../../../api/axios';
import { Loader } from '../../UI/Loader/Loader';
import { Text } from '../../UI/Text/Text'

export const ResultContent = memo(({ data, title }) => {

  const style = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [keyTerms, setKeyTerms] = useState([]);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getKeyTerms(data)
    return data
  }, [data]);



  const getKeyTerms = useCallback(async (data) => {
    setKeyTerms([]);
    setIsError(false)
    try {
      const { keyterms } = data && await (await getKeyTermsExtraction(data.trim())).data.article;
      keyterms && setKeyTerms(keyterms.join(', '));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setKeyTerms([])
      setIsError(true)
    }
  })


  return (
    <Container>
      {isLoading ?
        <Loader /> :
        <Card className={style.card}>
          <CardHeader className={style.header} title={title} />
          <CardContent >
            <Text title={keyTerms} className={style.text} />
          </CardContent>
        </Card >}
    </Container>
  )
})

const useStyles = makeStyles({
  card: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textTransform: 'capitalize',
    fontSize: '1rem'
  },
  text: {
    textTransform: 'capitalize',
    textAlign: 'justify',
    fontSize: '1rem'
  }
})