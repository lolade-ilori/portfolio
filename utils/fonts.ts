import localFont from "next/font/local";

export const FaroLight = localFont({ 
    src: '../public/fonts/Faro-LightLucky.woff', 
    weight: '300', 
    variable: '--font-faro-light',
    display: 'swap'
})

export const FaroRegular = localFont({ 
    src: '../public/fonts/Faro-RegularLucky.woff', 
    weight: '500', 
    variable: '--font-faro-regular',
    display: 'swap'
})

export const FaroBold = localFont({ 
    src: '../public/fonts/Faro-DisplayLucky.woff', 
    weight: '700', 
    variable: '--font-faro-local',
    display: 'swap'
})