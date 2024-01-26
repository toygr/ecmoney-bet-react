import { Outlet } from "react-router-dom"
const SelectionItem = ({ title, href, active }: { title: string, href: string, active?: boolean }) => {
    return (
        <a href={href} className={`p-4 cursor-pointer border-[#098136] ${active ? "font-bold border-b-[3px] pb-[13px]" : "hover:border-b-[3px] hover:pb-[13px]"}`}>{title}</a>
    )
}
const EnVivo = () => {
    return (
        <div className="w-full bg-[#1a1a1a] border-t border-white/10">
            <div className="w-full p-2">
                <div className="flex justify-center items-center gap-4 w-full bg-white rounded-md text-[14px] font-roboto text-[#262626]">
                    <SelectionItem href="/en-vivo/match/overview/Soccer" title="Descripción general" />
                    <SelectionItem href="/en-vivo/match/Soccer/Spain/545/23889594" title="Vista de eventos" active />
                    <SelectionItem href="#" title="Vista múltiple" />
                    <SelectionItem href="#" title="Calendario" />
                    <SelectionItem href="#" title="Resultados" />
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default EnVivo