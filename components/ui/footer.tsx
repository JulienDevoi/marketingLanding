import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/footer-illustration.svg'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Footer illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area 
        <div className="pb-4 md:pb-8">
          <div className="text-xs text-slate-500">
            If you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in the Republic of Ireland.
            Custom Bank is licensed by the European Central Bank and regulated by the Bank of Ireland. Cusom Bank provides credit, payment, current
            account and demand deposit account services.
          </div>
        </div>*/}
      </div>
    </footer>
  )
}
