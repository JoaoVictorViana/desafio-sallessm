import axios from 'axios'

export const httpClient = axios.create({
  timeout: 50000,
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
})
