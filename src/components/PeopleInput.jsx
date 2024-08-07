import { Flex, FormControl, FormLabel, InputGroup, InputLeftElement, Input, FormErrorMessage } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const PeopleInput = () => {

  const { setNumberPeople, numberPeople } = useContext(CalculatorContext)
  const isError = numberPeople === 0 || numberPeople === ""

  return (
    <FormControl isInvalid={isError} as="section">
      <Flex w="100%" justify="space-between" align="center">
        <FormLabel fontWeight="bold" fontSize={{ sm:'12px', base: '12px', md: '14px', lg: '14px' }} color="neutral.grayishCyan">Number of People</FormLabel>
        {!isError ? null : <FormErrorMessage fontWeight="bold" fontSize={{ sm:'10px', base: '10px', md: '14px', lg: '14px' }}>Can&apos;t be Zero!</FormErrorMessage>}
      </Flex>
      <InputGroup>
        <InputLeftElement>
          <FaUserAlt />
        </InputLeftElement>
        <Input
          variant="filled"
          bgColor="neutral.veryLightGrayishCyan"
          type="number"
          textAlign="right"
          fontWeight="bold"
          color="neutral.veryDarkCyan"
          focusBorderColor="primary.strongCyan"
          placeholder="1"
          onChange={(e) => setNumberPeople(e)}
          value={numberPeople}
        />
      </InputGroup>
    </FormControl>
  )
}