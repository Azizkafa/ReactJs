"use client"

// import {NavLink} from 'react-router-dom'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function AboutNav() {
	const pathname = usePathname()
	const activeLink = 'text-yellow-300 underline'

	return (
		<aside className='w-64 bg-gray-200 p-4'>
            <h2 className='text-lg font-semibold mb-4'>About Section</h2>
            <nav>
                <ul>
                    <li className='mb-2'>
                        <Link href='/about/me' className={`${pathname === '/about/me' ? activeLink : ""} block py-1 px-2 rounded hover:bg-gray-300`}>About Me</Link>
                    </li>
                    <li className='mb-2'>
                        <Link href='/about/background' className={`${pathname === '/about/background' ? activeLink : ""} block py-1 px-2 rounded hover:bg-gray-300`}>Background</Link>
                    </li>
                    <li className='mb-2'>
                        <Link href='/about/techstack' className={`${pathname === '/about/   techstack' ? activeLink : ""} block py-1 px-2 rounded hover:bg-gray-300`}>Tech Stack</Link>
                    </li>
                    <li className='mb-2'>
                        <Link href='/about/experience' className={`${pathname === '/about/experience' ? activeLink : ""} block py-1 px-2 rounded hover:bg-gray-300`}>Experience</Link>
                    </li>
                </ul>
            </nav>
        </aside>
	)
}