export default function NavBar(){
    return (
        <nav className="sticky top-0  md:top-10 z-40 md:py-3 max-w-landing-width mx-auto w-full flex justify-between items-center md:rounded-xl border-b md:border border-[rgba(0,0,0,0.2)] xl:p-8 p-2 pl-4 backdrop-blur-md bg-white/80">
            <ul className="w-2/3 xl:w-1/3">
                <li className="font-semibold text-xl">Christian.O</li>
            </ul>
            <ul className="hidden w-2/3 xl:flex flex-row items-center justify-between">
                <li><a href="#services" className="hover:text-blue-500">Services</a></li>
                <li><a href="#methodes" className="hover:text-blue-500">Methodes</a></li>
                <li><a href="#expertises" className="hover:text-blue-500">Expertise</a></li>
                <li><a href="#a-propos" className="hover:text-blue-500">A propos</a></li>
                <li><a href="#contact-us" className="hover:text-blue-500">Contact</a></li>
                <li className="text-blue-500">othchristian@icloud.com</li>
                <li>+237 621 77 63 01</li>
            </ul>
            <ul className="flex w-1/3 xl:hidden justify-end">
                <button className="p-3.5 pr-5 pl-5 bg-black text-white rounded-xl">contact</button>
            </ul>
        </nav>
    )
}