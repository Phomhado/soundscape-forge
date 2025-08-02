// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      cardBackground: string
      cardGlass: string
      textPrimary: string
      textSecondary: string
      buttonPrimary: string
      buttonHover: string
      highlight: string
      accent: string
      accent2: string
      accent3: string
      border: string
      shadow: string
      glassBlur: string
    }
    spacing: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
    fontSizes: {
      xsmall: string
      small: string
      medium: string
      large: string
      title: string
    }
    font: {
      main: string
    }
    breakpoints: {
      mobile: string
      tablet: string
    }
  }
}
