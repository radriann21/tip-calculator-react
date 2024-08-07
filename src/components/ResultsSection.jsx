import { Box, Text, Button, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const ResultsSection = () => {

  const { tipAmount, total, reset } = useContext(CalculatorContext)

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
          <Text fontSize="30px" fontWeight="bold" color="primary.strongCyan">
            ${isNaN(tipAmount) ? '0.00' : tipAmount.toFixed(2)}
          </Text>
        </Flex>
        
        <Flex justify="space-between">
          <Box>
            <Text fontSize="18px" color="white">Total</Text>
            <Text fontSize="12px" color="neutral.grayishCyan">/ person</Text>
          </Box>
          <Text fontSize="30px" fontWeight="bold" color="primary.strongCyan">
            ${isNaN(total) ? '0.00' : total.toFixed(2)}
          </Text>
        </Flex>
      </Box>

      <Button 
        w="100%" 
        textTransform="uppercase" 
        color="neutral.veryDarkCyan" 
        bgColor="primary.strongCyan" 
        textAlign="center" 
        mt={{ base: '.8rem', lg: '0' }}
        _hover={{ bgColor: 'neutral.lightGrayishCyan' }}
        onClick={reset}  
      >
          Reset
      </Button>
    </Flex>
  )
}