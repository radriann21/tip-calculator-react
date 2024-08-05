import { FormControl, FormLabel, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'

export const PeopleInput = () => {
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
          type="text"
          textAlign="right"
          fontWeight="bold"
          color="neutral.veryDarkCyan"
          focusBorderColor="primary.strongCyan"
          placeholder="0"
        />
      </InputGroup>
    </FormControl>
  )
}