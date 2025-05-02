"use client"

import { BrowserRouter } from "react-router-dom";

export default function WrapperRouter({children}) {
	return (
		<BrowserRouter>
		{children}
		</BrowserRouter>
	)
}