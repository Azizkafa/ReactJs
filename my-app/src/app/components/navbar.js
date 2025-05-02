"use client"

// import {NavLink} from 'react-router-dom'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()
	const activeLink = 'text-yellow-300 underline'

	return (
		<nav className='bg-gray-800 p-4 text-white'>
			<ul className='flex space-x-4'>
				<li>
					<Link href='/' className={`${pathname == '/' ? 'text-yellow-300 underline' : ""}`}>
						Home
					</Link>
				</li>
				<li>
					<Link href='/project' className={`${pathname == '/project' ? activeLink : ""}`}>
						Projects
					</Link>
				</li>
				<li>
					<Link href='/about' className={`${pathname == '/about' ? activeLink : ""}`}>
						About
					</Link>
				</li>
				<li>
					<Link href='/contact' className={`${pathname == '/contact' ? activeLink : ""}`}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	)
}