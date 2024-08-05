import { Box } from "@chakra-ui/react"
import { BillInput } from "./BillInput"
import { PercentInput } from "./PercentInput"
import { PeopleInput } from "./PeopleInput"

export const InputSection = () => {
  return (
    <Box
      as="section" 
      w={{ base: '100%', md: '100%', lg: '50%' }}
      mx={{ base: '0', lg: '1rem' }}
      h="100%"
      fontFamily="global"
    >
      <BillInput />
      <PercentInput />
      <PeopleInput />
    </Box>
  )
}