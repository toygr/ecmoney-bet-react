const HeaderButton = ({ title, href, active }: { title: string, href: string, active?: boolean }) => {
    return (
        <a href={href} className={`${active ? "text-[#098139]" : "hover:text-[#959595]"} transition-all ease-in-out`}>{title}</a>
    )
}
const Header = () => {
    return (
        <div className='flex justify-between items-center w-full h-32 bg-[#1a1a1a] border-b border-white/10 px-8 text-white font-roboto tracking-[1.7px]'>
            <div className='flex items-center'>
                <a href="/" className="shrink-0"><img className='w-32 h-32' src="/assets/logo.jpg" /></a>
                <div className='flex flex-wrap justify-center items-center w-auto gap-x-8 h-full uppercase text-[20px] font-[400px] px-10 cursor-pointer'>
                    <HeaderButton href="/en-vivo/match/Soccer/Spain/545/23889594" title="En vivo" active />
                    <HeaderButton href="#" title="Deportes" />
                    <HeaderButton href="#" title="Esports" />
                    <HeaderButton href="#" title="Poker" />
                    <HeaderButton href="#" title="Casino" />
                    <HeaderButton href="#" title="Casino en Vivo" />
                    <HeaderButton href="#" title="Torneos" />
                    <HeaderButton href="#" title="Deportes Virtuales" />
                </div>
            </div>
            <span className='text-[18px] border-b-2 border-white/30 cursor-pointer hover:bg-white hover:text-black px-1 rounded-sm transition-all ease-in-out'>Iniciar sesión</span>
            <div className='flex justify-center gap-3 items-center min-w-[73px] w-[73px] h-[36px] rounded-md border border-white/60 cursor-pointer relative group'>
                <img className='w-6 h-4 rounded-sm' src="https://static.springbuilder.site/assets/images/flags64/es.svg?v=1705570218" />
                <svg className='text-white/70' width={11} height={11}><use href="#svg-arrow-down" /></svg>
                <div className='hidden group-hover:flex justify-center gap-3 items-center w-[73px] h-[36px] rounded-md border border-white/60 cursor-pointer absolute top-[34px] left-0 hover:bg-orange-500'>
                    <img className='w-6 h-4 rounded-sm' src="https://static.springbuilder.site/assets/images/flags64/en-us.svg?v=1705570218" />
                    <svg className='opacity-0' width={11} height={11}><use href="#svg-arrow-down" /></svg>
                </div>
            </div>
        </div>
    )
}
export default Header