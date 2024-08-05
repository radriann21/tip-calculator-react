import { Box, Text, Button, Flex } from '@chakra-ui/react'

export const ResultsSection = () => {
  return (
    <Flex
      as="section"
      w={{ base: '100%', md: '100%', lg: '50%' }}
      p={{ base: '1.5rem', md: '2rem', lg: '2rem' }}
      mt={{ base: '.8rem', lg: '0' }}
      h="100%"
      borderRadius="18px"
      bgColor="neutral.veryDarkCyan"
      color="white"
      justifyContent="space-between"
      direction="column"
    >

      <Box>
        <Flex justify="space-between" mb="2rem">
          <Box>
            <Text fontSize="18px" color="white">Tip Amount</Text>
            <Text fontSize="12px" color="neutral.grayishCyan">/ person</Text>
          </Box>
          <Text fontSize="30px" fontWeight="bold" color="primary.strongCyan">$0.00</Text>
        </Flex>
        
        <Flex justify="space-between">
          <Box>
            <Text fontSize="18px" color="white">Tip Amount</Text>
            <Text fontSize="12px" color="neutral.grayishCyan">/ person</Text>
          </Box>
          <Text fontSize="30px" fontWeight="bold" color="primary.strongCyan">$0.00</Text>
        </Flex>
      </Box>

      <Button 
        w="100%" 
        textTransform="uppercase" 
        color="neutral.veryDarkCyan" 
        bgColor="primary.strongCyan" 
        textAlign="center" 
        mt={{ base: '.8rem', lg: '0' }}
        _hover={{ bgColor: 'neutral.lightGrayishCyan' }}>
          Reset
      </Button>
    </Flex>
  )
}