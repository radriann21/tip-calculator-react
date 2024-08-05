import { Box } from "@chakra-ui/react"
import { BillInput } from "./BillInput"
import { PercentInput } from "./PercentInput"
import { PeopleInput } from "./PeopleInput"

export const InputSection = () => {
  return (
    <Box
      as="section" 
      w="50%"
      h="100%"
      fontFamily="global"
      mx="1rem"
    >
      <BillInput />
      <PercentInput />
      <PeopleInput />
    </Box>
  )
}