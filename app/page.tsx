'use client';

import { useState } from 'react';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import SnakeEasterEgg from './components/SnakeEasterEgg';

export default function MinimalistPortfolio() {
	const [isRunning, setIsRunning] = useState(false);

	const triggerSnake = () => {
		console.log('Snake triggered ✅');
		setIsRunning(true);
	};

	return (
		<main className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
			{/* Snake Game */}
			<SnakeEasterEgg isRunning={isRunning} setIsRunning={setIsRunning} />

			<div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 px-4 py-6">
				{/* Left Column - Profile */}
				<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
					<ProfileSection triggerSnake={triggerSnake} />
				</div>

				{/* Right Column - Skills and Experience */}
				<div className="md:col-span-3 flex flex-col md:justify-center space-y-8">
					<div><SkillsSection /></div>
					<div><ExperienceSection /></div>
				</div>
			</div>
		</main>
	);
}
