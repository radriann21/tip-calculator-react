import { FormControl, FormLabel, Grid, GridItem, Button, Input } from '@chakra-ui/react'

export const PercentInput = () => {
  return (
    <FormControl as="section" mb="1rem">
      <FormLabel fontSize="14px" color="neutral.grayishCyan" fontWeight="bold">Select Tip %</FormLabel>
      <Grid w="100%" as="section" mt="1rem" gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap="15px">
        <GridItem w="full">
          <Button color="white" bgColor="neutral.veryDarkCyan" w="100px" textAlign="center" _hover={{ bgColor: 'neutral.lightGrayishCyan', color: 'neutral.veryDarkCyan' }} value="5">5%</Button>
        </GridItem>
        <GridItem w="full">
          <Button color="white" bgColor="neutral.veryDarkCyan" w="100px" textAlign="center" _hover={{ bgColor: 'neutral.lightGrayishCyan', color: 'neutral.veryDarkCyan' }} value="10">10%</Button>
        </GridItem>
        <GridItem w="full">
          <Button color="white" bgColor="neutral.veryDarkCyan" w="100px" textAlign="center" _hover={{ bgColor: 'neutral.lightGrayishCyan', color: 'neutral.veryDarkCyan' }} value="15%">15%</Button>
        </GridItem>
        <GridItem w="full">
          <Button color="white" bgColor="neutral.veryDarkCyan" w="100px" textAlign="center" _hover={{ bgColor: 'neutral.lightGrayishCyan', color: 'neutral.veryDarkCyan' }} value="25">25%</Button>
        </GridItem>
        <GridItem w="full">
          <Button color="white" bgColor="neutral.veryDarkCyan" w="100px" textAlign="center" _hover={{ bgColor: 'neutral.lightGrayishCyan', color: 'neutral.veryDarkCyan' }} value="50%">50%</Button>
        </GridItem>
        <GridItem w="full">
          <Input variant="filled" textAlign="right" fontWeight="bold" w="100px" placeholder="Custom" focusBorderColor="primary.strongCyan" _focus={{ bgColor: 'neutral.veryLightGrayishCyan' }}></Input>
        </GridItem>
      </Grid>
    </FormControl>
  )
}