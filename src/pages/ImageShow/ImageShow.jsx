import React, { useEffect } from "react"
import { Container, Typography, Box } from "@material-ui/core"
import { Copyright, ProTip, Form } from "../../components"
import { useContent } from "../../utils/machine"
import { useMachine } from "@xstate/react"
import { getCatAPI } from "../../api/cat-api"
import Image from "material-ui-image"

const Content = (props) => {
  const { sub } = props
  let stateParser
  const [current, send] = useMachine(useContent, {
    services: {
      fetchData: () =>
        getCatAPI().then((data) => {
          return {
            data,
          }
        }),
    },
  })

  useEffect(() => {
    send("RETRY")
  }, [send, sub])

  switch (current.value) {
    case "idle":
      return <h1>Blank</h1>
    case "loading":
      return <h1>Loading...</h1>
    case "success":
      stateParser = current.context.data
      const { data } = stateParser
      const { image, fact } = data
      return (
        <>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Cat Image And Random Fact
            </Typography>
            <Image src={image.file} style={{ margin: 10 }} />
            <Typography>Cat Fact : {fact.text}</Typography>
            <ProTip />
            <Copyright />
          </Box>
        </>
      )
    case "failure":
      return <h1>Reload</h1>
    default:
      return null
  }
}

const ImageShow = (props) => {
  const { history } = props

  return (
    <Container maxWidth="sm">
      <Content sub={{}} />
    </Container>
  )
}

export default ImageShow
