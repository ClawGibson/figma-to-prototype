import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Sidebar } from '@/components/organisms/Sidebard';

import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Figma to Prototype',
	description: 'Figma to prototype test',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
			>
				<div className='flex min-h-screen'>
					<aside className='w-56 h-screen sticky top-0 bg-gray-50 border-r border-gray-200'>
						<Sidebar />
					</aside>

					<main className='flex-1 overflow-y-auto bg-gray-50'>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
