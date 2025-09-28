import Image from 'next/image'
import QuoteAuthor from '@/public/images/pablo.jpeg'
import Features from '@/public/images/features-03.png'

export default function Section03() {
  return (
    <section className="mt-12 md:mt-20" data-aos-id-3>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-linear-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-6 pt-12 md:pt-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="100">
                  Powerful cross-border payments built for finance teams
                </h2>
                <ul className="text-lg text-slate-400 mb-8 space-y-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Send and receive payments in 50+ fiat and digital currencies</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Real-time transparent FX conversions with no hidden fees</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Pay in stablecoins, beneficiaries receive in local currency</span>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Built-in KYC/AML compliance supporting global regulations</span>
                  </li>
                </ul>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-xs" href="/apply">
                      Join the waitlist
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]" data-aos-delay="300">
                  <Image
                    className="rounded-full self-start shrink-0 mr-3"
                    src={QuoteAuthor}
                    width={32}
                    height={32}
                    alt="Juan Pablo Andersson"
                  />
                  <div>
                    <blockquote className="text-slate-500 m-0 mb-3">
                      " Request revolutionized our financial operations by simplifying cross-currency transactions, ensuring transparent and auditable records through a paper trail creation. "
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-medium text-slate-700">Juan Pablo Andersson</div>
                      <div className="text-slate-500">Finance Operations @ The Sandbox</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0">
                <div className="relative -mx-8 md:mx-0">
                  <Image
                    src={Features}
                    className="md:max-w-none"
                    width={496}
                    height={496}
                    alt="Features 03"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}