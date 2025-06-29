import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import { SlashIcon } from 'lucide-react'
import { ROLE_RESULTS } from '@/constants/role-results'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/shadcn/breadcrumb'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { Main } from '@/components/layout/main'
import { RecommendationCard } from './_components/recommendation-card'
import ResultInfo from './_components/result_info'
import { Helmet } from 'react-helmet-async'

export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const isValidRole = (key: string): key is keyof typeof ROLE_RESULTS => {
    return key in ROLE_RESULTS
  }

  const result = state?.result
  const hasValidResult = result && isValidRole(result)

  useEffect(() => {
    if (!hasValidResult) {
      navigate({ to: '/' })
      return
    }
  }, [hasValidResult, navigate])

  if (!hasValidResult || !result) {
    return null
  }

  const resultData = ROLE_RESULTS[result as keyof typeof ROLE_RESULTS]

  return (
    <>
      <Helmet>
        <title>Hasil Minat Bakat | Expertsystem</title>
        <meta
          name='description'
          content='Lihat hasil tes minat bakat online kamu dan temukan rekomendasi karier serta pelatihan terbaik sesuai potensimu di Expertsystem.'
        />
      </Helmet>
      <AnimationContainer>
        <MaxWidthWrapper>
          <Main className='pt-32 pb-24 flex flex-col gap-y-4'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link to='/'>
                    <BreadcrumbLink>Home</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>Result</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
            <ResultInfo role={resultData} />

            <div className='flex flex-col gap-y-2 mt-8 items-start justify-center'>
              <h1 className='text-2xl capitalize font-semibold text-orange-500'>
                Langkah Selanjutnya untuk Mengasah Bakatmu
              </h1>
              <h6 className='text-base text-muted-foreground'>
                Kamu selangkah lebih dekat ke karier impianmu! Berikut adalah
                pelatihan untuk membantu kamu mengasah bakat dan keterampilanmu.
              </h6>
            </div>
            <RecommendationCard courses={resultData.courses} />
          </Main>
        </MaxWidthWrapper>
      </AnimationContainer>
    </>
  )
}
