import { Card, CardContent } from '@material-ui/core'
import { Text } from '../Text/Text'

export const CardItem = ({ text, props }) => {
  return (
    <Card {...props} >
      <CardContent>
        <Text variant='p' title={text} />
      </CardContent>
    </Card>
  )
}