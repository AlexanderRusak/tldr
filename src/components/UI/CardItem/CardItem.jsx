import { Card, CardContent, Container } from '@material-ui/core'
import { Text } from '../Text/Text'

export const CardItem = ({ text, props }) => {
  return (
    <Container>
      <Card {...props} >
        <CardContent>
          <Text variant='p' title={text} />
        </CardContent>
      </Card>
    </Container>
  )
}