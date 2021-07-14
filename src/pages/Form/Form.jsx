import React, { useEffect } from "react"
import { Link as LinkDOM } from "react-router-dom"
import { Container, Typography, Box, Button } from "@material-ui/core"
import { Copyright, ProTip, Form } from "../../components"


const FormContainer = (props) => {
  return (
    <Container maxWidth="sm">
        <>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example
            </Typography>
            <Form />
            <ProTip />
            <Copyright />
          </Box>
        </>
    </Container>
  )
}

export default FormContainer
