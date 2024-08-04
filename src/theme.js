import { extendTheme } from "@chakra-ui/react";
import '@fontsource/space-mono'

export const theme = extendTheme({
  colors: {
    primary: {
      strongCyan: 'hsl(172, 67%, 45%)'
    },
    neutral: {
      veryDarkCyan: 'hsl(183, 100%, 15%)',
      darkGrayishCyan: 'hsl(186, 14%, 43%)',
      grayishCyan: 'hsl(184, 14%, 56%)',
      lightGrayishCyan: 'hsl(185, 41%, 84%)',
      veryLightGrayishCyan: 'hsl(189, 41%, 97%)'
    }
  },
  fonts: {
    global: `'Space Mono', sans-serif`
  }
})