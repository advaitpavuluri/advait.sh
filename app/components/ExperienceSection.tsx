const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Software Engineering Intern',
			company: 'IBM',
			period: '2025.05 - 2025.08',
			highlights: 'Incoming Data for LLMs summer intern at IBM in Yorktown Heights, NY.',
		},
		{
			role: 'Data Structures Mentor',
			company: 'Rensselaer Polytechnic Institute',
			period: '2025.01 - 2025.05',
			highlights: 'Undergraduate TA for RPI’s famously hard CSCI-1200 course. I help students debug their code, understand key concepts, and grade lab and exam submissions.',
		},
		{
			role: 'Student Researcher',
			company: 'Albert Einstein College of Medicine – Chang Lab',
			period: '2022.06 - 2022.07',
			highlights: 'Conducted brain disorder research in which I used Python and MATLAB to study the correlation between human dietary intake and neurological disorders.',
		},
		{
			role: 'Programmer',
			company: 'Harvard University Division of Medical Sciences – Pinello Lab',
			period: '2021.06 - 2022.06',
			highlights: 'Developed a visualization library to visualize the organismal development of single cell epigenomics through AI prediction models.',
		},
		// {
		// 	role: 'Code Next Engineer',
		// 	company: 'Google',
		// 	period: '2020.09 - 2021.06',
		// 	highlights: 'Created ML-involving projects using Raspberry Pi, C# video game prototypes (showcased during the end-of-year Code Next event), music in Python using EarSketch, and undertook various other coding ventures with the guidance of engineers at the Google Creative Lab in Chelsea, NY.',
		// },
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">🧠 experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
