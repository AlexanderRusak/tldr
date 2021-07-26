import { Typography } from '@material-ui/core'


export const Text = ({ title, variant, ...restProps }) => {
  return (
    <Typography variant={variant} {...restProps} >
      {title}
    </Typography>
  )
}