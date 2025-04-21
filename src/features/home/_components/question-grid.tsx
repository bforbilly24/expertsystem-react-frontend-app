import React from 'react'
import { Button } from '@/components/ui/shadcn/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card'
import { ScrollArea } from '@/components/ui/shadcn/scroll-area'

interface QuestionGridProps {
  totalQuestions: number
  answers: number[]
  currentPage: number
  perPage: number
  activeQuestionIndex: number // New prop
  onQuestionClick: (questionIndex: number) => void
}

const QuestionGrid = React.memo(
  ({
    totalQuestions,
    answers,
    activeQuestionIndex,
    onQuestionClick,
  }: QuestionGridProps) => {
    const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1)

    const answeredCount = answers.filter((a) => a !== -1).length

    return (
      <div className='flex flex-col gap-y-4 w-full max-w-full lg:max-w-[350px] items-center justify-start'>
        <Card className='w-full h-fit shadow-md'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base font-semibold text-foreground'>
              Nomor Pertanyaan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className='h-[300px] w-full'>
              <div className='grid grid-cols-5 gap-2'>
                {questions.map((num, index) => {
                  const isAnswered = answers[index] !== -1
                  const isCurrent = index === activeQuestionIndex // Use activeQuestionIndex
                  return (
                    <Button
                      key={num}
                      onClick={() => onQuestionClick(index)}
                      variant='outline'
                      size='sm'
                      className={`w-10 h-10 flex items-center justify-center text-sm font-medium ${
                        isAnswered
                          ? 'bg-green-500 text-white border-green-500 hover:bg-green-600 hover:text-white'
                          : 'bg-gray-500 text-white border-gray-500 hover:bg-gray-600 hover:text-white'
                      } ${isCurrent ? 'ring-2 ring-orange-500' : ''}`}
                      aria-label={`Go to question ${num}`}
                    >
                      {num}
                    </Button>
                  )
                })}
              </div>
            </ScrollArea>
            <div className='mt-4 space-y-2 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='w-4 h-4 bg-green-500 rounded-full'></span>
                <span className='text-foreground'>Sudah dijawab</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-4 h-4 bg-gray-500 rounded-full'></span>
                <span className='text-foreground'>Belum dijawab</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='flex text-sm text-muted-foreground'>
          {answeredCount} dari {totalQuestions} pertanyaan terjawab.
        </div>
      </div>
    )
  }
)

export default QuestionGrid
