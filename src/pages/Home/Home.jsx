import React, { useEffect } from "react"
import { Link as LinkDOM } from "react-router-dom"
import { Container, Typography, Box, Button } from "@material-ui/core"
import { Copyright, ProTip, MenuPopup } from "../../components"
import { useContent } from "../../utils/machine"
import { useMachine } from "@xstate/react"
import ReactJson from "react-json-view"

const setPub = async (sub) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return { hello: "world" }
}

const Content = (props) => {
  const { sub, redirect } = props
  let stateParser
  const [current, send] = useMachine(useContent, {
    services: {
      fetchData: () =>
        setPub(sub).then((data) => {
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
      return (
        <>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example
            </Typography>
            <Box style={{ margin: 10, padding: 10 }}>
              Click to go <LinkDOM to="/album">Album</LinkDOM>
              <Button onClick={redirect}>Redirect</Button>
            </Box>
            <Box style={{ margin: 10, padding: 10 }}>
              <MenuPopup />
            </Box>
            <ReactJson src={data} />
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

export default function App(props) {
  const { history } = props
  const redirect = () => {
    history.push("/album")
  }

  return (
    <Container maxWidth="sm">
      <Content sub={{}} redirect={redirect} />
    </Container>
  )
}
