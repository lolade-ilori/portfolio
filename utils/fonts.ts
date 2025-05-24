import localFont from "next/font/local";

export const FaroLight = localFont({ 
    src: '../public/fonts/Farro/Farro-Light.ttf', 
    weight: '300', 
    variable: '--font-faro-light',
    display: 'swap'
})

export const FaroRegular = localFont({ 
    src: '../public/fonts/Farro/Farro-Regular.ttf', 
    weight: '400', 
    variable: '--font-faro-regular',
    display: 'swap'
})

export const FaroBold = localFont({ 
    src: '../public/fonts/Cantora_One/CantoraOne-Regular.ttf', 
    weight: '800', 
    variable: '--font-faro-local',
    display: 'swap'
})

export const FaroSemiBold = localFont({ 
    src: '../public/fonts/Farro/Farro-Medium.ttf', 
    weight: '600', 
    variable: '--font-faro-semibold',
    display: 'swap'
})