import hero from "./image/hero.png";
import Image from "next/image";
import web1 from "./image/proyek1.png";
import web2 from "./image/proyek2.png";
import web3 from "./image/proyek3.png";
import web4 from "./image/proyek4.png";
import web5 from "./image/proyek5.png";
import web6 from "./image/proyek6.png";
import web7 from "./image/proyek7.png";
import web8 from "./image/proyek8.png";



const logos = [
  "https://www.svgrepo.com/show/355190/reactjs.svg",
  "https://www.svgrepo.com/show/342062/next-js.svg",
  "https://www.svgrepo.com/show/452075/node-js.svg",
  "https://www.svgrepo.com/show/374167/vite.svg",
  "https://www.svgrepo.com/show/303600/typescript-logo.svg",
  "https://www.svgrepo.com/show/303206/javascript-logo.svg",
  "https://www.svgrepo.com/show/374118/tailwind.svg",
  "https://synthova.de/wp-content/uploads/2025/05/n8n-color.png"
];

const projects = [
  {
    src: web1,
    link: "image/proyek1.png",
    description: "Financial Notes Bot with n8n, Telegram, Gemini & Google Spreadsheet."
  },
  {
    src: web2,
    link: "image/proyek2.png",
    description: "Customer Service Bot with n8n, Telegram, Gemini & Google Spreadsheet."
  },
  {
    src: web3,
    link: "https://forum-app-blush.vercel.app/",
    description: "Forum App - Community-based public discussion forum."
  },
  {
    src: web4,
    link: "https://travel-ui-ux-apps.vercel.app/",
    description: "Travel UI/UX - Attractive tourist destination UI design."
  },
  {
    src: web5,
    link: "https://movie-app-smoky-psi.vercel.app/",
    description: "Movie App - Interactive exploration of the latest movies."
  },
  {
    src: web6,
    link: "https://luxspace-rwby.vercel.app/",
    description: "Luxspace - E-commerce website for showcasing and selling modern furniture."
  },
  {
    src: web7,
    link: "https://open-space-app-azure.vercel.app/",
    description: "Open Space - Collaborative workspace reservation platform."
  },
  {
    src: web8,
    link: "https://notes-app-v2-tan.vercel.app/",
    description: "Note App - Simple note-taking app with RESTful API."
  }
];

export default function Home() {
  return (
    <div className="Home">
      <main className="bg-white px-5 dark:bg-gray-900 sm:px-10 md:px-20 lg:px-40">
        <section className="min-h-screen pb-16">
          <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="font-bold text-xl">MBA</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 sm:ml-8"
                  href="https://drive.google.com/file/d/1KFODPxYZQeNUr6j3WDzwnqv5EPG7izf2/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 md:p-10 gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-20">
              <h2 className="text-4xl sm:text-5xl py-2 text-teal-600 font-bold dark:text-teal-400">
                M. Bayu Aji
              </h2>
              <h3 className="text-xl sm:text-2xl py-2 font-bold dark:text-white">
                Software Developer
              </h3>
              <p className="text-sm sm:text-md py-5 leading-6 text-gray-800 dark:text-gray-200">
                Web Developer & IT Freelancer, experienced in Front-End development using React, workflow automation with n8n, API integration (AI applications & Google Workspace). Enthusiastic about learning and growing in the IT world.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image src={hero} layout="fill" objectFit="cover" alt="Hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Framework & Tools */}
        <section className="flex flex-col items-center justify-center py-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Framework & Tools
          </h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {logos.map((src, index) => (
                <div key={index} className="flex items-center justify-center h-20 sm:h-24">
                  <Image
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-10">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 dark:text-white font-bold text-center">Portofolio</h3>
            <p className="text-sm sm:text-md py-2 leading-6 text-gray-800 dark:text-gray-200 text-center">
              This is a project that I did either as an exercise or an assignment while working on my certification. Click to visit the website.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {projects.map((project, index) => (
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
                <p className="text-sm text-center text-gray-800 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
