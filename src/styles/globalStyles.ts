// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.main};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.font.main};
    transition: background 0.5s cubic-bezier(0.4,0,0.2,1), color 0.3s;
    line-height: 1.6;
    letter-spacing: 0.01em;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    z-index: 0;
    top: -120px;
    left: -120px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle at 60% 40%, ${({ theme }) => theme.colors.accent2} 0%, transparent 70%),
                radial-gradient(circle at 80% 80%, ${({ theme }) => theme.colors.accent3} 0%, transparent 70%),
                radial-gradient(circle at 20% 80%, ${({ theme }) => theme.colors.buttonPrimary} 0%, transparent 70%);
    opacity: 0.25;
    filter: blur(40px);
    pointer-events: none;
    animation: floatBlobs 12s ease-in-out infinite alternate;
  }

  @keyframes floatBlobs {
    0% { transform: scale(1) translateY(0); }
    100% { transform: scale(1.1) translateY(40px); }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.buttonPrimary};
  }
`;
