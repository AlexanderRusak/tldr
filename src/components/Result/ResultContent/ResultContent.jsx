import { Card, CardContent, CardHeader, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Text } from '../../UI/Text/Text'

export const ResultContent = ({ title, content }) => {

  const style = useStyles();

  return (
    <Container>
      <Card className={style.card}>
        <CardHeader className={style.header} title={title} />
        <CardContent >
          <Text variant='h6' title={content} className={style.text} />
        </CardContent>
      </Card >
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