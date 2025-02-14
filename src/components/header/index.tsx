import WaifuLogo from '@/assets/images/waifu-logo.png'
import { LuGithub } from 'react-icons/lu'
import { APP_NAME, GITHUB_URL } from '@/core/config/app.config'
import './index.css'
import React from 'react'

const Header: React.FC = () => {
  return (
    <>
      <header
        className={'px-6 py-4 bg-white shadow-md flex items-center gap-4 fixed top-0 left-0 w-full'}
      >
        <div className={'logo-wrapper'}>
          <img
            src={WaifuLogo}
            alt="waifu-hd-logo"
            className={'logo'}
            width={80}
            height={45}
          />
          <p className="text-primary font-bold tracking-widest">{APP_NAME}</p>
        </div>
        <div className={'ml-auto'}>
          <a
            href={GITHUB_URL}
            target={'_blank'}
            className={'flex items-center gap-2 cursor-pointer outline-none border-0'}
          >
            <LuGithub />
            <span>Github</span>
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
