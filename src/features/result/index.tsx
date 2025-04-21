import { useLocation } from '@tanstack/react-router'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { Main } from '@/components/layout/main'

export default function Result() {
  const { state } = useLocation()
  const result = state?.result || 'No result available'

  return (
    <AnimationContainer>
      <MaxWidthWrapper>
        <Main className='pt-32 pb-24 flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-2 items-start justify-center'>
            <h1 className='text-3xl capitalize font-semibold text-orange-500'>
              Hasil Minat Bakat
            </h1>
            <h6 className='text-base text-muted-foreground'>
              Partisipasi dalam ujian minat dan bakat yang telah anda
              selesaikan!
            </h6>
          </div>

          <div className='flex flex-col items-center justify-center w-full mt-20'>
            <h1 className='text-4xl font-semibold'>{result}</h1>
          </div>
        </Main>
      </MaxWidthWrapper>
    </AnimationContainer>
  )
}
