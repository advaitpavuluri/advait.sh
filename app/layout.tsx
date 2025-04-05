import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Advait Pavuluri',
	description: "Advait's developer portfolio.",
	keywords: ['Software Developer', 'Backend Development', 'Advait Pavuluri'],
	authors: [{ name: 'Advait Pavuluri' }],
	creator: 'Advait Pavuluri',
	openGraph: {
		title: 'Advait Pavuluri - Developer Portfolio',
		description: "Advait's developer portfolio.",
		url: 'https://advait.sh',
		siteName: 'Advait Pavuluri',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Advait Pavuluri - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
