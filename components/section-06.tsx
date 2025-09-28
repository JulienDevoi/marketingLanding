'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Testimonial01 from '@/public/images/testimonial-01.jpg'
import TestimonialSign01 from '@/public/images/testimonial-sign-01.svg'
import Testimonial02 from '@/public/images/testimonial-02.jpg'
import TestimonialSign02 from '@/public/images/testimonial-sign-02.svg'
import Testimonial03 from '@/public/images/rudy.png'
import Testimonial04 from '@/public/images/jaime.jpeg'

// Import Swiper
import Swiper, { Pagination, EffectFade } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
Swiper.use([Pagination, EffectFade])

export default function Section06() {

  useEffect(() => {
    const testimonial = new Swiper('.testimonial-carousel', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      effect: 'fade',
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true,
      },
    })
  }, [])

  return (
    <section className="mt-12 md:mt-20" data-aos-id-6>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-linear-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="100">
                  Why choose us for cross-border payments?
                </h2>
                <p className="text-lg text-slate-500 mb-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="200">
                  Our solution is used by 150+ leading finance teams to simplify international payments.
                </p>
                <ul
                  className="inline-flex flex-col text-slate-500 space-y-2.5"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-6]"
                  data-aos-delay="300"
                >
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Speed</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Cost</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Compliance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                      <path
                        className="fill-blue-500"
                        d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                      />
                    </svg>
                    <span>Ease of use</span>
                  </li>
                </ul>
              </div>

              {/* Carousel */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 mb-10 -mt-14 -mx-14 bg-slate-100 -z-10" aria-hidden="true" />

                  {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
                  {/* * Custom styles in src/css/additional-styles/theme.scss */}
                  <div className="testimonial-carousel swiper-container max-w-sm mx-auto sm:max-w-none">
                    <div className="swiper-wrapper">
                      {/* Card #1 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0 after:bg-linear-to-t after:from-slate-700">
                          <Image src={Testimonial03} className="md:max-w-none" width={384} height={180} alt="Testiomonial 01" />
                        </div>
                        <div className="grow flex flex-col relative bg-linear-to-t from-slate-800 to-slate-700 p-6 pt-14">
                          <Image
                            className="absolute bottom-full translate-y-1/2"
                            src={TestimonialSign01}
                            alt="Testiomonial sign 01"
                          />
                          <p className="grow font-medium text-slate-200 mb-4">
                            “ Request Finance makes it easy for our accountants to manage our crypto payments, and simplifies payroll in crypto for our global team with thoughtful features like the ability to pay multiple crypto invoices at once, or schedule invoices.                            ”
                          </p>
                          <div className="font-medium text-sm text-slate-500">
                            <span className="text-slate-200">Rudy Kadoch</span> - <span className="text-slate-400">CEO @Nested Finance</span>
                          </div>
                        </div>
                      </div>

                      {/* Card #2 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0 after:bg-linear-to-t after:from-slate-700">
                          <Image src={Testimonial04} className="md:max-w-none" width={384} height={180} alt="Testiomonial 02" />
                        </div>
                        <div className="grow flex flex-col relative bg-linear-to-t from-slate-800 to-slate-700 p-6 pt-14">
                          <Image
                            className="absolute bottom-full translate-y-1/2"
                            src={TestimonialSign02}
                            alt="Testiomonial sign 02"
                          />
                          <p className="grow font-medium text-slate-200 mb-4">
                            “ The app has essentially eradicated risks associated with human error, such as payments sent to incorrect wallet addresses. Furthermore, it has enhanced our capability to monitor our crypto payroll history, providing improved transparency and oversight.
                            “
                          </p>
                          <div className="font-medium text-sm text-slate-500">
                            <span className="text-slate-200">Jaime Barriga</span> - <span className="text-slate-400">CEO & Co-Founder @OpenZeppelin</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-4">
                    <div className="testimonial-carousel-pagination text-center" />
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