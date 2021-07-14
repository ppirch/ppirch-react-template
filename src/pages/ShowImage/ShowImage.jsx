import React, { useEffect } from "react"
import { Container, Typography, Box } from "@material-ui/core"
import { Copyright, ProTip } from "../../components"
import { getCatAPI } from "../../api/cat-api"
import Image from "material-ui-image"
import { useQuery } from 'react-query'


const ShowImage = (props) => {
  const { history } = props

  const { isLoading, error, data } = useQuery('catData', () => getCatAPI().then())

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const { image, fact } = data
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cat Image And Random Fact
        </Typography>
        <>
          <Image src={image.file} style={{ margin: 10 }} />
          <Typography>Cat Fact : {fact.fact}</Typography>
        </>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
export default ShowImage
