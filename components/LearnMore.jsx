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
			<div>
				<h2 className="head_text text-center p-10">Trusted and Loved By Many</h2>
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
