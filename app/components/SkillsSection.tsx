import {
	CodeBracketIcon,
	AcademicCapIcon,
	WrenchScrewdriverIcon,
	PuzzlePieceIcon
} from '@heroicons/react/24/outline';

const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages',
			items: ['Java', 'Python', 'C', 'C++', 'LaTeX'],
			icon: <CodeBracketIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />,
		},
		{
			category: 'Concepts',
			items: ['Data Structures', 'Algorithms', 'Linear Algebra'],
			icon: <AcademicCapIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />,
		},
		{
			category: 'Software',
			items: ['IntelliJ IDEA', 'PyCharm', 'CLion', 'VS Code', 'Jupyter Notebook', 'Adobe Creative Cloud'],
			icon: <WrenchScrewdriverIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />,
		},
		{
			category: 'Misc',
			items: ['Video Editing', 'Graphic Design', 'Typing (160 WPM)', 'Mentoring'],
			icon: <PuzzlePieceIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />,
		}
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">🎯 skills</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<div className="flex items-center space-x-2 mb-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">{skillGroup.category}</h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
