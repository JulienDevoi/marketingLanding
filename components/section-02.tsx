import Image from 'next/image'
import QuoteAuthor from '@/public/images/daniel.jpeg'
import PaymentMess from '@/public/images/payment-mess.jpg'
import CardsIllustration from '@/public/images/cards-illustration.svg'
import Features from '@/public/images/features-02.png'

export default function Section02() {
  return (
    <section data-aos-id-2="">
      <div className="relative max-w-7xl mx-auto">

        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">

            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

              {/* Content */}
              <div className="md:max-w-lg">

                {/* Copy */}
                <h2 className="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">
                  International payments shouldn't be this complicated
                </h2>
                <ul className="text-lg text-slate-400 mb-8 space-y-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Cross-border payments are slow, expensive, and full of hidden fees.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Manual FX conversions lead to unexpected costs and errors.</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Compliance across jurisdictions creates risk and complexity.</span>
                  </li>
                </ul>

                {/* Button 
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-xs" href="apply.html">
                      Get your card
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>*/}

                {/* Quote */}
                <div className="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <Image
                    className="rounded-full self-start shrink-0 mr-3"
                    src={QuoteAuthor}
                    width={32}
                    height={32}
                    alt="Daniel Lustig"
                  />
                  <div>
                    <blockquote className="text-slate-400 m-0 mb-3">
                      " We love using Request because it just makes the whole payment process more efficient for all the parties involved while ensuring the accounting compliance set by our auditors. "
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-medium text-slate-300">Daniel Lustig</div>
                      <div className="text-slate-500">Founding Member @ Ocean Protocol</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:absolute md:left-[412px] md:top-0 -mb-12 mt-8 md:mt-36 md:mb-0">
                <div className="relative -mx-16 md:mx-0">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={CardsIllustration}
                    alt="Cards illustration"
                    aria-hidden="true"
                  />
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                    <Image src={Features} className="md:max-w-none md:rotate-[48deg]" width={775} alt="Features 01" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}