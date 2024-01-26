const NotFound=()=>{
    return(
        <div className="flex flex-col justify-center items-center gap-6 bg-[#111111] text-white w-full h-full" style={{minHeight:"calc(100vh - 100px)"}}>
            <h1 className="text-[68px]">404 - page not found</h1>
            <h2 className="text-[38px] text-white/60 max-w-[540px] w-full text-center">It seems you are lost? Use this path to get home!</h2>
            <button className=" px-16 py-2 rounded-md bg-white hover:bg-green-700 text-green-700 hover:text-white tracking-[2.2px] transition-all ease-in-out duration-100 uppercase">Go Home</button>
        </div>
    )
}
export default NotFound