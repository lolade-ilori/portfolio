
import storipod from "../app/assets/img/Storipod.png"
import issueTracker from "../app/assets/img/issueTracker.png"
import vueJobs from "../app/assets/img/vueJobs.png"
import escrow from "../app/assets/img/escrow.png"
import prolific from "../app/assets/img/prolific.png"
import periculum from "../app/assets/img/periculum.png"
import roadlers from "../app/assets/img/roadlers.png"
import interax from "../app/assets/img/interax.png"
import movie from "../app/assets/img/movieD.png"
import githubFinder from "../app/assets/img/githubFinder.png"
import productivityDash from "../app/assets/img/productivityDash.png"
import furniture from "../app/assets/img/furniture.png"
import crimeapp from "../app/assets/img/crimeapp.png"
import { StaticImageData } from "next/image"

export interface ProjectsInfo {
    id: number,
    name: string,
    image: string | StaticImageData,
    weblink: string,
    description: string,
    stackUsed: string[],
    year: string
}

export const projects: ProjectsInfo[] = [
    {
        id: 1,
        name: 'Storipod',
        image: storipod,
        weblink: 'https://web.storipod.app/auth',
        description: 'Storipod Web',
        stackUsed: ['Vue', 'Nuxt', 'Tailwind', 'Typescript', 'Firebase', 'Docker' ],
        year: '2025'
    },
    {
        id: 2,
        name: 'Issue Tracker',
        image: issueTracker,
        weblink: 'https://new-issue-tracker-eight.vercel.app/',
        description: 'Issue Tracker',
        stackUsed: ['Next', 'Typescript', 'Prisma', 'Tailwind', 'Xata'],
        year: '2024'
    },
    {
        id: 3,
        name: 'Vue Job Site',
        image: vueJobs,
        weblink: 'https://jobs-site-phi.vercel.app/',
        description: 'Job site for Vue Developers',
        stackUsed: ['Vue', 'Nuxt', 'Tailwind'],
        year: '2025'
    },
    {
        id: 4,
        name: 'Crime App',
        image: crimeapp,
        weblink: 'https://github.com/lolade-ilori/CrimeApp',
        description: 'github',
        stackUsed: ['Kotlin', 'Retrofit', 'Jetpack Compose', 'Android Studio'],
        year: '2024'
    },
    {
        id: 5,
        name: 'Escrow Dashboard',
        image: escrow,
        weblink: 'https://escrow-transaction-dashboard.vercel.app/',
        description: 'Escrow board example',
        stackUsed: ['Next', 'Tailwind', 'Shadcn Ui'],
        year: '2025'
    },
    {
        id: 6,
        name: 'Prolific',
        image: prolific,
        weblink: 'https://prolific.chat/',
        description: 'prolific web app',
        stackUsed: ['React', 'Typescript', 'Styled Components', 'Redux'],
        year: '2023'
    },
    {
        id: 7,
        name: 'Periculum',
        image: periculum,
        weblink: 'https://www.periculum.io/',
        description: 'periculum site',
        stackUsed: ['Webflow', 'Javascript'],
        year: '2023'
    },
    {
        id: 8,
        name: 'Roadlers',
        image: roadlers,
        weblink: 'https://roadlers.com/',
        description: 'roadlers web app',
        stackUsed: ['React', 'Typescript', 'Styled Components', 'Redux', 'Google API'],
        year: '2023'
    },
    {
        id: 9,
        name: 'Interax',
        image: interax,
        weblink: 'https://interax-web-test.vercel.app/',
        description: 'interax site',
        stackUsed: ['Next', 'Typescript', 'Styled Components', 'Contentful'],
        year: '2023'
    },
    {
        id: 10,
        name: 'Movie Dashboard',
        image: movie,
        weblink: 'https://movie-dashboard-tan.vercel.app/',
        description: 'movie board site',
        stackUsed: ['React', 'Javascript', 'scss', 'Context API'],
        year: '2022'
    },
    {
        id: 11,
        name: 'Github Finder',
        image: githubFinder,
        weblink: 'https://github-finder-clone1.vercel.app/',
        description: 'github finder app',
        stackUsed: ['Javascript', 'Tailwind', 'Context API'],
        year: '2022'
    },
    {
        id: 12,
        name: 'Productivity Dashboard',
        image: productivityDash,
        weblink: 'https://productivity-dashboard.vercel.app/#',
        description: 'productivity board',
        stackUsed: ['React', 'scss', 'Tailwind'],
        year: '2022'
    },
    {
        id: 13,
        name: 'Furniture Site',
        image: furniture,
        weblink: 'https://vwegba-clone.vercel.app/',
        description: 'furniture site',
        stackUsed: ['HTML', 'CSS'],
        year: '2022'
    },
]