import axios from "axios"
const _ = require("loadsh")
const qs = require("qs")

const apiUrl = process.env.REACT_APP_API || "http://localhost:8000"

export const funcName = async (query) => {
  const query = qs.stringify({})
  const queryURL = `${apiUrl}/api?${query}`
  const { data } = await axios.get(queryURL)
  return data
}
