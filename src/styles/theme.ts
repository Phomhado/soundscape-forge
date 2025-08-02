// src/styles/theme.ts

import type { DefaultTheme } from "styled-components/dist/types";

export const theme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(135deg, #e0f7fa 0%, #a7ffeb 100%)', // soft blue-green gradient
    cardBackground: 'rgba(255,255,255,0.75)', // more glassy
    cardGlass: 'rgba(255,255,255,0.35)', // for glassmorphism overlay
    textPrimary: '#234236', // deep forest green
    textSecondary: '#5e7c6a', // muted moss green
    buttonPrimary: '#7ec850', // fresh leaf green
    buttonHover: '#5ea23a', // deeper green
    highlight: '#ffd166', // warm sunlight yellow
    accent: '#6ec6ca', // accent blue
    accent2: '#ffb4d9', // flower pink
    accent3: '#a3d8f4', // sky blue
    border: '#b2b2b2', // soft border
    shadow: 'rgba(34, 66, 54, 0.12)', // subtle shadow
    glassBlur: '8px',
  },
  spacing: {
    xsmall: '4px',
    small: '12px',
    medium: '24px',
    large: '48px',
    xlarge: '96px',
  },
  fontSizes: {
    xsmall: '0.8rem',
    small: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    title: '2.5rem',
  },
  font: {
    main: '"Quicksand", "Nunito", "Segoe UI", "Roboto", "Arial", sans-serif',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
  },
}
