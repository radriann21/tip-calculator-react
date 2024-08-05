import { Grid, Heading } from "@chakra-ui/react"  
import { FormContainer } from './components/FormContainer'

function App() {
  return (
    <Grid as="main" maxW="100%" minH="100dvh" placeContent="center" bgColor="neutral.lightGrayishCyan" fontFamily="global">
      <Heading as="h3" textTransform="uppercase" fontSize="20px" letterSpacing="8px" textAlign="center" color="neutral.veryDarkCyan">
        Spli <br /> tter
      </Heading>
      <FormContainer />
    </Grid>
  )
}

export default App
