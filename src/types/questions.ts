interface QuestionsResponse {
  soal: string[]
  page: number
  per_page: number
  total_questions: number
  total_pages: number
}

export type { QuestionsResponse }
