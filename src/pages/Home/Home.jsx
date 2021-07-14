import React, { useEffect } from "react"
import { Link as LinkDOM } from "react-router-dom"
import { Container, Typography, Box, Button } from "@material-ui/core"
import { Copyright, ProTip, MenuPopup } from "../../components"
import ReactJson from "react-json-view"
import { useQuery } from 'react-query'

const setPub = async (sub) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return { hello: "world" }
}

export default function Home(props) {
  const { history } = props
  const redirect = () => {
    history.push('/album')
  }
  const { isLoading, error, data } = useQuery('Data', () => setPub())
 
  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message

  return (
    <Container maxWidth="sm">
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
    </Container>
  )
}
