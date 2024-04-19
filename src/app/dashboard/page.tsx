import { delay } from '@/app/lib/utils'

export default async function Home() {
  await delay(1000)

  return (
    <div className="grid grid-cols-2 gap-4">
      <h1 className='text-3xl font-bold'>Dashboard</h1>
    </div>
  )
}
