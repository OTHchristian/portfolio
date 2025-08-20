import NavBar from "@/components/ui/navBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <div className="bg-white p-4">
      <NavBar></NavBar>
      <main>

        <section className="w-full flex flex-col xl:flex-row items-center justify-between xl:p-5 mt-5" id="home">
          <div className="w-full xl:w-1/2  flex items-center justify-center mt-5">
            <div>
              <h1 className="text-4xl font-semibold">Developpeur <span className="text-blue-500">fullstack</span></h1>
              <h2 className="text-3xl text-blue-400 mt-3.5">Solution sur mesure</h2>
              <p className="mt-3.5 text-xl">Créateur de solutions digitales innovantes : sites web,</p>
              <p className="mt-3.5 text-xl"> applications mobiles, cybersécurité et </p>
              <p className="mt-3.5 text-xl">accompagnement technique personnalisé.</p>
              <div className="flex flex-col md:flex-row gap-5">
                <button className="w-full md:w-auto p-3.5 rounded-xl bg-blue-500 text-white mt-2 md:mt-5">Decouvrir mes services</button>
                <button className="w-full md:w-auto p-3.5 rounded-xl text-blue-500 bg-white md:mt-5 border border-gray-400">Demander un devis</button>
              </div>
              <div className="flex flex-col xl:flex-row gap-3 mt-5">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-green-500 animate-bounce"></div>
                  <p>Disponible pour de nouveaux projets</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-blue-500 animate-bounce"></div>
                  <p>Reponses rapides</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 xl:h-150 flex items-center justify-center xl:relative mt-3.5">
            <div className="w-full md:grid md:grid-cols-2 md:gap-3 xl:block md:items-center md:justify-center">
              <div className="w-full xl:w-auto p-5 border border-gray-200 rounded-xl xl:rotate-10 xl:absolute xl:top-12 xl:right-0 mb-3.5 xl:mb-0">
                {/* logo */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-code" viewBox="0 0 16 16">
                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
                  </svg>
                {/* titre */}
                <p className="font-semibold mt-2">Sites web</p>
                {/* text */}
                <p className="text-gray-500">Développement sur mesure avec les dernières technologies</p>
              </div>
              <div className="w-full xl:w-auto p-5 border border-gray-200 rounded-xl xl:rotate-0 xl:absolute xl:top-74 xl:left-60 mb-3.5 xl:mb-0 xl:min-w-100">
                {/* logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(72.3% 0.219 149.579)" className="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
                {/* titre */}
                <p className="font-semibold mt-2">Applications</p>
                {/* text */}
                <p className="text-gray-500">iOS, Android et applications web progressives</p>
              </div>
              <div className="w-full xl:w-auto p-5 border border-gray-200 rounded-xl xl:hue-rotate-10 xl:absolute xl:top-40 xl:left-0 mb-3.5 xl:mb-0 xl:min-w-100">
                {/* logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(63.7% 0.237 25.331)" className="bi bi-shield-check" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                </svg>
                {/* titre */}
                <p className="font-semibold mt-2">Cybersecurite</p>
                {/* text */}
                <p className="text-gray-500">Audit et protection de vos systèmes</p>
              </div>
              <div className="w-full xl:w-auto p-5 border border-gray-200 rounded-xl xl:rotate-10 xl:absolute xl:top-104 xl:left-0 mb-3.5 xl:mb-0 xl:min-w-100">
                {/* logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.7% 0.265 303.9)" className="bi bi-robot" viewBox="0 0 16 16">
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
                </svg>
                {/* titre */}
                <p className="font-semibold mt-2">Bots & IA</p>
                {/* text */}
                <p className="text-gray-500">Automatisation et intelligence artificielle</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="services">
          <div className="w-full text-center">
            <h1 className="text-xl xl:text-4xl font-semibold text-blue-500">Mes services</h1>
            <p className="mt-3.5">Solutions complètes pour tous vos besoins en développement et technologie.De la </p>
            <p>conception à la maintenance, je vous accompagne dans tous vos projets.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:p-10">
            <div className="border border-gray-200 rounded-xl h-100 p-3.5">
              <div className="w-15 p-3.5 rounded-xl bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-code" viewBox="0 0 16 16">
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
                </svg>
              </div>
              <h1 className="font-semibold mt-3.5 xl:text-xl">Sites Web sur Mesure</h1>
              <p className="mt-2">Création de sites web modernes, responsive et optimisés SEO. WordPress, Laravel, React, ou développement from scratch.</p>
              <div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Design responsive</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Optimisation SEO</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Performance optimisée</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Sécurité renforcée</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-100 p-3.5">
              <div className="w-15 p-3.5 rounded-xl bg-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(72.3% 0.219 149.579)" className="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
              </div>
              <h1 className="font-semibold mt-3.5 xl:text-xl">Applications Mobiles</h1>
              <p className="mt-2">Développement d'applications iOS et Android natives ou hybrides. Publication sur App Store et Google Play incluse.</p>
              <div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>iOS & Android</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Interface intuitive</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Publication stores</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Maintenance incluse</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-100 p-3.5">
              <div className="w-15 p-3.5 rounded-xl bg-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(63.7% 0.237 25.331)" className="bi bi-shield-check" viewBox="0 0 16 16">
                  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                </svg>
              </div>
              <h1 className="font-semibold mt-3.5 xl:text-xl">Cybersécurité</h1>
              <p className="mt-2">Audit de sécurité, pentesting, protection contre les cybermenaces et mise en place de bonnes pratiques.</p>
              <div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Audit sécurité</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Pentesting</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Protection données</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Formation équipes</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-100 p-3.5">
              <div className="w-15 p-3.5 rounded-xl bg-purple-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.7% 0.265 303.9)" className="bi bi-robot" viewBox="0 0 16 16">
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
                </svg>
              </div>
              <h1 className="font-semibold mt-3.5 xl:text-xl">Bots & Automatisation</h1>
              <p className="mt-2">Création de bots Discord, chatbots IA, scripts d'automatisation et outils sur mesure pour optimiser vos processus.</p>
              <div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Bots Discord</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Chatbots IA</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Scripts Python</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Automatisation</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-100 p-3.5">
              <div className="w-15 p-3.5 rounded-xl bg-pink-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(65.6% 0.241 354.308)" className="bi bi-database" viewBox="0 0 16 16">
                  <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
                </svg>
              </div>
              <h1 className="font-semibold mt-3.5 xl:text-xl">API & Backend</h1>
              <p className="mt-2">Développement d'API REST, intégrations tiers, architecture backend robuste et scalable.</p>
              <div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>API REST</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Intégrations</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Base de données</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Architecture</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-100 p-3.5">
              <div className="w-15 p-3.5 rounded-xl bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-wrench" viewBox="0 0 16 16">
                  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
                </svg>
              </div>
              <h1 className="font-semibold mt-3.5 xl:text-xl">Maintenance & Support</h1>
              <p className="mt-2">Maintenance de vos sites et applications, mises à jour de sécurité, support technique continu.</p>
              <div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Maintenance 24/7</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Mises à jour</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Sauvegarde</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Support prioritaire</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 5 bg-blue-500 rounded-xl text-white text-center p-5">
            <h1 className="font-semibold xl:text-2xl">Besoin d'un service sur mesure ?</h1>
            <p>Chaque projet est unique. Discutons de vos besoins spécifiques pour créer une solution parfaitement adaptée.</p>
            <button className="bg-white rounded-xl p-5 text-blue-500 mt-3.5">Discuter de mon project</button>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="expertises">
          <div className="w-full text-center">
            <h1 className="text-xl xl:text-4xl font-semibold text-blue-500">Mon Expertise</h1>
            <p className="mt-3.5">Maîtrise des technologies modernes et des outils de développement les plus performants. Une expertise</p>
            <p>constamment mise à jour pour répondre aux dernières tendances.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:p-10">
            <div className="p-3 5 border border-gray-200 rounded-xl">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-blue-500"></div>
                  <p>Frontend</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">HTML 5</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">CSS 3</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">javascript</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">React</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Tailwincss</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Typescript</div>
                </div>
            </div>
            <div className="p-3 5 border border-gray-200 rounded-xl">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-green-800"></div>
                  <p>Backend</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Node js</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Python</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">PHP</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Laravel</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">API REST</div>
                </div>
            </div>
            <div className="p-3 5 border border-gray-200 rounded-xl">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-purple-500"></div>
                  <p>Mobile</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">React Native</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Kivy</div>
                </div>
            </div>
            <div className="p-3 5 border border-gray-200 rounded-xl">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-orange-500"></div>
                  <p>DevOps</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Docker</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Linux</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Apache</div>
                </div>
            </div>
            <div className="p-3 5 border border-gray-200 rounded-xl">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-pink-500"></div>
                  <p>Database</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Mysqlite</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">MySQL</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">MongoDB</div>
                </div>
            </div>
            <div className="p-3 5 border border-gray-200 rounded-xl">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-4 w-4 bg-gray-500"></div>
                  <p>Tools</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">VS Code</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Git</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Figma</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Postman</div>
                </div>
            </div>
          </div>
          <div className="bg-blue-100 rounded-xl w-full p-3.5 mt-3.5">
            <h1 className="font-semibold xl:text-xl">Decouvrir quelques de mes projects</h1>
            <div className="mt-3.5 grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              <div className="p-3 5 border border-gray-200 rounded-xl bg-white">
                {/* description */}
                <p>sports prediction website integrating a PHP scraping system to automatically collect information from various specialized platforms.</p>
                {/* liens */}
                <div className="mt-3.5 flex gap-3">
                  <a href="https://github.com/OTHchristian/Sportalytics">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="oklch(62.3% 0.214 259.815)" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                  <a href="https://pink-buffalo-557500.hostingersite.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="oklch(62.3% 0.214 259.815)" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                    </svg>
                  </a>
                </div>
                {/* skills utilisés */}
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">HTML</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">CSS</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Javascript</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">PHP</div>
                </div>
              </div>
              <div className="p-3 5 border border-gray-200 rounded-xl bg-white">
                {/* description */}
                <p>e-commerce mobile application using React Native for the user interface and Flask to create a REST API connected to a MySQL database.</p>
                {/* liens */}
                <div className="mt-3.5 flex gap-3">
                  <a href="https://github.com/PakitoShop/mobileApp/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="oklch(62.3% 0.214 259.815)" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                    </svg>
                  </a>
                </div>
                {/* skills utilisés */}
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">HTML</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">CSS</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Javascript</div>
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">PHP</div>
                </div>
              </div>
              <div className="p-3 5 border border-gray-200 rounded-xl bg-white">
                {/* description */}
                <p>Création d’une application web moderne permettant de consulter et gérer ses emails Gmail directement depuis une interface intuitive.</p>
                {/* liens */}
                <div className="mt-3.5 flex gap-3">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                  <a href="https://inbox-detox.netlify.app/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="oklch(62.3% 0.214 259.815)" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                    </svg>
                  </a>
                </div>
                {/* skills utilisés */}
                <div className="flex flex-wrap gap-3 mt-3.5">
                  <div className="bg-gray-200 rounded-full pl-4 pr-4">Next Js</div>
                </div>
              </div>
            </div>
            <div className="w-full flex text-center mt-3.5 justify-center gap-3 items-center">
              <p>consultez mon compte github christian.O </p>
              <a href="https://github.com/OTHchristian/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="oklch(62.3% 0.214 259.815)" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="a-propos">
          <div className="w-full text-center">
            <h1 className="text-xl xl:text-4xl font-semibold text-blue-500">A Propos</h1>
            <p className="mt-3.5">Ingénieur en informatique passionné par le développement et les nouvelles technologies.</p>
            <p>Une approche humaine et personnalisée pour chaque projet.</p>
          </div>
          <div className="grid xl:grid-cols-2 gap-5 mt-3.5 md:p-10">
            <div>
              <div className="bg-blue-100 rounded-xl p-3.5">
                <div className="flex gap-3 items-center">
                  <div className="h-10 w-10 bg-blue-500 text-white flex items-center justify-center p-10 rounded-full">
                    <h1 className="font-semibold text-2xl">C.O</h1>
                  </div>
                  <div>
                    <h1 className="font-semibold text-2xl">Christian OTH</h1>
                    <h2>Développeur Full-Stack & Gestionnaire de Projets</h2>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 mt-3.5">
                  <div className="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="oklch(62.3% 0.214 259.815)" className="bi bi-pin-map" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
                      <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                    </svg>
                    <p>Douala, Cameroun</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="oklch(62.3% 0.214 259.815)" className="bi bi-calendar" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg>
                    <p>Disponible</p>
                  </div>
                  <div className="flex gap-5 items-center md:mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="oklch(62.3% 0.214 259.815)" className="bi bi-mortarboard" viewBox="0 0 16 16">
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                    </svg>
                    <p>Ingenieur en informatique</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p>Consultant en cybersécurité et développeur web, je conçois et intègre des solutions numériques sur mesure depuis plus de 2 ans. Ma philosophie : allier sécurité, performance et design pour créer des outils fiables qui répondent aux véritables enjeux business. J’assure le suivi complet des projets avec un investissement personnel plus fort qu’une société de conseil classique, tout en restant beaucoup plus abordable.Que ce soit pour un site vitrine, une application web complexe, une intégration API ou de l’automatisation sécurisée, j’accompagne mes clients de A à Z avec une approche transparente et des méthodes éprouvées.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="h-50 border border-gray-200 rounded-xl p-3.5">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
                {/* titre */}
                <h1 className="font-semibold text-xl mt-3.5">Approche Humaine</h1>
                {/* description */}
                <p className="mt-3.5">Chaque projet est unique, je prends le temps de comprendre vos besoins spécifiques</p>
              </div>
              <div className="h-50 border border-gray-200 rounded-xl p-3.5">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-lightbulb" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
                </svg>
                {/* titre */}
                <h1 className="font-semibold text-xl mt-3.5">Innovation</h1>
                {/* description */}
                <p className="mt-3.5">Toujours à l'affût des dernières technologies pour des solutions modernes</p>
              </div>
              <div className="h-50 border border-gray-200 rounded-xl p-3.5">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-bullseye" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
                  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
                {/* titre */}
                <h1 className="font-semibold text-xl mt-3.5">Resultats</h1>
                {/* description */}
                <p className="mt-3.5">Focus sur les objectifs concrets et la valeur ajoutée pour votre business</p>
              </div>
              <div className="h-50 border border-gray-200 rounded-xl p-3.5">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(62.3% 0.214 259.815)" className="bi bi-people" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                </svg>
                {/* titre */}
                <h1 className="font-semibold text-xl mt-3.5">Collaboration</h1>
                {/* description */}
                <p className="mt-3.5">Travail en étroite collaboration, transparence et communication continue</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="contact-us">
          <div className="w-full text-center">
            <h1 className="text-xl xl:text-4xl font-semibold text-blue-500">Démarrons Votre projet</h1>
            <p className="mt-3.5">Prêt à concrétiser vos idées ? Contactez-moi pour un devis gratuit et personnalisé.</p>
            <p> Réponse garantie sous 24h.</p>
          </div>
          <div className="flex flex-col xl:flex-row items-start justify-center gap-5 mt-3.5">
            <div className="w-full xl:w-1/3 p-3.5 mt-3.5">
              <h1 className="font-semibold text-2xl">Information de contact</h1>
              <div className="mt-3 5">
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p className="text-blue-500">othchristian@icloud.com</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p> 621 77 63 01</p>
                </div>
                <div className="flex gap-3 items-center mt-3.5">
                  <div className="rounded-full h-3 w-3 bg-gray-400"></div>
                  <p>Douala, Cameroun</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-2/3 p-3.5 border border-gray-200 mt-3.5 rounded-xl">
              <h1 className="text-2xl font-semibold">Parlez-moi de Votre Projet</h1>
              <form action="" method="post" className="mt-3.5">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="mt-3.5">
                    <p>Prenom*</p>
                    <input type="text" className="mt-1 w-full border border-gray-200 h-10 rounded-sm hover:border-blue-500 focus:outline-0 p-2" placeholder="Votre Prenom" required/>
                  </div>
                  <div className="mt-3.5">
                    <p>Email*</p>
                    <input type="email" className="mt-1 w-full border border-gray-200 h-10 rounded-sm hover:border-blue-500 focus:outline-0 p-2" placeholder="Votre Email" required/>
                  </div>
                  <div className="mt-3 5">
                    <p>Type de project</p>
                    <div className="mt-1">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selectionnez.." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Site Vitrine</SelectItem>
                          <SelectItem value="dark">Site E-commerce</SelectItem>
                          <SelectItem value="system0">Application Mobile</SelectItem>
                          <SelectItem value="system1">Bot/Automatisation</SelectItem>
                          <SelectItem value="system2">Maintenance</SelectItem>
                          <SelectItem value="system3">Autres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-3 5">
                    <p>Budget Estimé</p>
                    <div className="mt-1">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selectionnez.." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">0-200$</SelectItem>
                          <SelectItem value="dark">200$-500$</SelectItem>
                          <SelectItem value="system0">500$-1000$</SelectItem>
                          <SelectItem value="system1">1000$-2500$</SelectItem>
                          <SelectItem value="system2">2500$-5000$</SelectItem>
                          <SelectItem value="system3">A Definir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="mt-3 5">
                  <p>Delai souhaité</p>
                  <div className="mt-1">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selectionnez.." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Urgent(- 2 Semaines)</SelectItem>
                        <SelectItem value="dark">Dans le mois</SelectItem>
                        <SelectItem value="system0">2-3 mois</SelectItem>
                        <SelectItem value="system1">flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
