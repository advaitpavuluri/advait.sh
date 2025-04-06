'use client';

import Image from 'next/image';


import { useState } from 'react';

type Props = {
	triggerSnake: () => void;
};

const ProfileSection = ({ triggerSnake }: Props) => {

	const [showMap, setShowMap] = useState(false);

	const [copied, setCopied] = useState(false);


	const handleCopy = () => {
		navigator.clipboard.writeText('advait@advait.sh');
		setCopied(true);
		setTimeout(() => setCopied(false), 2500); // hide after 2.5s
	};

	return (
		<div className="w-full py-8 md:py-0 bg-white dark:bg-gray-900 px-6 pt-16 sm:pt-0">
			<div className="space-y-8 text-center">
				<div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
					<div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
						<Image src="/portrait.jpg" alt="Profile" fill className="object-cover" priority />
					</div>
				</div>

				<div className="space-y-3">
				<h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
						advait pavuluri
					</h1>
					<h2 className="text-lg md:text-xl text-purple-500 dark:text-purple-400">
						student @ Rensselaer Polytechnic Institute
					</h2>
					<div className="h-px w-16 bg-gray-200 dark:bg-gray-700 mx-auto my-4" />
					<p className="text-sm md:text-base text-white dark:text-white max-w-xs mx-auto leading-relaxed">
						coder ; collaborator ;{' '}
						<span
							className="cursor-pointer hover:text-purple-500 transition"
							onClick={triggerSnake}
						>
							creator
						</span>
					</p>

				</div>

				<div className="space-y-4">
					{/* Contact Info */}
					<div className="relative flex items-center justify-center space-x-2 cursor-pointer" onClick={handleCopy}>
						<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<span className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
							advait@advait.sh
						</span>

						{/* Tooltip */}
						<div
							className={`absolute top-full mt-2 text-sm text-gray-800 px-4 py-2 bg-white border border-gray-300 rounded shadow-md transition-opacity duration-300 max-w-xs ${copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
								}`}
						>
							Copied to clipboard 🎉 What, you really thought I'd forcefully open your mail app?
						</div>
					</div>



					<div className="flex flex-col items-center space-y-2">
						<div
							className="flex items-center justify-center space-x-2 cursor-pointer"
							onClick={() => setShowMap(!showMap)}
						>
							<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<span className="text-sm text-gray-600 dark:text-gray-400">New York</span>
						</div>

						{showMap && (
							<iframe
								title="RPI 15th Street Bridge Street View"
								width="100%"
								height="500"
								className="rounded-md border border-gray-300 dark:border-gray-700"
								loading="lazy"
								allowFullScreen
								referrerPolicy="no-referrer-when-downgrade"
								src="https://www.google.com/maps/embed?pb=!4v1712354026463!6m8!1m7!1sGlfeUombNybcHbtEN-Wf-Q!2m2!1d42.729129!2d-73.6777112!3f16.26!4f10!5f0.7820865974627469"
							/>
						)}
					</div>

					{/* <div className="flex items-center justify-center space-x-2">
						<svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span className="text-sm text-gray-600 dark:text-gray-400">New York</span>
					</div> */}

					{/* Social Links */}
					<div className="flex items-center justify-center space-x-4 pt-2">
						<a
							href="https://github.com/advaitpavuluri"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
						</a>
						<a
							//href="/Advait Pavuluri Résumé.pdf"
							href="/Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block mt-2 px-4 py-1.5 text-sm font-medium text-white bg-purple-600 rounded hover:bg-purple-700 transition"
						>
							résumé
						</a>
						<a
							href="https://www.linkedin.com/in/advait-pavuluri/"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileSection;
