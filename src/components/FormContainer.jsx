import { Flex } from "@chakra-ui/react";
import { InputSection } from "./InputSection";
import { ResultsSection } from "./ResultsSection";

export const FormContainer = () => {
  return (
    <Flex 
      mt="1rem"
      as="section" 
      w={{ base: '100%', md: '420px', lg: '840px' }} 
      h={{ base: 'fit-content', md: '410px', lg: '410px' }}
      bgColor='white'
      borderRadius='18px'
      padding={{ base: '1rem', md: '2rem', lg: '2rem' }}
      boxShadow="lg"
      align="center"
      justify="space-between"    
      direction={{ base: 'column', md: 'column', lg: 'row' }}
    >
      <InputSection />
      <ResultsSection />
    </Flex>
  )
}