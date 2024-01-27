import { useRef, useState } from "react"
import { EventPaneSelect, RedBadge } from "./Home"
const TeamRow = ({ src, title, score }: { src: string, title: string, score: string }) => {
    return (
        <div className="flex justify-between items-center w-full px-2 py-1">
            <div className="flex items-center gap-2">
                <img width={20} src={src} loading="lazy" />
                <span>{title}</span>
            </div>
            <span className="flex justify-center items-center bg-[#f0f0f0] w-6 h-5 rounded-md">{score}</span>
        </div>
    )
}
const BetButton = ({ active }: { active?: boolean }) => {
    return (
        <button className={`w-full p-2 rounded-md border border-[#ccc] hover:border-[#098136] ${active ? "bg-[#098136] text-white" : ""}`}>4.70</button>
    )
}
const MatchRow = ({ active }: { active?: boolean }) => {
    return (
        <div className={`w-full border-t border-t-black ${active ? "border-l-4 border-l-[#098136]" : ""} text-[12px]`}>
            <div className="flex justify-between items-center w-full p-1 ">
                <div className="flex items-center gap-1">
                    <RedBadge size={6} />
                    <span>2da Mitad 90'</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="bg-[#f0f0f0] rounded-md p-1 text-[#8c8c8c] hover:text-[#098136] cursor-pointer">
                        <svg width={16} height={16}><use href="#svg-star" /></svg>
                    </div>
                    <span>+23</span>
                </div>
            </div>
            <div className="w-full border-t border-b border-black/10 py-1">
                <TeamRow title="Wisla Plock" src="https://statistics.betconstruct.com/images/e/m/3/7229.webp" score="0" />
                <TeamRow title="Aqvital Csakvar TK" src="https://statistics.betconstruct.com/images/e/m/6/13984.webp" score="0" />
                <div className="flex items-center gap-1 w-full text-[12px] text-[#262626] px-2 py-1 font-bold">
                    <BetButton active />
                    <BetButton />
                    <BetButton />
                </div>
            </div>
            <div className="w-full p-1">0 : 0, (0:0), (0:0) 75`</div>
        </div>
    )
}
const LeagueRow = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="w-full border-t border-black cursor-pointer">
            <div onClick={() => setOpen(v => !v)} className="flex justify-between items-center w-full bg-[#fafafa]">
                <div className="flex items-center gap-2 text-[14px] p-2 rounded-md">
                    <svg className='text-black/50' width={24} height={24}><use href="#svg-clubs" /></svg>
                    <span>Mundo, Amistosos de Clubes</span>
                </div>
                <svg className={`text-black/50 transition-all ease-in-out ${open ? "rotate-[180deg]" : ""}`} width={24} height={24}><use href="#svg-dropdown-arrow" /></svg>
            </div>
            <div className={`w-full ${open ? "" : "hidden"}`}>
                <MatchRow active />
                <MatchRow />
            </div>
        </div>
    )
}
const FavoriteRow = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="w-full rounded-md bg-[#fafafa]">
            <div onClick={() => setOpen(v => !v)} className="flex justify-between items-center w-full text-[14px] p-3 cursor-pointer">
                <div className="flex gap-2 items-center">
                    <svg width={24} height={24} id="svg-favorite" viewBox="0 0 32 32" fill="currentColor"><path d="M16 32.001C24.8365 32.001 32 24.8375 32 16.001C32 7.16442 24.8365 0.000976562 16 0.000976562C7.16344 0.000976562 0 7.16442 0 16.001C0 24.8375 7.16344 32.001 16 32.001Z" fill="url(#paint0_linear_226_618)"></path><path d="M25.808 12.8142C25.6976 12.4749 25.4043 12.2275 25.0512 12.1762L19.378 11.3518L16.8409 6.21105C16.6829 5.89105 16.3571 5.68848 16.0001 5.68848C15.6433 5.68848 15.3175 5.89105 15.1595 6.2111L12.6224 11.3519L6.94919 12.1762C6.59607 12.2275 6.30263 12.4749 6.19238 12.8143C6.08212 13.1537 6.17412 13.5262 6.42963 13.7752L10.5348 17.7768L9.5657 23.427C9.50538 23.7787 9.64994 24.1342 9.93863 24.3439C10.2274 24.5538 10.6101 24.5814 10.9259 24.4154L16.0001 21.7477L21.0744 24.4154C21.3927 24.5826 21.7752 24.5522 22.0617 24.3439C22.3504 24.1342 22.4951 23.7789 22.4348 23.427L21.4656 17.7768L25.5708 13.7752C25.8263 13.5262 25.9181 13.1536 25.808 12.8142Z" fill="url(#paint1_linear_226_618)"></path><defs><linearGradient id="paint0_linear_226_618" x1="16" y1="32.001" x2="16" y2="0.000976562" gradientUnits="userSpaceOnUse"><stop stopColor="#FD5900"></stop><stop offset="1" stopColor="#FFDE00"></stop></linearGradient><linearGradient id="paint1_linear_226_618" x1="16.0001" y1="24.523" x2="16.0001" y2="5.68848" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE59A"></stop><stop offset="1" stopColor="#FFFFD5"></stop></linearGradient></defs></svg>
                    <span>Favourites. (0)</span>
                </div>
                <svg className={`text-black/50 transition-all ease-in-out ${open ? "rotate-[180deg]" : ""}`} width={24} height={24}><use href="#svg-dropdown-arrow" /></svg>
            </div>
            <div className={`w-full p-3 bg-[#f4f4f4] rounded-md ${open ? "" : "hidden"}`}>
                <div className="w-full bg-white rounded-md px-12 py-6 text-[12px] text-center">Haga click en la ⭐ para agregarlo a Favoritos. </div>
            </div>
        </div>
    )
}
const CategoryDropdownItem = ({ title, active }: { title: string, active?: boolean }) => {
    return (
        <span className={`${active ? "bg-[#f0f0f0]" : ""} p-2 rounded-md hover:bg-[#f0f0f0] transition-all ease-in-out cursor-pointer`}>{title}</span>
    )
}
const CategoryDropdownButton = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full relative">
            <div onClick={() => setOpen(v => !v)} className="flex w-fit items-center gap-[2px] text-[12px] p-2 rounded-md bg-[#f0f0f0] cursor-pointer">
                <span>Resultado del Partido</span>
                <svg className='text-black/50' width={20} height={20}><use href="#svg-dropdown-arrow" /></svg>
            </div>
            <div className={`flex flex-col gap-1 absolute top-10 left-0 w-[210px] p-2 bg-white rounded-md text-[14px] ${open ? "" : "hidden"}`} style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px 0 #00000014, 0 9px 28px 8px #0000000d" }}>
                <CategoryDropdownItem title="Resultado del Partido" active />
                <CategoryDropdownItem title="Doble Oportunidad" />
                <CategoryDropdownItem title="Ganador sin empate" />
                <CategoryDropdownItem title="Goles hándicap" />
                <CategoryDropdownItem title="Total de goles" />
                <CategoryDropdownItem title="Ambos equipos marcan" />
                <CategoryDropdownItem title="El equipo 1 marcará" />
                <CategoryDropdownItem title="El equipo 2 marcará" />
                <CategoryDropdownItem title="Resultado de la 1ra mitad" />
                <CategoryDropdownItem title="Total de Goles de la 1ra mitad" />
            </div>
        </div>
    )
}
const FilterDropdownItem = ({ title }: { title: string }) => {
    return (
        <span className={`p-2 rounded-md hover:bg-[#f8f8f8] transition-all ease-in-out`}>{title}</span>
    )
}
export const FilterDropdownButton = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative">
            <div onClick={() => setOpen(v => !v)} className="bg-[#f0f0f0] rounded-md p-2 text-[#8c8c8c] cursor-pointer">
                <svg className="hover:text-[#098136]" width={16} height={16}><use href="#svg-updown" /></svg>
            </div>
            <div className={`flex flex-col gap-1 absolute top-10 right-0 w-[150px] p-2 bg-white rounded-md text-[14px] text-black ${open ? "" : "hidden"}`} style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px 0 #00000014, 0 9px 28px 8px #0000000d" }}>
                <FilterDropdownItem title="By start time" />
                <FilterDropdownItem title="Alphabetically A-Z" />
                <FilterDropdownItem title="Alphabetically Z-A" />
            </div>
        </div>
    )
}
const BallCategoryItem = ({ title, href, icon, active, badge }: { title: string, href: string, icon: string, active?: boolean, badge: string }) => {
    return (
        <a href={href} className={`flex flex-col justify-center items-center w-[96px] h-[80px] rounded-md ${active ? "bg-[#f0f0f0]" : ""} cursor-pointer transition-all ease-in-out hover:bg-[#f8f8f8] relative`}>
            <svg width={32} height={32}><use href={icon} /></svg>
            <span className="whitespace-nowrap">{title}</span>
            <div className="text-[11px] bg-black rounded-full text-white absolute top-3 right-4 px-[6px] leading-[15px]">{badge}</div>
            {active && <div className="absolute bottom-0 w-[32px] h-[2px] bg-[#098136]" />}
        </a>
    )
}
const BallCategoryNav = ({ onClick, dir }: { onClick?: () => void, dir: "left" | "right" }) => {
    return (
        <div onClick={onClick} className={`flex justify-center items-center absolute ${dir === "left" ? "left-10 rotate-90" : "right-10 -rotate-90"} rounded-full w-[44px] h-[44px] bg-white/90 text-[#098136] z-30 -translate-y-[50%] bottom-0 cursor-pointer`} style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px 0 #00000014, 0 9px 28px 8px #0000000d" }}>
            <svg width={24} height={24}><use href="#svg-dropdown-arrow" /></svg>
        </div>
    )
}
export const BallCategories = () => {
    const [shift, setShift] = useState(0)
    const wrapRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div ref={wrapRef} className="w-full bg-white rounded-md overflow-hidden relative group">
            <div ref={ref} className="flex items-center gap-3 w-fit px-2 py-1 transition-all ease-in-out" style={{ transform: `translate(-${shift}px, 0)` }}>
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Fútbol" icon="#svg-football" badge="21" active />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Basketball/Spain/545/23889594`} title="Baloncesto" icon="#svg-basketball" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Tennis/Spain/545/23889594`} title="Tenis" icon="#svg-tennis" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Volleyball/Spain/545/23889594`} title="Voleibol" icon="#svg-volleyball" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/IceHockey/Spain/545/23889594`} title="Hockey sobre hielo" icon="#svg-hockey" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/TableTennis/Spain/545/23889594`} title="Tenis de Mesa" icon="#svg-table-tennis" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Archery/Spain/545/23889594`} title="Balonmano" icon="#svg-balonmano" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Bádminton" icon="#svg-badminton" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Voley de Playa" icon="#svg-voley" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Críquet" icon="#svg-cricket" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Dardos" icon="#svg-dardos" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Fútbol sala" icon="#svg-football-sala" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Golf/Spain/545/23889594`} title="Golf" icon="#svg-golf" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Snooker/Spain/545/23889594`} title="Snooker" icon="#svg-snooker" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/CounterStrike/Spain/545/23889594`} title="Counter-Strike 2" icon="#svg-counter-strike" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Dota2/Spain/545/23889594`} title="Dota 2" icon="#svg-dota" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="Valorant" icon="#svg-valorant" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/CyberFootball/Spain/545/23889594`} title="E-Football" icon="#svg-e-football" badge="24" />
                <BallCategoryItem href={`${import.meta.env.BASE_URL}en-vivo/match/Soccer/Spain/545/23889594`} title="E-Basketball" icon="#svg-e-basketball" badge="24" />
            </div>
            <div className="hidden group-hover:block">
                <BallCategoryNav onClick={() => setShift(v => Math.max(v - 200, 0))} dir="left" />
                <BallCategoryNav onClick={() => setShift(v => Math.min(v + 200, (ref.current?.clientWidth || 0) - (wrapRef?.current?.clientWidth || 0)))} dir="right" />
            </div>
        </div>
    )
}
const BallBoardScoreItem = ({ href, score1, score2 }: { href: string, score1: string, score2: string }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-[14px] leading-[12px] font-bold">
            <svg className='' width={12} height={12}><use href={href} /></svg>
            <span>{score1}</span>
            <span>{score2}</span>
        </div>
    )
}
const BallBoard = () => {
    return (
        <div className="flex flex-col gap-1 justify-center items-center w-full h-[128px] text-white bg-cover bg-opacity-80 bg-blend-multiply bg-black/50 px-1 rounded-xl" style={{ backgroundImage: "url(https://static.springbuilder.site/widgets-x/images/sports-desktop/soccer.webp)" }}>
            <div className="flex items-center gap-2 w-full px-2 py-1 border-b border-[#888]">
                <svg className='text-black/50' width={18} height={18}><use href="#svg-clubs" /></svg>
                <span>Mundo - Amistosos de Clubes</span>
            </div>
            <div className="flex justify-between items-center w-full px-1 border-b border-[#888]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-1">
                        <img width={24} src="https://statistics.betconstruct.com/images/e/s/45/90832.webp" loading="lazy" />
                        <span>Metropolitanos FC</span>
                    </div>
                    <div className="flex items-center gap-2 px-1">
                        <img width={24} src="https://statistics.betconstruct.com/images/e/s/108/216227.webp" loading="lazy" />
                        <span>Academia Puerto Cabello</span>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <BallBoardScoreItem href="#svg-corner-kick" score1="7" score2="4" />
                    <BallBoardScoreItem href="#svg-yellow-card" score1="2" score2="1" />
                    <div className="h-7 border-l border-white/50" />
                    <BallBoardScoreItem href="#svg-offside" score1="0" score2="1" />
                    <BallBoardScoreItem href="#svg-twoside" score1="0" score2="0" />
                    <div className="h-7 border-l border-white/50" />

                    <div className="flex flex-col justify-center items-center gap-2 text-[14px] leading-[12px] font-bold">
                        <span className="text-[10px] font-normal">Puntaje</span>
                        <span>0</span>
                        <span>1</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full px-2">
                <div className="flex gap-2 items-center">
                    <span>0 : 1, (0:1), (0:0) 89`</span>
                    <span>Posible cambio de formato </span>
                </div>
                <div className="flex gap-2 items-center px-4 rounded-[4px] bg-[#8c8c8c]/60 cursor-pointer">
                    <svg className='text-white' width={18} height={18}><use href="#svg-timeline" /></svg>
                    <span className="text-[14px]">Timeline</span>
                </div>
            </div>
        </div>
    )
}
const MatchTypeItem = ({ title, active }: { title: string, active?: boolean }) => {
    return (
        <span className={`px-3 py-[10px] rounded-lg cursor-pointer ${active ? "bg-[#098136] text-white" : "bg-[#f8f8f8] hover:bg-[#f0f0f0] text-black"}`}>{title}</span>
    )
}
const MatchSelect = () => {
    return (
        <div className="flex justify-between items-center gap-3 w-full rounded-md px-4 py-2 bg-white">
            <div className="flex items-center">
                <div className="bg-[#f8f8f8] rounded-md p-2"><svg className="text-[#098136]" width={16} height={16}><use href="#svg-star" /></svg></div>
                <MatchTypeItem title="Todo" active />
                <MatchTypeItem title="Partido" />
                <MatchTypeItem title="Hándicaps" />
                <MatchTypeItem title="Totales" />
            </div>
            <div className="text-[#8c8c8c] hover:text-[#098136] cursor-pointer">
                <svg width={20} height={20}><use href="#svg-expand" /></svg>
            </div>
        </div>
    )
}
const MatchItem = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="flex flex-col gap-1 w-full rounded-md px-4 py-2 bg-white">
            <div onClick={() => setOpen(v => !v)} className="flex justify-between items-center font-bold cursor-pointer">
                <span>Resultado del Partido</span>
                <div className="flex gap-1 items-center text-[#8c8c8c]">
                    <svg width={20} height={20}><use href="#svg-dollar" /></svg>
                    <svg width={20} height={20}><use href="#svg-link" /></svg>
                    <span>1</span>
                    <svg width={20} height={20}><use href="#svg-star" /></svg>
                    <svg className={`text-black/50 transition-all ease-in-out ${open ? "rotate-[180deg]" : ""}`} width={24} height={24}><use href="#svg-dropdown-arrow" /></svg>
                </div>
            </div>
            <div className={`w-full ${open ? "" : "hidden"}`}>
                <hr />
                <EventPaneSelect />
                <EventPaneSelect bolt />
                <EventPaneSelect />
                <EventPaneSelect bolt />
                <EventPaneSelect />
                <EventPaneSelect bolt />
                <EventPaneSelect />
                <EventPaneSelect bolt />
            </div>
        </div>
    )
}
const ResultsPaneItem = () => {
    return (
        <div className="bg-[#f0f0f0] w-full px-1 py-[2px]">
            <div className="w-full p-1 rounded-md bg-white">
                <div className="flex justify-between items-center p-2 border-b border-black/10">
                    <div className="flex items-center gap-1 w-[60%]">
                        <svg width={24} height={24} className="shrink-0"><use href="#svg-football" /></svg>
                        <span className=" overflow-ellipsis whitespace-nowrap overflow-hidden">Amistosos de Clubes</span>
                    </div>
                    <div className="flex gap-1 items-center text-[#8c8c8c]">
                        <span className="flex justify-center items-center bg-[#f0f0f0] w-6 h-6 rounded-md p-1 hover:text-[#098136] cursor-pointer">
                            <svg width={16} height={16}><use href="#svg-exclaim" /></svg>
                        </span>
                        <span className="flex justify-center items-center bg-[#f0f0f0] w-6 h-6 rounded-md p-1 hover:text-[#098136] cursor-pointer">
                            <svg width={16} height={16}><use href="#svg-trash" /></svg>
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <div className="flex justify-between items-center gap-1 text-[#262626] opacity-60 px-2">
                        <span className="w-full overflow-hidden whitespace-nowrap overflow-ellipsis">FC Dnepr Mogilev - FC Dinamo Minsk</span>
                        <span className="whitespace-nowrap">26 ene</span>
                    </div>
                    <div className="flex justify-between items-center gap-1 text-[#262626] opacity-60 px-2">
                        <span className="w-full overflow-hidden whitespace-nowrap overflow-ellipsis font-bold">Resultado del Partido</span>
                        <span className="whitespace-nowrap">03:00</span>
                    </div>
                    <div className="px-2 py-1 bg-[#f5f5f5] text-[#595959] w-fit font-bold text-[14px] rounded-md tracking-[0.42px]">Suspendido</div>
                </div>
            </div>
        </div>
    )
}
const DiffnessSelect = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full relative">
            <div onClick={() => setOpen(v => !v)} className="flex items-center gap-2 w-fit rounded-md border border-black/20 text-[14px] px-2 py-1 cursor-pointer">
                <span>Multiple</span>
                <svg className={`text-black/50 transition-all ease-in-out ${open ? "rotate-[180deg]" : ""}`} width={24} height={24}><use href="#svg-dropdown-arrow" /></svg>
            </div>
            <div className={`flex flex-col gap-1 absolute top-10 left-0 w-[120px] p-2 bg-white rounded-md text-[14px] z-30 ${open ? "" : "hidden"}`} style={{ boxShadow: "0 3px 6px -4px #0000001f, 0 6px 16px 0 #00000014, 0 9px 28px 8px #0000000d" }}>
                <CategoryDropdownItem title="Simple" active />
                <CategoryDropdownItem title="Multiple" />
                <CategoryDropdownItem title="System" />
                <CategoryDropdownItem title="Chain" />
            </div>
        </div>
    )
}
export const ResultPanel = () => {
    return (
        <div className="w-full h-full bg-white rounded-md ">
            <div className="flex justify-center items-center w-full gap-2 shadow-md">
                <span className="text-[14px] font-bold py-4">Cupon</span>
                <span className="bg-[#098136] rounded-full text-white px-1 py-[1px]">19</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2">
                <DiffnessSelect />
                <div className="flex gap-1 items-center text-[#8c8c8c]">
                    <span className="flex justify-center items-center bg-[#f0f0f0] w-6 h-6 rounded-md p-1 hover:text-[#098136] cursor-pointer">
                        <svg width={16} height={16}><use href="#svg-gear" /></svg>
                    </span>
                    <span className="flex justify-center items-center bg-[#f0f0f0] w-6 h-6 rounded-md p-1 hover:text-[#098136] cursor-pointer">
                        <svg width={16} height={16}><use href="#svg-trash" /></svg>
                    </span>
                </div>
            </div>
            <div className="w-full overflow-y-auto" style={{ height: "calc(100% - 110px)" }}>
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
                <ResultsPaneItem />
            </div>
        </div>
    )
}
const ViewMatch = () => {
    return (
        <div className="grid grid-cols-5 w-full px-2" style={{ height: "calc(100vh - 200px)" }}>
            <div className="flex flex-col gap-1 w-full h-full pr-1 overflow-y-auto">
                <FavoriteRow />
                <div className="flex items-center w-full bg-white rounded-md p-3">
                    <input type="text" className="outline-none text-[14px] text-[#262626] w-full" placeholder="Buscar juego" />
                    <svg className='text-[#098136]' width={14} height={14}><use href="#svg-search" /></svg>
                </div>
                <div className="w-full bg-white rounded-md">
                    <div className="flex justify-between items-center w-full p-2">
                        <CategoryDropdownButton />
                        <div className="flex gap-1 items-center">
                            <FilterDropdownButton />
                            <div className="bg-[#f0f0f0] rounded-md p-2 text-[#8c8c8c] hover:text-[#098136] cursor-pointer">
                                <svg width={16} height={16}><use href="#svg-expand" /></svg>
                            </div>
                        </div>
                    </div>
                    <LeagueRow />
                    <LeagueRow />
                    <LeagueRow />
                    <LeagueRow />
                    <LeagueRow />
                </div>
            </div>
            <div className="col-span-3 flex flex-col gap-1 w-full h-full px-1 pr-0 overflow-y-auto text-[12px]">
                <BallCategories />
                <div className="flex flex-col gap-1 w-full h-full overflow-y-auto pr-1">
                    <BallBoard />
                    <MatchSelect />

                    <MatchItem />
                    <MatchItem />
                    <MatchItem />
                </div>
            </div>
            <div className="flex flex-col gap-1 w-full h-full px-1 overflow-y-auto text-[12px]">
                <ResultPanel />
            </div>
        </div>
    )
}
export default ViewMatch