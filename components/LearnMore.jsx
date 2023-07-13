import React from 'react';
import Image from 'next/image';

const LearnMore = () => {
	const stats = [
		{ id: 1, name: 'Fast support team response', value: '24/7' },
		{ id: 2, name: 'Free to use for all users', value: '$Free' },
		{ id: 3, name: 'Fast and Efficient Results', value: '1ms' },
	];
	return (
		<section
			id="learnMore"
			className="my-80"
		>
			<div className="my-40 ">
				<h2 className="head_text text-center p-10">
					How to Utilize <span className="blue_gradient">Study Me</span>
				</h2>
				<div className="flex flex-col gap-4 p-4">
					<div className="flex items-start p-3 md:p-4 blue_btn rounded-lg hover:shadow-xl cursor-pointer transition ease-in-out">
						<div className="hidden md:flex w-8 h-8 md:w-10 md:h-10 bg-white rounded-full items-center justify-center text-blue-500 font-bold text-xl md:text-2xl shadow-md">1</div>
						<div className="ml-4">
							<h3 className="text-lg font-semibold mb-2 text-white">Step 1</h3>
							<p className="text-sm text-white">Fill out the prompt form. Be sure to provide accurate information for the best results!</p>
						</div>
					</div>
					<div className="flex items-start p-3 md:p-4 blue_btn rounded-lg hover:shadow-xl cursor-pointer transition ease-in-out">
						<div className="hidden md:flex w-8 h-8 md:w-10 md:h-10 bg-white rounded-full items-center justify-center text-blue-500 font-bold text-xl md:text-2xl shadow-md">2</div>
						<div className="ml-4">
							<h3 className="text-lg font-semibold mb-2 text-white">Step 2</h3>
							<p className="text-sm text-white">Hit the submit button and wait for the questions to be generated. This process can take some time based on the number of questions you request.</p>
						</div>
					</div>
					<div className="flex items-start p-3 md:p-4 blue_btn rounded-lg hover:shadow-xl cursor-pointer transition ease-in-out">
						<div className="hidden md:flex w-8 h-8 md:w-10 md:h-10 bg-white rounded-full items-center justify-center text-blue-500 font-bold text-xl md:text-2xl shadow-md">3</div>
						<div className="ml-4">
							<h3 className="text-lg font-semibold mb-2 text-white">Step 3</h3>
							<p className="text-sm text-white">Ace your exams! Once the questions have loaded, you can start studying and ace your exams!</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className="head_text text-center p-10">
					Trusted and <span className="red_gradient">Loved</span> By Many
				</h2>
			</div>
			<div className="bg-transparent py-24 sm:py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						{stats.map((stat) => (
							<div
								key={stat.id}
								className="mx-auto flex max-w-xs flex-col gap-y-4"
							>
								<dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{stat.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			<div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
						<Image
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>
						<Image
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
							alt="Reform"
							width={158}
							height={48}
						/>
						<Image
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
							alt="Tuple"
							width={158}
							height={48}
						/>
						<Image
							className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
						<Image
							className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
							alt="Statamic"
							width={158}
							height={48}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LearnMore;
