'use client'

import { LevelContext } from "@/app/components/ContextLevel";
import { useContext } from "react";


export default function Section({children}){
    const level = useContext(LevelContext)
    return(
        <section className="section">
            <LevelContext value={level + 1}>{/* ketika sectionnya turun 1 tingkat, maka dia akan menambahkan sesuai dengan konteks yang kita berikan */}
                {children}
            </LevelContext>
        </section>
    )
}