import { Flex } from "@chakra-ui/react";
import { InputSection } from "./InputSection";
import { ResultsSection } from "./ResultsSection";

export const FormContainer = () => {
  return (
    <Flex 
      mt="1rem"
      as="section" 
      w={{ base: '320px', md: '420px', lg: '840px' }} 
      h='410px' 
      bgColor='white'
      borderRadius='18px'
      padding="2rem"
      boxShadow="lg"
      align="center"
      justify="space-between"    
    >
      <InputSection />
      <ResultsSection />
    </Flex>
  )
}