import { useLocation } from '@tanstack/react-router'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { Main } from '@/components/layout/main'
import ResultInfo from './_components/result_info'

export default function Result() {
  const { state } = useLocation()
  const result = state?.result ?? 'No result available'

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
            <p className='mt-8 text-2xl'>
              <span className='text-3xl font-medium'>Selamat!</span> Kami telah
              menemukan peran yang paling cocok untukmu.
            </p>
          </div>

          <ResultInfo role={result} />
        </Main>
      </MaxWidthWrapper>
    </AnimationContainer>
  )
}
