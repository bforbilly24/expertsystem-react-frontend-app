import React from 'react'
import { Button } from '@/components/ui/shadcn/button'

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  totalQuestions: number
  answers: number[]
  onPrevious: () => void
  onNext: () => void
  isNavigating: boolean
}

const PaginationControls = React.memo(
  ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    isNavigating,
  }: PaginationControlsProps) => {
    const canPrevious = currentPage > 1
    const canNext = currentPage < totalPages

    return (
      <div className='flex items-center lg:items-start justify-between mt-4'>
        <Button
          variant='outline'
          onClick={onPrevious}
          disabled={!canPrevious || isNavigating}
          aria-label='Go to previous page'
        >
          Sebelumya
        </Button>

        <div className='w-fit text-sm font-medium'>
          Halaman {currentPage} dari {totalPages}
        </div>

        <Button
          variant='outline'
          onClick={onNext}
          disabled={!canNext || isNavigating}
          aria-label='Go to next page'
        >
          Selanjutnya
        </Button>
      </div>
    )
  }
)

export default PaginationControls
