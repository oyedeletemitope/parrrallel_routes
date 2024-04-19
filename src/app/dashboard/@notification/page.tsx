import { delay } from '@/app/lib/utils'

export default async function Notication() {
  await delay(5000)

  return (
    <div className='h-96 flex-1 rounded-2xl bg-green-800 p-10 text-white'>
      <h2 className='text-xl font-semibold'>Notification</h2>
    </div>
  )
}