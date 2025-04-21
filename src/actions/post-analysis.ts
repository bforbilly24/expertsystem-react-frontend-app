import { ReactNode } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { AnalysisResponse } from '@/types/analysis'
import { ENDPOINTS } from '@/api/api-url'
import { handleServerError } from '@/utils/handle-server-error'
import { toast } from '@/hooks/use-toast'

const submitAnalysis = async (jawaban: number[]): Promise<AnalysisResponse> => {
  const response = await axios.post<AnalysisResponse>(
    ENDPOINTS.ANALYSIS.POST,
    { jawaban },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}

export const useSubmitAnalysis = () => {
  return useMutation({
    mutationFn: submitAnalysis,
    onError: (error: Error) => {
      const errorMessage = handleServerError(error)
      toast({
        title: 'Error',
        description: errorMessage as ReactNode,
        variant: 'destructive',
      })
    },
    onSuccess: (data: AnalysisResponse) => {
      toast({
        title: 'Success',
        description: `Analysis complete! Result: ${data.hasil}` as ReactNode,
        variant: 'default',
      })
    },
  })
}
