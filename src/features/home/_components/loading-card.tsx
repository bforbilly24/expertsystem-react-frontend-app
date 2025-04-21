import { Card, CardContent } from '@/components/ui/shadcn/card'
import { Skeleton } from '@/components/ui/shadcn/skeleton'
import { Main } from '@/components/layout/main'

function LoadingCard() {
  return (
    <Main className='pt-20 flex flex-col gap-y-4'>
      {/* Header skeleton */}
      <div className='flex flex-col gap-y-2 items-start justify-center'>
        <Skeleton className='h-9 w-64' />
        <Skeleton className='h-5 w-96' />
      </div>

      {/* Progress bar skeleton */}
      <div className='mt-4'>
        <Skeleton className='h-5 w-48 mb-2' />
        <Skeleton className='h-2 w-full' />
      </div>

      {/* Card with question table skeleton */}
      <Card>
        <CardContent className='pt-6'>
          {/* Simulate 5 question rows (half a page) */}
          <div className='space-y-4'>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className='flex flex-col gap-y-2'>
                <Skeleton className='h-6 w-3/4' />
                <div className='flex space-x-4'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className='h-5 w-12' />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Pagination and submit button skeleton */}
          <div className='flex items-center w-full justify-center mt-6'>
            <div className='flex space-x-2 items-center w-full justify-center'>
              <Skeleton className='h-10 w-10' />
              <Skeleton className='h-10 w-10' />
              <Skeleton className='h-10 w-24' />
              <Skeleton className='h-10 w-10' />
              <Skeleton className='h-10 w-10' />
            </div>
            <Skeleton className='h-10 w-40' />
          </div>
        </CardContent>
      </Card>
    </Main>
  )
}

export default LoadingCard
