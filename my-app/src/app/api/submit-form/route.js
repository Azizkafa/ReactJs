import path from 'path'
import {promises as fs} from 'fs'

export async function POST(req) {
	try {
		const formData = await req.formData()
		const name = formData.get('name')
		const email = formData.get('email')
		const selectedOption = formData.get('selectedOption')
		const file = formData.get('file')

		if (!name || !email) {
			return new Response(JSON.stringify({message: "Name and email is required"}), {
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}

		if (file.size > 5000000) { //5MB Limit
			return new Response(JSON.stringify({message: "File is exceed 5MB limit"}), {
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}

		const buffer = await file.arrayBuffer()
		const bytes = new Uint8Array(buffer)
		const uploadDir = path.join(process.cwd(), 'public', 'uploads')
		const filePath = path.join(uploadDir, file.name)

		try {
			await fs.writeFile(filePath, Buffer.from(bytes))
		} catch (errorFile) {
			console.error('Error writing file', errorFile)
			return new Response(JSON.stringify({message: "Error writing file to disk"}), {
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}

		console.log('Received form data:', {name, email, selectedOption, filename: file.name, filepath: filePath})
		console.log('File save to', filePath)

		return new Response(JSON.stringify({message: "Form Submitted successfully! and file is saved"}), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	} catch (error) {
		console.error('Error processing form submissin', error)
		return new Response(JSON.stringify({message: "Internal Server Error"}), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}