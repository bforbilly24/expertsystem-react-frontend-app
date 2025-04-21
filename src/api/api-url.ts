import { apiUrl } from './environment'

export const ENDPOINTS = {
  STATUS: `${apiUrl}/status`,
  QUESTIONS: `${apiUrl}/questions`,
  ANALYSIS: {
    POST: `${apiUrl}/analysis`,
  },
} as const
