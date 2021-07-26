import { makeStyles } from '@material-ui/core'
import { Text } from '../UI/Text/Text'


const useStyles = makeStyles({
  title: {
    fontWeight: 600,
    marginTop: "5rem",
    color: "rgba(0,0,0,0.8)"
  }
})


export const Header = () => {

  const classes = useStyles();

  return (
    <Text variant='h4' title='Enter an Article URL or paste your Text' className={classes.title} />
  )
}