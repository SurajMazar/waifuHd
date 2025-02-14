import Header from '@/components/header'
import React, { PropsWithChildren } from 'react'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="min-h-100vh pt-[78px]">{children}</section>
    </>
  )
}

export default AppLayout
