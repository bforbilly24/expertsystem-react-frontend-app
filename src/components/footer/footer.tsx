import { FooterLinkBase, FooterLinkWithIcon } from '@/types/footer'
import { FOOTER_LINKS } from '@/constants/footer-link'
import { TextHoverEffect } from '@/components/ui/aceternityui/text-hover-effect'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { Link } from '@tanstack/react-router'

const Footer = () => {
  const hasIcon = (link: FooterLinkBase): link is FooterLinkWithIcon => {
    return 'icon' in link && 'alt' in link
  }

  return (
    <footer id='footer'>
      <MaxWidthWrapper>
        <div className='mx-auto max-w-container'>
          <div className='relative mx-auto flex w-full flex-col items-center justify-center border-t border-border bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.black/8%),transparent)] px-6 pb-8 pt-16 dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] md:pb-0 lg:px-8 lg:pt-32'>
            <div className='absolute left-1/2 right-1/2 top-0 h-1.5 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground'></div>

            <div className='grid w-full gap-8 xl:grid-cols-3 xl:gap-8'>
              <div className='flex flex-col items-start justify-start md:max-w-[300px]'>
                <Link to='/' className='items-center lg:items-start'>
                  <div className='aspect-[115/39] size-8 lg:aspect-[271/78] lg:size-16'>
                    <img
                      loading='lazy'
                      src='/brand/web-app-manifest-512x512.png'
                      alt='Tes Minat Bakat Logo'
                      className='h-full w-full object-contain'
                    />
                  </div>
                </Link>
                <p className='mt-4 text-start text-sm text-muted-foreground'>
                  Tes Minat Bakat by Eduskill membantu Anda menemukan karier
                  yang sesuai dengan minat dan bakat unik Anda melalui tes yang
                  dirancang secara ilmiah.
                </p>
                <p className='mt-4 text-start text-sm font-light text-foreground'>
                  Jl. Diponegoro No. 123, Surabaya, Jawa Timur, Indonesia,
                  +6289876543210
                </p>
                <p className='mt-4 text-start text-sm font-light text-foreground'>
                  Contact{' '}
                  <a
                    href='mailto:info@tesminatbakat.id'
                    className='hover:text-primary/60 text-primary underline'
                  >
                    info@tesminatbakat.id
                  </a>
                </p>
              </div>

              <div className='mt-16 grid grid-cols-2 gap-8 lg:grid-cols-3 xl:col-span-2 xl:mt-0'>
                {Object.entries(FOOTER_LINKS).map(([key, section]) => (
                  <div
                    key={key}
                    className='space-y-8 md:grid md:grid-cols-1 md:gap-8 md:space-y-0'
                  >
                    <div>
                      <h3 className='text-base font-medium text-foreground'>
                        {section.title}
                      </h3>
                      <ul className='mt-4 text-sm text-muted-foreground'>
                        {section.links.map((link, index) => (
                          <li key={index} className='mt-2'>
                            <a
                              href={link.href}
                              className={`transition-all duration-300 hover:text-foreground ${
                                hasIcon(link)
                                  ? 'flex items-center gap-x-[0.625rem]'
                                  : ''
                              }`}
                            >
                              {hasIcon(link) && (
                                <img
                                  loading='lazy'
                                  src={link.icon}
                                  alt={link.alt}
                                  width='20'
                                  height='20'
                                />
                              )}
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-8 w-full border-t border-border/40 pt-4 md:flex md:items-center md:justify-between md:pt-8'>
              <p className='mt-4 flex items-center text-sm text-muted-foreground'>
                Powered by{' '}
                <a
                  href='https://eduskill.id/'
                  className='ml-1 font-semibold text-foreground hover:text-primary'
                >
                  Eduskill.id
                </a>
              </p>
              <p className='mt-8 text-sm text-muted-foreground md:mt-0'>
                © {new Date().getFullYear()} Eduskill.id. All rights reserved.
              </p>
            </div>

            <div className='hidden h-[10rem] w-full items-center justify-center lg:flex lg:h-[10rem]'>
              <TextHoverEffect text='EDUSKILL' />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export { Footer }
