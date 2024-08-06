import { FormControl, FormLabel, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const PeopleInput = () => {

  const { setNumberPeople } = useContext(CalculatorContext)

  return (
    <FormControl as="section">
      <FormLabel fontWeight="bold" fontSize="14px" color="neutral.grayishCyan">Number of People</FormLabel>
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
          placeholder="0"
          onClick={(e) => setNumberPeople(e)}
        />
      </InputGroup>
    </FormControl>
  )
}