const API_KEY = import.meta.env.VITE_FREESOUND_API_KEY
const BASE_URL = 'https://freesound.org/apiv2'

export async function searchSounds(query: string) {
  const response = await fetch(`${BASE_URL}/search/text/?query=${query}&fields=name,previews,duration,tags&token=${API_KEY}`)

  if (!response.ok) {
    throw new Error('Erro ao buscar sons do Freesound')
  }

  const data = await response.json()
  return data.results.map((item: any) => ({
    name: item.name,
    tags: item.tags,
    duration: item.duration,
    preview: item.previews['preview-hq-mp3']
  }))
}

export async function getSoundById(id: number) {
  const response = await fetch(`${BASE_URL}/sounds/${id}/?token=${API_KEY}`)

  if (!response.ok) {
    throw new Error('Erro ao buscar som pelo ID')
  }

  const data = await response.json()

  return {
    name: data.name,
    tags: data.tags,
    duration: data.duration,
    preview: data.previews['preview-hq-mp3']
  }
}
