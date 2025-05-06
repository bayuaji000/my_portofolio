import hero from "./image/hero.png";
import Image from "next/image";
import web1 from "./image/proyek1.png";
import web2 from "./image/proyek2.png";
import web3 from "./image/proyek3.png";
import web4 from "./image/proyek4.png";
import web5 from "./image/proyek5.png";
import web6 from "./image/proyek6.png";

const logos = [
  "https://www.svgrepo.com/show/355190/reactjs.svg",
  "https://www.svgrepo.com/show/342062/next-js.svg",
  "https://www.svgrepo.com/show/452075/node-js.svg",
  "https://www.svgrepo.com/show/374167/vite.svg",
  "https://www.svgrepo.com/show/303600/typescript-logo.svg",
  "https://www.svgrepo.com/show/303206/javascript-logo.svg",
  "https://www.svgrepo.com/show/374118/tailwind.svg",
  "https://www.svgrepo.com/show/361653/vercel-logo.svg"
];


export default function Home() {
  return (
    <div className="Home">
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen pb-16">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-bold text-xl">MBA</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-between p-10">
            <div className="w-1/2 text-left">
              <h2 className="text-5xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-6xl">
                M. Bayu Aji
              </h2>
              <h3 className="text-2xl py-2 font-bold dark:text-white md:text-3xl">
                Web Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
                Web Developer & IT Freelancer, experienced in Front-End
                with React, Next.js, and Node.js. Enthusiastic to learn & grow in the IT world.
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
                <Image src={hero} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-10">          {/* Title */}
          <div className="text-center text-gray-900 dark:text-white mb-8">
            <h3 className="text-3xl font-bold">Framework & Tools</h3>
          </div>

          {/* Container for the logos */}
          <div className="bg-gray-100 dark:bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="grid grid-cols-4 gap-4">
              {logos.map((src, index) => (
                <div key={index} className="flex items-center justify-center h-24 rounded-lg">
                  <Image src={src} alt={`Logo ${index + 1}`} width={80} height={80} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-bold">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              This is a project that I did either as an exercise or an assignment while working on my certification. click to visit the website.
            </p>
          </div>

          {/* Portofolio Grid */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {[
              { src: web1, link: "https://open-space-app-azure.vercel.app/" },
              { src: web2, link: "https://note-app-vite.vercel.app/" },
              { src: web3, link: "https://forum-app-blush.vercel.app/" },
              { src: web4, link: "https://travel-ui-ux-apps.vercel.app/" },
              { src: web5, link: "https://movie-app-smoky-psi.vercel.app/" },
              { src: web6, link: "" }
            ].map((project, index) => (
              <div key={index} className="basis-1/3 flex-1">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="rounded-lg object-cover cursor-pointer"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={project.src}
                    alt={`Project ${index + 1}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
