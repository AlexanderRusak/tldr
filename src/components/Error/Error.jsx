import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { THEME } from '../../theme'
import { Text } from '../UI/Text/Text'

export const Error = ({ message }) => {

  const style = useStyles()

  return <Container className={style.container}>
    <Text className={style.text} title={message} variant={"p"} />
  </Container>
}


const useStyles = makeStyles({
  container: {
    marginTop: '4rem'
  },
  text: {
    color: THEME.DANGER
  }
})
