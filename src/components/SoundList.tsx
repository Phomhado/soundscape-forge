import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getSoundById } from '../services/freesound'
import SoundCard from './SoundCard'
import type { Sound } from '../types/sound'

const SOUND_IDS = [817155, 243628, 81800]

const SOUND_TITLES: Record<number, string> = {
  817155: "Rain on Tent",
  243628: "Heavy Rain",
  81800: "Fireplace"
}

const WaveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  svg {
    width: 100%;
    height: 180px;
    display: block;
    animation: waveMove 8s ease-in-out infinite alternate;
  }

  @keyframes waveMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(16px); }
  }
`;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.large};
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.spacing.large};
  animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1);
  z-index: 1;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: none; }
  }
`

const StyledLoading = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
`

export function SoundList() {
  const [sounds, setSounds] = useState<Sound[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSounds() {
      try {
        const promises = SOUND_IDS.map(id => getSoundById(id))
        const results = await Promise.all(promises)
        setSounds(results)
      } catch (err) {
        console.error('Error fetching the sounds:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSounds()
  }, [])

  if (loading) return <StyledLoading>Loading sounds...</StyledLoading>

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <WaveBackground>
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#waveGradient)" d="M0,80 C360,180 1080,0 1440,100 L1440,180 L0,180 Z" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a3d8f4" />
              <stop offset="0.5" stopColor="#6ec6ca" />
              <stop offset="1" stopColor="#7ec850" />
            </linearGradient>
          </defs>
        </svg>
      </WaveBackground>
      <CardsContainer>
        {sounds.map((sound, index) => {
          const id = SOUND_IDS[index]
          const title = SOUND_TITLES[id] || sound.name

          return <SoundCard key={id} title={title} audioUrl={sound.preview} />
        })}
      </CardsContainer>
    </div>
  )
}
