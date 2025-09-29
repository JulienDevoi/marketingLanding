'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useRef } from 'react'
import Illustration from '@/public/images/hero-illustration.svg'
import LogoHT from '@/public/images/ht.svg'
import LogoDeloitte from '@/public/images/deloitte.svg'
import LogoPWC from '@/public/images/pwc.svg'
import LogoXange from '@/public/images/xange.svg'

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      linkedinProfile: formData.get('linkedin-profile'),
      companySize: formData.get('company-size'),
      comment: formData.get('comment'),
    }

    try {
      console.log('Submitting form data:', data)
      
      // Use different webhook URLs based on environment
      const isProduction = process.env.NODE_ENV === 'production' || !window.location.hostname.includes('localhost')
      const webhookUrl = isProduction 
        ? 'https://notanothermarketer.app.n8n.cloud/webhook/f98b76d1-614f-4665-b599-60b7afb339b6'
        : 'https://notanothermarketer.app.n8n.cloud/webhook-test/f98b76d1-614f-4665-b599-60b7afb339b6'
      
      console.log('Using webhook URL:', webhookUrl, '(Production:', isProduction, ')')
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      if (response.ok) {
        const responseData = await response.text()
        console.log('Success response:', responseData)
        setIsSubmitted(true)
        // Reset form
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        const errorText = await response.text()
        console.error('Failed to submit form. Status:', response.status, 'Response:', errorText)
        alert(`There was an error submitting the form. Status: ${response.status}. Please try again.`)
      }
    } catch (error) {
      console.error('Network error submitting form:', error)
      alert('There was a network error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
      <Head>
        <title>Simplifying global payments for modern businesses</title>
        <meta name="description" content="Join the waiting list for our global payment solution" />
      </Head>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="block" href="/" aria-label="Cruip">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <g fillRule="nonzero" fill="none">
                    <g className="fill-blue-500" transform="translate(3 3)">
                      <circle cx="5" cy="5" r="5" />
                      <circle cx="19" cy="5" r="5" />
                      <circle cx="5" cy="19" r="5" />
                      <circle cx="19" cy="19" r="5" />
                    </g>
                    <g className="fill-sky-300">
                      <circle cx="15" cy="5" r="5" />
                      <circle cx="25" cy="15" r="5" />
                      <circle cx="15" cy="25" r="5" />
                      <circle cx="5" cy="15" r="5" />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="grow">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-36 pb-12 md:pt-40 md:pb-20">
              <div className="lg:flex lg:space-x-12 xl:space-x-16">
                {/* Left side */}
                <div className="grow lg:mt-16 mb-16 lg:mb-0 text-center lg:text-left">
                  <h1 className="h2 mb-8">Simplifying global payments for modern businesses</h1>

                  <div className="mb-12">
                    <ul className="inline-flex flex-col text-slate-500 space-y-2.5">
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>No hidden fees, ever</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Payments without delays</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Simple to use, seamless to integrate</span>
                      </li>
                      <li className="flex items-center text-left">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-blue-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-blue-500"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Real-time FX rates & live status tracking</span>
                      </li>
                    </ul>
                  </div>

                  {/* Press logos */}
                  <div className="w-full">
                    <div className="text-xs text-slate-400 font-[350] uppercase tracking-wider text-center lg:text-left mb-5">
                      Trusted by the best
                    </div>

                    <div className="flex flex-nowrap items-center justify-center lg:justify-start -m-4 lg:-m-2 xl:-m-4">
                      {/* Facebook */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <Image className="inline-flex max-w-full" src={LogoHT} alt="Harris & Trotter" />
                      </div>

                      {/* Nike */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <Image className="inline-flex max-w-full" src={LogoDeloitte} alt="Deloitte" />
                      </div>

                      {/* Samsung */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <Image className="inline-flex max-w-full" src={LogoPWC} alt="PWC" />
                      </div>

                      {/* Disney */}
                      <div className="p-4 lg:p-2 xl:p-4">
                        <Image className="inline-flex max-w-full" src={LogoXange} alt="Xange" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="relative shrink-0 text-center lg:text-left">
                  {/* Bg */}
                  <div
                    className="absolute inset-0 mb-44 -mx-4 sm:-mx-6 lg:-mt-[9999px] lg:ml-0 lg:-mr-[9999px] rounded-bl-[100px] bg-linear-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
                    aria-hidden="true"
                  />

                  {/* Illustration */}
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-40 ml-20 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={Illustration}
                    alt="Illustration"
                    aria-hidden="true"
                  />

                  <div className="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">
                    <div className="w-full max-w-[480px] mx-auto lg:w-[480px] lg:max-w-none lg:mx-0 xl:w-[512px] bg-white p-6 shadow-2xl">
                      {/* Form */}
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-left">Join the waiting list now</h3>
                        {isSubmitted && (
                          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                            Thank you! You've been successfully added to our waiting list.
                          </div>
                        )}
                        <div className="space-y-4">
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="first-name">
                              First name
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="first-name" name="first-name" className="form-input text-sm py-2 w-full" type="text" placeholder="John" required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="last-name">
                              Last name
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="last-name" name="last-name" className="form-input text-sm py-2 w-full" type="text" placeholder="Doe" required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="email">
                              Work email
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="email" name="email" className="form-input text-sm py-2 w-full" type="email" placeholder="johndoe@company.com" required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="linkedin-profile">
                              Linkedin Profile Url
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <input id="linkedin-profile" name="linkedin-profile" className="form-input text-sm py-2 w-full" type="text" placeholder="https://www.linkedin.com/in/johndoe/" required />
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label
                              className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                              htmlFor="company-size"
                            >
                              Company size
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <select id="company-size" name="company-size" className="form-select text-sm py-2 w-full" required>
                                <option value="">Select company size</option>
                                <option value="Less than 10">Less than 10</option>
                                <option value="11-25">11-25</option>
                                <option value="26-100">26-100</option>
                                <option value="More than 100">More than 100</option>
                              </select>
                            </div>
                          </div>
                          <div className="sm:flex items-start justify-between sm:space-x-4">
                            <label className="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0" htmlFor="comment">
                              Anything else?
                            </label>
                            <div className="sm:w-72 xl:w-80 shrink-0">
                              <textarea id="comment" name="comment" className="form-textarea text-sm py-2 w-full" rows={4} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 text-right">
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xs"
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit the form'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
