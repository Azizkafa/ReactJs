'use client'

import AboutNav from "../components/aboutNav"

export default function AboutLayout({children}){
    return(
        <div className="flex h-screen bg-gray-100">
            <AboutNav />
            <main className="flex-1 p-4 ">
                {children}
            </main>{/* isi dari about-about yang dirender disini */}
        </div>
    )
}