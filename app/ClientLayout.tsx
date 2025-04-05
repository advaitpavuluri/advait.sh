'use client';

import { useState } from 'react';
import SnakeEasterEgg from './components/SnakeEasterEgg';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const [isRunning, setIsRunning] = useState(false);

	const triggerSnake = () => {
		setIsRunning(true);
	};

	return (
		<>
			<SnakeEasterEgg isRunning={isRunning} setIsRunning={setIsRunning} />
			{children}
		</>
	);
}
