import { useState } from 'react'
import './App.css'

const PortalImage = ({ src }: { src: string }) => {
  return (
    <div className='w-full cursor-pointer overflow-hidden relative group'>
      <img className='w-full group-hover:scale-110 transition-all ease-in-out duration-500' src={src} />
    </div>
  )
}
const SportsTypeSelector = ({ type, title, active }: { type: string, title: string, active?: boolean }) => {
  return (
    <div className={`flex items-center p-2 hover:bg-[#218f47] ${active ? "bg-[#218f47]" : ""} rounded-md text-white text-[12px] font-roboto gap-1 cursor-pointer group`}>
      <svg width={24} height={24}><use href={`#svg-${type}`} /></svg>
      <span className={`${active ? "block" : "hidden"} group-hover:block`}>{title}</span>
    </div>
  )
}
const EventPaneSelect = () => {
  const [state, setState] = useState(0)
  return (
    <div className='flex w-full justify-center items-center gap-2 px-4 pb-2 text-[14px]'>
      <div onClick={() => setState(1)} className={`flex justify-between items-center w-full border border-black/30 hover:border-green-700 ${state === 1 ? "bg-green-700 text-white" : ""} cursor-pointer rounded-md px-2 py-1`}>
        <span>CA Bartolome Mitre</span>
        <span>3.05</span>
      </div>
      <div onClick={() => setState(2)} className={`shrink-[1.3] flex justify-between items-center w-full border border-black/30 hover:border-green-700 ${state === 2 ? "bg-green-700 text-white" : ""} cursor-pointer rounded-md px-2 py-1`}>
        <span>Empate</span>
        <span>3.05</span>
      </div>
      <div onClick={() => setState(3)} className={`flex justify-between items-center w-full border border-black/30 hover:border-green-700 ${state === 3 ? "bg-green-700 text-white" : ""} cursor-pointer rounded-md px-2 py-1`}>
        <span>CA Bartolome Mitre</span>
        <span>3.05</span>
      </div>
    </div>
  )
}
const EventPaneItem = () => {
  return (
    <div className='flex flex-col w-full border-b border-black/20'>
      <div className='flex justify-between items-center text-[12px] px-4 pt-2 pb-1'>
        <span>Torneo Regional</span>
        <div className='flex gap-2'>
          <div className='flex gap-1 items-center px-2 py-1 bg-black/5 rounded-md'>
            <div className='w-2 h-2 bg-red-600 rounded-full' />
            <span>1ra Mitad 29'</span>
          </div>
          <div className='flex gap-1 items-center px-2 py-1 bg-black/5 rounded-md'>0:1</div>
          <div className='flex gap-1 items-center px-2 py-1 bg-black/5 rounded-md'>+86</div>
        </div>
      </div>
      <EventPaneSelect />
    </div>
  )
}
const EventPane = () => {
  return (
    <div className='flex flex-col w-full rounded-md bg-white font-roboto mt-2'>
      <EventPaneItem />
      <EventPaneItem />
      <EventPaneItem />
      <EventPaneItem />
      <EventPaneItem />
    </div>
  )
}
const GameGalleryItem = ({ src }: { src: string }) => {
  return (
    <div className='relative w-full rounded-md overflow-hidden group'>
      <img src={src} alt="game" />
      <div className='flex flex-col justify-between items-center absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/50 text-white pt-4'>
        <svg className='-translate-y-[200px] group-hover:translate-y-0 transition-all ease-in-out duration-500 cursor-pointer' width={24} height={24}><use href="#svg-play" /></svg>
        <div className='flex flex-col w-full justify-center items-center font-roboto text-[16px] -translate-y-[200px] group-hover:translate-y-0 transition-all ease-in-out duration-500'>
          <span>Ninja Fruit Cubes</span>
          <span>POPOK GAMING</span>
        </div>
        <div className='flex justify-center items-center w-full h-8 bg-black/40 translate-y-[100px] group-hover:translate-y-0 transition-all ease-in-out duration-500'>Fun Mode</div>
      </div>
    </div>
  )
}
function App() {

  return (
    <div className='w-full min-h-screen bg-[url(https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/r279-whatsappimage2023-11-14at124303pm-transformed-16999856019619.webp?v=1699985615)] bg-contain bg-fixed'>
      <div className='flex justify-between items-center w-full h-32 bg-[#1a1a1a] border-b border-white/10 px-8 text-white font-roboto tracking-[1.7px]'>
        <div className='flex items-center'>
          <img className='w-32 h-32' src="./assets/logo.jpg" />
          <div className='flex flex-wrap justify-center items-center gap-x-8 h-full uppercase text-[20px] font-[400px] px-10 cursor-pointer'>
            <span>En vivo</span>
            <span>Deportes</span>
            <span>Esports</span>
            <span>Poker</span>
            <span>Casino</span>
            <span>Casino en Vivo</span>
            <span>Torneos</span>
            <span>Deportes Virtuales</span>
          </div>
        </div>
        <span className='text-[18px] border-b-2 border-white/30 cursor-pointer hover:bg-white hover:text-black px-1 rounded-sm transition-all ease-in-out'>Iniciar sesión</span>
        <div className='flex justify-center gap-3 items-center min-w-[73px] w-[73px] h-[36px] rounded-md border border-white/60 cursor-pointer relative group'>
          <img className='w-6 h-4 rounded-sm' src="https://static.springbuilder.site/assets/images/flags64/es.svg?v=1705570218" />
          <svg className='text-white/70' width={11} height={11}><use href="#svg-arrow-down" /></svg>
          <div className='hidden group-hover:flex justify-center gap-3 items-center w-[73px] h-[36px] rounded-md border border-white/60 cursor-pointer absolute top-[34px] left-0 hover:bg-orange-500'>
            <img className='w-6 h-4 rounded-sm' src="https://static.springbuilder.site/assets/images/flags64/en-us.svg?v=1705570218" />
            <svg className='text-white/70' width={11} height={11}><use href="#svg-arrow-down" /></svg>
          </div>
        </div>
      </div>
      <div className='bg-[url(https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/r266-back1.jpg?v=1698081665)] bg-cover'>
        <div className='max-w-[1180px] 2xl:max-w-[1560px] mx-auto w-full grid grid-cols-4 gap-4 '>
          <PortalImage src="https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/525-12-17017328621864.webp" />
          <PortalImage src="https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/526-whatsapp-image-2023-11-29-at-41143-pm-17012926025111.webp" />
          <PortalImage src="https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/527-whatsapp-image-2023-11-29-at-41143-pm-1-17012927296504.webp" />
          <PortalImage src="https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/528-whatsapp-image-2023-11-29-at-41143-pm-2-1701292743653.webp" />
        </div>
      </div>
      <div className='w-full bg-[#1c1c1c]'>
        <div className='max-w-[1180px] 2xl:max-w-[1560px] mx-auto w-full'>
          <p className='text-[60px] font-mont text-white font-bold w-full text-center'>EVENTOS EN VIVO</p>
          <div className='flex flex-col w-full rounded-md bg-white font-roboto'>
            <div className='flex justify-between items-center w-full px-4 py-2 border-b border-black/10'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-red-600 rounded-full' />
                <span className='text-[16px] font-bold'>Eventos en vivo</span>
              </div>
              <span className=' text-[#098136] text-[14px] cursor-pointer'>Ver todo</span>
            </div>
            <div className='flex items-center gap-1 w-full px-4 py-2'>
              <SportsTypeSelector type="football" title='Fútbol' active />
              <SportsTypeSelector type="basketball" title='Baloncesto' />
              <SportsTypeSelector type="tennis" title='Tenis' />
              <SportsTypeSelector type="volleyball" title='Voleibol' />
              <SportsTypeSelector type="hockey" title='Hockey sobre hielo' />
              <SportsTypeSelector type="table-tennis" title='Tenis de Mesa' />
              <SportsTypeSelector type="american-football" title='Fútbol americano' />
              <SportsTypeSelector type="baseball" title='Béisbol' />
              <SportsTypeSelector type="cricket" title='Críquet' />
              <SportsTypeSelector type="counter-strike" title='Counter-Strike 2' />
              <SportsTypeSelector type="league" title='League of Legends' />
              <SportsTypeSelector type="duty" title='Call of Duty' />
            </div>
          </div>
          <EventPane />
          <div className='w-full text-center font-mont text-[96px] font-bold text-white pt-12'>JUEGOS POPULARES</div>
          <div className='grid grid-cols-6 gap-2 w-full'>
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/a4ca51ce3b7b8972a65529329ea2a092_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/150b3a5da28233e5e38cc473baa8e325_casinoGameIcon2.webp?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/0d1206d69936869c3c4691611e89ac22_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/63b143d76a52d3a5f27b4f57271233ab_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/99963d3472b656b82461099787a6931b_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/d8b34a8c37528b37b810902c1230f979_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/66251278a66f7d546f92da12c028ce83_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/de0aa044b4360622d2ba9c019c7b59d8_casinoGameIcon2.webp?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/f5d177ff3fb0c1f0b0f754f28bf0d0e7_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/2f342bf0addc42df2d312261c6373cc1_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/177b5b8fb1241cc2bc5c74e42ba97311_casinoGameIcon2.webp?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/e9b9615a12653dfa006ffd7470fa8c43_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/be1bd57baa1581f6f9070408bcbebda5_casinoGameIcon2.webp?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/c62d8dbcefbaf39a262a4246b3888f44_casinoGameIcon2.webp?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/e00f68ce22378b665ef88ed466f87f14_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/646beff55a3f8241149aee8db714c475_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/46e06b784118a1de277d7a95a6771051_casinoGameIcon2.gif?v=1705677295" />
            <GameGalleryItem src="https://cmsbetconstruct.com/content/images/casino/icon2/eb7b45319e88b21439e8ed55e1cd4d45_casinoGameIcon2.webp?v=1705677295" />
          </div>
        </div>
      </div>
      <img className='mx-auto py-10 max-w-[900px]' src="https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/555-whatsapp-image-2023-12-19-at-72603-pm-17030321366388.webp?v=1703032226" />
      <div className='grid grid-cols-5 w-full bg-black p-4 text-white font-roboto'>
        <div className='flex flex-col gap-2 w-full'>
          <span>En Vivo</span>
          <span>Deportes</span>
          <span>Esports</span>
          <span>Deportes Virtuales</span>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <span>Casino</span>
          <span>Casino En Vivo</span>
          <span>Torneos</span>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <span>Sobre Nosotros</span>
          <span>Terminos y Condiciones</span>
          <span>Politica de Privacidad</span>
          <span>PolContacto</span>
        </div>
        <div className='col-start-5 flex flex-col gap-2 w-full text-right'>
          <strong className='text-[50px]'>18+</strong>
          <span>© 2022 Betboard</span>
          <strong className='text-[20px]'>Síguenos</strong>
          <div className='flex gap-6 items-center justify-end text-[#3b5998]'>
            <svg width={30} height={30}><use href="#svg-facebook" /></svg>
            <svg width={30} height={30} id="svg-instagram" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_933_12)"></circle>
              <path d="M16.0002 6.63404C12.1602 6.63404 8.5138 6.29272 7.121 9.86443C6.54569 11.3396 6.62923 13.2554 6.62923 15.9987C6.62923 18.4059 6.55203 20.6683 7.121 22.1319C8.51062 25.7057 12.1867 25.3633 15.9981 25.3633C19.6752 25.3633 23.4666 25.7459 24.8763 22.1319C25.4527 20.6419 25.3681 18.7546 25.3681 15.9987C25.3681 12.3403 25.5701 9.97855 23.7944 8.20538C21.9966 6.40896 19.5653 6.63404 15.996 6.63404H16.0002ZM15.1605 8.32162C23.1705 8.30894 24.1899 7.41918 23.6273 19.7796C23.4274 24.1513 20.0961 23.6715 16.0013 23.6715C8.53495 23.6715 8.32026 23.4581 8.32026 15.9945C8.32026 8.4442 8.91249 8.32584 15.1605 8.3195V8.32162ZM21.0025 9.87605C20.7043 9.87605 20.4184 9.9944 20.2076 10.2051C19.9967 10.4157 19.8783 10.7014 19.8783 10.9993C19.8783 11.2973 19.9967 11.583 20.2076 11.7936C20.4184 12.0043 20.7043 12.1226 21.0025 12.1226C21.3006 12.1226 21.5866 12.0043 21.7974 11.7936C22.0082 11.583 22.1267 11.2973 22.1267 10.9993C22.1267 10.7014 22.0082 10.4157 21.7974 10.2051C21.5866 9.9944 21.3006 9.87605 21.0025 9.87605ZM16.0002 11.1896C15.3683 11.1896 14.7425 11.3141 14.1586 11.5558C13.5748 11.7975 13.0443 12.1518 12.5975 12.5983C11.6951 13.5002 11.1882 14.7234 11.1884 15.9987C11.1885 17.274 11.6956 18.497 12.5982 19.3987C13.5009 20.3004 14.725 20.8069 16.0013 20.8068C17.2776 20.8066 18.5016 20.2999 19.404 19.398C20.3064 18.4961 20.8133 17.2729 20.8132 15.9976C20.813 14.7223 20.3059 13.4993 19.4033 12.5976C18.5007 11.6959 17.2766 11.1894 16.0002 11.1896ZM16.0002 12.8771C20.13 12.8771 20.1353 19.1202 16.0002 19.1202C11.8715 19.1202 11.8652 12.8771 16.0002 12.8771Z" fill="white"></path>
              <defs>
                <linearGradient id="paint0_linear_933_12" x1="2.14853" y1="29.9152" x2="31.7987" y2="4.24828" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFDD55"></stop>
                  <stop offset="0.5" stopColor="#FF543E"></stop>
                  <stop offset="1" stopColor="#C837AB"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg width={30} height={30} className='fill-[#b00]'><use href="#svg-youtube" /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
