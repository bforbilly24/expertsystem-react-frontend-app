import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { Main } from '@/components/layout/main'
import Questions from './_components/questions'

export default function Home() {
  return (
    <AnimationContainer>
      <MaxWidthWrapper>
        <Main className='pt-32 pb-24'>
          <Questions />
        </Main>
      </MaxWidthWrapper>
    </AnimationContainer>
  )
}