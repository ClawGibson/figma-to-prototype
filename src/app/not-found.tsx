import React from 'react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className='w-full min-h-screen p-8 bg-white justify-center items-center flex flex-col'>
			<h1 className='text-3xl font-bold mb-6 text-red-800 text-left'>
				Page Not Found
			</h1>
			<p className='text-gray-600'>
				The page you are looking for does not exist.
			</p>
			<Link href='/' className='mt-4 text-blue-600 hover:underline'>
				Go back to Home
			</Link>
		</main>
	);
}
