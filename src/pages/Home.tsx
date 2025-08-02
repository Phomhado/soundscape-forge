import styled from 'styled-components'
import { SoundList } from '../components/SoundList'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xlarge} 0;
  background: none;
  min-height: 100vh;
  gap: ${({ theme }) => theme.spacing.large};

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.medium} 0;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  text-align: center;
  user-select: none;
  margin-bottom: 8px;
  letter-spacing: 0.03em;
  text-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  text-align: center;
  user-select: none;
  margin-top: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`

export function Home() {
  return (
    <StyledHome>
      <Title>Welcome to Soundscape Forge</Title>
      <Description>Relax and create your perfect ambient setting</Description>
      <SoundList />
    </StyledHome>
  )
}
