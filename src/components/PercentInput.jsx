import { FormControl, FormLabel, Grid, GridItem, Button, Input } from '@chakra-ui/react'

export const PercentInput = () => {

  const buttons = [
    {
      id: crypto.randomUUID(),
      value: 5,
      text: '5%'
    },
    {
      id: crypto.randomUUID(),
      value: 10,
      text: '10%'
    },
    {
      id: crypto.randomUUID(),
      value: 15,
      text: '15%'
    },
    {
      id: crypto.randomUUID(),
      value: 25,
      text: '25%'
    },
    {
      id: crypto.randomUUID(),
      value: 50,
      text: '50%'
    },
  ]

  return (
    <FormControl as="section" mb="1rem">
      <FormLabel fontSize="14px" color="neutral.grayishCyan" fontWeight="bold">Select Tip %</FormLabel>
      <Grid w="100%" as="section" mt="1rem" gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="repeat(2, 1fr)" gap="15px">
        {
          buttons.map((button) => (
            <GridItem key={button.id} w="full">
              <Button
                color="white"
                bgColor="neutral.veryDarkCyan" 
                textAlign="center"
                data-value={button.value}
                w={{ base: '70px', lg: '100px' }}
                _hover={{ bgColor: 'neutral.lightGrayishCyan', color: 'neutral.veryDarkCyan' }}
              >
                {button.text}
              </Button>
            </GridItem>
          ))
        }
        <GridItem w="full">
          <Input variant="filled" textAlign="right" fontWeight="bold" w={{ base: '70px', lg: '100px' }} placeholder="Custom" focusBorderColor="primary.strongCyan" _focus={{ bgColor: 'neutral.veryLightGrayishCyan' }} />
        </GridItem>
      </Grid>
    </FormControl>
  )
}
