'use client';

import { useEffect, useRef, useState } from 'react';

const CELL_SIZE = 20;
const SPEED = 75;
const INITIAL_SNAKE = [{ x: 15, y: 15 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

type SnakeEasterEggProps = {
	isRunning: boolean;
	setIsRunning: (val: boolean) => void;
};

const SnakeEasterEgg = ({ isRunning, setIsRunning }: SnakeEasterEggProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [snake, setSnake] = useState(INITIAL_SNAKE);
	const [direction, setDirection] = useState(INITIAL_DIRECTION);
	const [apple, setApple] = useState({ x: 10, y: 10 });
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [showScore, setShowScore] = useState(false);
	const [scoreVisible, setScoreVisible] = useState(false);
	const intervalRef = useRef<number | null>(null);

	const placeApple = () => {
		const maxX = Math.floor(window.innerWidth / CELL_SIZE);
		const maxY = Math.floor(window.innerHeight / CELL_SIZE);
		setApple({
			x: Math.floor(Math.random() * maxX),
			y: Math.floor(Math.random() * maxY),
		});
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowUp':
			case 'w':
				if (direction.y !== 1) setDirection({ x: 0, y: -1 });
				break;
			case 'ArrowDown':
			case 's':
				if (direction.y !== -1) setDirection({ x: 0, y: 1 });
				break;
			case 'ArrowLeft':
			case 'a':
				if (direction.x !== 1) setDirection({ x: -1, y: 0 });
				break;
			case 'ArrowRight':
			case 'd':
				if (direction.x !== -1) setDirection({ x: 1, y: 0 });
				break;
		}
	};

	useEffect(() => {
		if (!isRunning) return;

		const canvas = canvasRef.current;
		const ctx = canvas?.getContext('2d');
		if (!canvas || !ctx) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		intervalRef.current = window.setInterval(() => {
			setSnake((prevSnake) => {
				const newHead = {
					x: prevSnake[0].x + direction.x,
					y: prevSnake[0].y + direction.y,
				};

				const hitWall =
					newHead.x < 0 ||
					newHead.y < 0 ||
					newHead.x * CELL_SIZE >= window.innerWidth ||
					newHead.y * CELL_SIZE >= window.innerHeight;

				const hitSelf = prevSnake.some(
					(seg) => seg.x === newHead.x && seg.y === newHead.y
				);

				if (hitWall || hitSelf) {
					setGameOver(true);
					setShowScore(true);
					setScoreVisible(true);

					// Fade out score after 2.5s, unmount after 3s
					setTimeout(() => setScoreVisible(false), 2500);
					setTimeout(() => setShowScore(false), 3000);

					setTimeout(() => setIsRunning(false), 0); // stop game immediately
					return INITIAL_SNAKE;
				}

				const newSnake = [newHead, ...prevSnake];

				if (newHead.x === apple.x && newHead.y === apple.y) {
					setScore((s) => s + 1);
					placeApple();
				} else {
					newSnake.pop();
				}

				return newSnake;
			});
		}, SPEED);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isRunning, direction]);

	useEffect(() => {
		if (!isRunning) return;

		const canvas = canvasRef.current;
		const ctx = canvas?.getContext('2d');
		if (!canvas || !ctx) return;

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw apple
			ctx.fillStyle = 'rgba(255, 105, 180, 0.9)';
			ctx.fillRect(apple.x * CELL_SIZE, apple.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

			// Draw snake
			ctx.fillStyle = 'rgba(138, 43, 226, 0.8)';
			snake.forEach((seg) => {
				ctx.fillRect(seg.x * CELL_SIZE, seg.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
			});

			if (isRunning) requestAnimationFrame(draw);
		};

		draw();
	}, [snake, apple, isRunning]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [direction]);

	return (
		<>
			{/* Snake canvas */}
			<canvas
				ref={canvasRef}
				className={`fixed top-0 left-0 w-full h-full pointer-events-none z-50 transition-opacity duration-500 ${
					isRunning ? 'opacity-100' : 'opacity-0'
				}`}
			/>

			{/* Score HUD */}
			{showScore && (
				<div
					className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 text-lg font-semibold bg-white/80 dark:bg-black/60 text-gray-800 dark:text-white px-4 py-1 rounded shadow transition-opacity duration-500 ${
						scoreVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{gameOver ? `💀 Score: ${score}` : `Score: ${score}`}
				</div>
			)}
		</>
	);
};

export default SnakeEasterEgg;
