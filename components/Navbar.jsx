import React, { useState } from "react";
import Image from "next/image";

import logo from "../assets/images/logo.svg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-black'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<div className='flex-shrink-0 mt-12'>
							<Image
								className='sm:h-4 sm:w-4 md:h-8 md:w-8 xl:h-32 xl:w-32'
								src={logo}
								alt='Workflow'
							/>
						</div>
					</div>
					<div className='hidden md:block mt-12'>
						<div className='ml-4 flex items-center space-x-4'>
							<a
								onClick={() => {
									document
										.getElementById("testimonial")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
								TESTIMONIALS
							</a>
							<a
								onClick={() => {
									document
										.getElementById("program")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
								PROGRAMS
							</a>
							<a
								onClick={() => {
									document
										.getElementById("faq")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
								FAQ
							</a>
							<a
								onClick={() => {
									document
										.getElementById("contact")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
								CONTACT
							</a>
							<button
								onClick={() => {
									document
										.getElementById("program")
										.scrollIntoView({ behavior: "smooth" });
								}}
								class='h-12 px-6 m-2 text-lg font-bold text-black transition-colors duration-150 bg-[#d7fb03] rounded-full focus:shadow-outline hover:bg-[#a7c406]'>
								START YOUR PROGRESS
							</button>
						</div>
					</div>
					<div className='-mr-2 flex md:hidden'>
						<button
							onClick={toggleNavbar}
							className='text-gray-300 hover:text-white px-2 py-2 rounded-md text-sm font-medium'>
							{isOpen ? (
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='md:hidden'>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
						<a
							href='#'
							className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							TESTIMONIALS
						</a>
						<a
							href='#'
							className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							PROGRAMS
						</a>
						<a
							href='#'
							className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							FAQ
						</a>
						<a
							href='#'
							className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
							CONTACT
						</a>
						<button
							onClick={() => {
								document
									.getElementById("program")
									.scrollIntoView({ behavior: "smooth" });
							}}
							class='h-12 px-6 m-2 text-lg font-bold text-black transition-colors duration-150 bg-[#d7fb03] rounded-full focus:shadow-outline hover:bg-[#a7c406]'>
							JOIN NOW
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
