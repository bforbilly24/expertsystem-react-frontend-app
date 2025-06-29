import { Helmet } from 'react-helmet-async'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { Main } from '@/components/layout/main'
import Questions from './_components/questions'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Test Minat Bakat | Test</title>
        <meta name="description" content="Tes minat bakat online gratis dan akurat. Temukan potensi dan karier impianmu di Expertsystem." />
      </Helmet>
      <AnimationContainer>
        <MaxWidthWrapper>
          <Main className='pt-32 pb-24'>
            <Questions />
          </Main>
        </MaxWidthWrapper>
      </AnimationContainer>
    </>
  )
}