const Footer = () => {
    return (
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
    )
}
export default Footer