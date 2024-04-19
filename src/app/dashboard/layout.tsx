import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import Header from '@/components/header'
import '../globals.css'

export default function DashboardLayout({
 children,
 team,
 notification,
 user,
}: {
 children: React.ReactNode
 team: React.ReactNode
 notification: React.ReactNode
 user: React.ReactNode
}) {
 return (
    <html lang='en'>
      <body>
        <main className='container'>
          <section className='py-6 gap-2'>{children}</section>

          {/* Adjusted layout for user, team, and notification */}
          <div className='content-evenly'>
          <section className='flex flex-col h-full gap-6 ms-12'>
            {/* User component occupies the full width */}
            <div className='flex gap-6'>
            <div className='w-full'>{user}</div>
            </div>

            {/* Team and Notification components are stacked below */}
            <div className='flex gap-6'>
              <div className='w-full'>{team}</div>
              <div className='w-full'>{notification}</div>
            </div>
          </section>
          </div>
        </main>
      </body>
    </html>
 )
}


