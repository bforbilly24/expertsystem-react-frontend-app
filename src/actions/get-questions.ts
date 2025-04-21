import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ENDPOINTS } from '@/api/api-url';
import { QuestionsResponse } from '@/types/questions';

const fetchQuestions = async (
  page: number = 1,
  per_page: number = 10
): Promise<QuestionsResponse> => {
  const response = await axios.get<QuestionsResponse>(ENDPOINTS.QUESTIONS, {
    params: { page, per_page },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const useQuestions = (page: number, perPage: number) => {
  return useQuery<QuestionsResponse>({
    queryKey: ['questions', page, perPage],
    queryFn: () => fetchQuestions(page, perPage),
    staleTime: 10000,
  });
};