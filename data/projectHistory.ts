
export interface ProjectsInfo {
    id: number,
    name: string,
    image: string,
    weblink: string,
    description: string,
    stackUsed: string[],
    year: string
}

export const projects: ProjectsInfo[] = [
    {
        id: 1,
        name: 'Storipod',
        image: '',
        weblink: 'https://web.storipod.app/auth',
        description: '',
        stackUsed: ['Vue', 'Nuxt', 'Tailwind', 'Typescript', 'Firebase', 'Docker' ],
        year: '2025'
    },
    {
        id: 2,
        name: 'Issue Tracker',
        image: '',
        weblink: 'https://new-issue-tracker-eight.vercel.app/',
        description: '',
        stackUsed: ['Next', 'Typescript', 'Prisma', 'Tailwind', 'Xata'],
        year: '2024'
    },
    {
        id: 3,
        name: 'Vue Job Site',
        image: '',
        weblink: 'https://jobs-site-phi.vercel.app/',
        description: '',
        stackUsed: ['Vue', 'Nuxt', 'Tailwind'],
        year: '2025'
    },
    {
        id: 4,
        name: 'Crime App',
        image: '',
        weblink: 'https://github.com/lolade-ilori/CrimeApp',
        description: 'github',
        stackUsed: ['Kotlin', 'Retrofit'],
        year: '2024'
    },
    {
        id: 5,
        name: 'Escrow Dashboard',
        image: '',
        weblink: 'https://escrow-transaction-dashboard.vercel.app/',
        description: '',
        stackUsed: ['Next', 'Tailwind', 'Shadcn Ui'],
        year: '2025'
    },
    {
        id: 6,
        name: 'Prolific',
        image: '',
        weblink: 'https://prolific.chat/',
        description: '',
        stackUsed: ['React', 'Typescript', 'Styled Components', 'Redux'],
        year: '2023'
    },
    {
        id: 7,
        name: 'Periculum',
        image: '',
        weblink: 'https://www.periculum.io/',
        description: '',
        stackUsed: ['Webflow', 'Javascript'],
        year: '2023'
    },
    {
        id: 8,
        name: 'Roadlers',
        image: '',
        weblink: 'https://roadlers.com/',
        description: '',
        stackUsed: ['React', 'Typescript', 'Styled Components', 'Redux'],
        year: '2023'
    },
    {
        id: 9,
        name: 'Interax',
        image: '',
        weblink: 'https://interax-web-test.vercel.app/',
        description: '',
        stackUsed: ['Next', 'Typescript', 'Styled Components', 'Contentful'],
        year: '2023'
    },
    {
        id: 10,
        name: 'Movie Dashboard',
        image: '',
        weblink: 'https://movie-dashboard-tan.vercel.app/',
        description: '',
        stackUsed: ['React', 'Javascript', 'scss', 'Context API'],
        year: '2022'
    },
    {
        id: 11,
        name: 'Github Finder',
        image: '',
        weblink: 'https://github-finder-clone1.vercel.app/',
        description: '',
        stackUsed: ['Javascript', 'Tailwind', 'Context API'],
        year: '2022'
    },
    {
        id: 12,
        name: 'Productivity Dashboard',
        image: '',
        weblink: 'https://productivity-dashboard.vercel.app/#',
        description: '',
        stackUsed: ['React', 'scss', 'Tailwind'],
        year: '2022'
    },
    {
        id: 13,
        name: 'Furniture Site',
        image: '',
        weblink: 'https://vwegba-clone.vercel.app/',
        description: '',
        stackUsed: ['HTML', 'CSS'],
        year: '2022'
    },
]