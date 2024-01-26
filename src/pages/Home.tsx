import { useState } from "react"

export const RedBadge = ({ size }: { size: number }) => <div className='bg-red-600 rounded-full' style={{ width: size, height: size }} />
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
export const EventPaneSelect = ({ className, bolt }: { className?: string, bolt?: boolean }) => {
    const [state, setState] = useState(0)
    return (
        <div className={`flex w-full justify-center items-center gap-2 pb-2 ${className}`}>
            <div onClick={() => setState(1)} className={`flex justify-between items-center w-full border border-black/30 hover:border-green-700 ${state === 1 ? "bg-green-700 text-white" : ""} cursor-pointer rounded-md px-2 py-1`}>
                <span>CA Bartolome Mitre</span>
                <div className="flex gap-1 items-center">
                    {bolt && <svg width={16} height={16}><use href="#svg-bolt" /></svg>}
                    <span>3.05</span>
                </div>
            </div>
            <div onClick={() => setState(2)} className={`shrink-[1.3] flex justify-between items-center w-full border border-black/30 hover:border-green-700 ${state === 2 ? "bg-green-700 text-white" : ""} cursor-pointer rounded-md px-2 py-1`}>
                <span>Empate</span>
                <div className="flex gap-1 items-center">
                    {bolt && <svg width={16} height={16}><use href="#svg-bolt" /></svg>}
                    <span>3.05</span>
                </div>
            </div>
            <div onClick={() => setState(3)} className={`flex justify-between items-center w-full border border-black/30 hover:border-green-700 ${state === 3 ? "bg-green-700 text-white" : ""} cursor-pointer rounded-md px-2 py-1`}>
                <span>CA Bartolome Mitre</span>
                <div className="flex gap-1 items-center">
                    {bolt && <svg width={16} height={16}><use href="#svg-bolt" /></svg>}
                    <span>3.05</span>
                </div>
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
                        <RedBadge size={8} />
                        <span>1ra Mitad 29'</span>
                    </div>
                    <div className='flex gap-1 items-center px-2 py-1 bg-black/5 rounded-md'>0:1</div>
                    <div className='flex gap-1 items-center px-2 py-1 bg-black/5 rounded-md'>+86</div>
                </div>
            </div>
            <EventPaneSelect className="px-4 text-[14px]" />
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
const Home = () => {
    return (
        <div className="bg-[url(https://static.springbuilder.site/fs/userFiles-v2/ecmoney-18757963/images/r279-whatsappimage2023-11-14at124303pm-transformed-16999856019619.webp?v=1699985615)] bg-contain bg-fixed">
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
                                <RedBadge size={8} />
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
        </div>
    )
}
export default Home