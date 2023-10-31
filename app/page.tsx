import Image from 'next/image'
import Math from '../components/Math'
import OmakaseClick from '../components/OmakaseClick'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-center">
      <h1 className="text-4xl mb-2">How Much A Year</h1>
      <Math />
      <OmakaseClick />
    </main>
  )
}
