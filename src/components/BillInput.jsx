import { FormControl, FormLabel, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { FaDollarSign } from "react-icons/fa"

export const BillInput = () => {
  return (
    <FormControl as="section" mb="1rem">
      <FormLabel fontSize="14px" color="neutral.grayishCyan" fontWeight="bold">Bill</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <FaDollarSign />
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