export default function NavBar(){
    return (
        <nav className="sticky top-0  md:top-10 z-40 md:py-3 max-w-landing-width mx-auto w-full flex justify-between items-center md:rounded-xl border-b md:border border-[rgba(0,0,0,0.2)] xl:p-8 p-2 pl-4 backdrop-blur-md bg-white/80">
            <ul className="w-full xl:w-1/3">
                <li className="font-semibold text-xl">Christian.O</li>
            </ul>
            <ul className="hidden w-2/3 xl:flex flex-row items-center justify-between">
                <li>Services</li>
                <li>Methodes</li>
                <li>Expertise</li>
                <li>A propos</li>
                <li>Contact</li>
                <li>othchristian@icloud.com</li>
                <li>+237 621 77 63 01</li>
            </ul>
        </nav>
    )
}