import { FormControl, FormLabel, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { FaDollarSign } from "react-icons/fa"
import { useContext } from "react"
import { CalculatorContext } from "../context/CalculatorContext"

export const BillInput = () => {

  const { setBill } = useContext(CalculatorContext  )

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
          type="number"
          textAlign="right"
          fontWeight="bold"
          color="neutral.veryDarkCyan"
          focusBorderColor="primary.strongCyan"
          placeholder="0"
          onChange={(e) => setBill(e)}
        />
      </InputGroup>
    </FormControl>
  )
}