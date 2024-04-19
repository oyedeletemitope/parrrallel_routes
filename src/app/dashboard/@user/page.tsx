import { delay } from '@/app/lib/utils'

export default async function Home() {
  await delay(3000)

  return (
    
    <div className='h-30 rounded-xl bg-yellow-800 p-10 text-white flex flex-col '>
      <h1 className='text-3xl font-bold'>Users</h1>
   
    </div>
  )
}
