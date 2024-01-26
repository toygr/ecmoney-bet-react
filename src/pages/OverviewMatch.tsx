import { BallCategories, FilterDropdownButton, ResultPanel } from "./ViewMatch"

const OverviewMatch = () => {
    return (
        <div className="grid grid-cols-5 w-full h-full gap-2 overflow-y-auto" style={{ height: "calc(100vh - 200px)" }}>
            <div className="col-span-4 flex flex-col gap-2 w-full h-full text-[12px] pl-2">
                <BallCategories />
                <div className="flex justify-between items-center w-full bg-white rounded-md px-3 py-2">
                    <div className="flex gap-8 items-center">
                        <div className="flex gap-2 items-center">
                            <svg width={24} height={24}><use href="#svg-football" /></svg>
                            <span className="font-bold text-[16px]">Fútbol</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <svg width={14} height={14}><use href="#svg-leagues" /></svg>
                            <span className="text-[14px]">Select Leagues</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <svg width={16} height={16}><use href="#svg-updown" /></svg>
                            <span className="text-[14px]">Sort by: By start time</span>
                            <FilterDropdownButton />
                        </div>
                    </div>
                    <div className="flex items-center bg-[#f5f5f5] rounded-md p-3 w-[320px]">
                        <input type="text" className="bg-transparent outline-none text-[14px] text-[#262626] w-full" placeholder="Buscar juego" />
                        <svg className='text-[#098136]' width={14} height={14}><use href="#svg-search" /></svg>
                    </div>
                </div>
            </div>
            <div className="w-full pr-2 text-[12px] h-full overflow-y-auto">
                <ResultPanel />
            </div>
        </div>
    )
}
export default OverviewMatch