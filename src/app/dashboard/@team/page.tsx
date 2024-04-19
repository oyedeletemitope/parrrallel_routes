import { delay } from '@/app/lib/utils'

export default async function Team() {
  await delay(4000)

  return (
    <div className='h-96 flex-1 rounded-2xl bg-purple-800 p-10 text-white'>
      <h2 className='text-xl font-semibold'>Team</h2>
    </div>
  )
}