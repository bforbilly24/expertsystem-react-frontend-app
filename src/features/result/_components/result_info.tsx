import { Role } from '@/types/results'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card'

export default function ResultInfo({ role }: { role: Role }) {
  return (
    <>
      <div className='grid grid-cols-1 grid-rows-2 gap-4 items-center mt-10 md:grid-cols-3 md:grid-rows-1'>
        <div className='col-span-1 flex text-9xl justify-center select-none'>
          {role.icon}
        </div>
        <div className='col-span-1 md:col-span-2 space-y-4'>
          <h1 className='text-4xl font-semibold'>{role.title}</h1>
          <p className='text-muted-foreground text-lg'>{role.description}</p>
        </div>
      </div>

      <Card className='mt-8'>
        <CardHeader>
          <CardTitle className='text-xl'>Tentang Peran {role.title}</CardTitle>
          <CardDescription className='text-base'>{role.about}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className='text-xl font-medium mb-2'>Tanggung Jawab Utama:</p>
          <div className='text-muted-foreground space-y-2 pl-2'>
            {role.responsibilities.length > 0 ? (
              <ul className='list-none space-y-2'>
                {role.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className='flex items-start space-x-2'
                    dangerouslySetInnerHTML={{ __html: `✅ ${responsibility}` }}
                  />
                ))}
              </ul>
            ) : (
              <p>Tidak ada tanggung jawab yang tersedia.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}