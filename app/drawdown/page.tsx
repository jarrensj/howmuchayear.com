import Image from 'next/image'
import Link from 'next/link'
// import DdCalculator from '@/components/DdCalculator'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow  items-center p-24 text-center">
        <h1 className="text-4xl mb-2">Drawdown Calculator</h1>
        {/* <DdCalculator /> */}
      </main>
      <footer className="text-center p-4">
        made by&nbsp;
        <Link href="https://jarrensj.com" className="text-blue-500 hover:underline" target="_blank">
          jarrensj
        </Link>
      </footer>
    </div>
  )
}
