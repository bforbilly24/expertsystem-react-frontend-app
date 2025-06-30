import { Course } from '@/types/results'
import { ArrowUpRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/button'
import { Card, CardContent } from '@/components/ui/shadcn/card'
import { Rating, RatingButton } from '@/components/ui/shadcn/rating'

interface RecommendationCardProps {
  courses?: Course[]
}

export function RecommendationCard({ courses = [] }: RecommendationCardProps) {
  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)

    return formattedPrice.replace(/\s/g, '')
  }

  return (
    <div className='grid grid-cols-1 grid-rows-3 gap-4 mt-4 md:grid-cols-3 md:grid-rows-1'>
      {courses.length === 0 && (
        <p className='text-muted-foreground'>Tidak ada rekomendasi kursus.</p>
      )}
      {courses.map((course) => (
        <Card key={course.title}>
          <div className='relative rounded-t-xl overflow-hidden h-[24rem] md:h-[12rem]'>
            <img
              src={course.image_url}
              alt={course.title}
              className='w-full h-full object-cover object-top'
            />
          </div>
          <CardContent className='mt-2'>
            <div className='space-y-4'>
              <p className='text-orange-500 font-medium'>{course.type}</p>
              <div className='space-y-2'>
                <p className='text-lg font-semibold line-clamp-2'>
                  {course.title}
                </p>
                <p className='text-sm text-muted-foreground line-clamp-3'>
                  {course.description}
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 grid-rows-2 mt-4 lg:grid-cols-3 lg:grid-rows-1'>
              <div className='flex items-center gap-2'>
                <Rating defaultValue={course.rating} readOnly>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton
                      key={`star-${index + 1}`}
                      className='text-orange-500'
                    />
                  ))}
                </Rating>
                <p className='text-orange-500 font-medium'>{course.rating}</p>
              </div>
              <div className='col-span-2 flex justify-start items-center lg:justify-end'>
                <p className='text-muted-foreground text-xs'>
                  {`(${course.reviews} Ulasan)`}
                </p>
              </div>
            </div>
            <div className='mt-8 grid grid-cols-1 grid-rows-2 gap-2 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
              <p className='text-orange-500 font-semibold text-2xl'>
                {formatPrice(course.price)}
              </p>
              <div className='flex justify-end md:justify-start lg:justify-end'>
                <a
                  href='http://lynk.id/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='bg-orange-500 text-white' variant='outline'>
                    Lihat Detail
                    <ArrowUpRightIcon strokeWidth={3} />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}