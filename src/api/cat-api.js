import axios from "axios"

export const getCatImage = async () => {
  const queryURL = `https://aws.random.cat/meow`
  const { data } = await axios.get(queryURL)
  return data
}

export const getCatFacts = async () => {
  const queryURL = `https://catfact.ninja/fact`
  const { data } = await axios.get(queryURL)
  return data
}

export const getCatAPI = async () => {
  const image = await getCatImage()
  const fact = await getCatFacts()
  return { image, fact }
}
