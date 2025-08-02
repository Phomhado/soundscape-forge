import { useRef, useState } from "react"
import styled from "styled-components"
import type { SoundCardProps } from "../types/soundCard"
import { MdEco } from 'react-icons/md';
import { useTheme } from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardGlass};
  border-radius: 22px;
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 280px;
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, border 0.3s, background 0.4s;
  backdrop-filter: blur(${({ theme }) => theme.colors.glassBlur});
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 16px 48px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.buttonPrimary};
    background: ${({ theme }) => theme.colors.cardBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const FloatingIcon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  opacity: 0.7;
  z-index: 2;
  animation: iconFloat 3.5s ease-in-out infinite alternate;

  @keyframes iconFloat {
    0% { transform: translateY(0) rotate(-10deg); }
    100% { transform: translateY(-12px) rotate(10deg); }
  }
`;

const Title = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.font.main};
  text-align: center;
`

const PlayButton = styled.button<{ isPlaying: boolean }>`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.buttonPrimary} 60%, ${({ theme }) => theme.colors.accent2} 100%);
  border: none;
  border-radius: 16px;
  color: white;
  padding: 14px 24px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.font.main};
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.shadow};
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.buttonHover} 60%, ${({ theme }) => theme.colors.accent3} 100%);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadow};
  }

  &:active::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120%;
    height: 120%;
    background: ${({ theme }) => theme.colors.accent2};
    opacity: 0.18;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1.2);
    pointer-events: none;
    animation: ripple 0.5s linear;
  }

  @keyframes ripple {
    0% { opacity: 0.18; transform: translate(-50%, -50%) scale(0.8); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
  }
`

export default function SoundCard({ title, audioUrl }: SoundCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const theme = useTheme();

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    isPlaying ? audio.pause() : audio.play()
    setIsPlaying(!isPlaying)
  }

  return (
    <Card>
      <FloatingIcon>
        <MdEco size={36} color={theme.colors.buttonPrimary} />
      </FloatingIcon>
      <Title>{title}</Title>
      <PlayButton isPlaying={isPlaying} onClick={toggleAudio}>
        {isPlaying ? 'Pause' : 'Play'}
      </PlayButton>
      <audio ref={audioRef} src={audioUrl} loop />
    </Card>
  )
}
