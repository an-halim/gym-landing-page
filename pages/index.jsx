import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import gepeng from "../assets/images/avatar-1.svg";
import khalim from "../assets/images/avatar-2.svg";
import ucupia from "../assets/images/avatar-3.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js + Tailwind CSS</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='preload'
					href='/fonts/Inter-roman.var.woff2?v=3.19'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/Inter-italic.var.woff2?v=3.19'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/Inter-roman.var.woff2?v=3.19'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
			</Head>

			<Navbar />
			<main className="sm:overflow-x-hidden">
				<div className="h-screen bg-[url('../assets/images/person.png')] bg-no-repeat bg-right">
					<div className='py-4 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl'>
						<div className='sm:order-last md:order-last xl:order-first my-16'>
							<div className='flex flex-col justify-left items-left'>
								<h1 className='text-2xl xl:text-4xl mx-6 xl:mx-0 font-bold text-[#d7fb03] '>
									WELCOME TO THE
								</h1>
								<h1 className='text-6xl xl:text-8xl font-bold mb-3 mx-6 xl:mx-0'>
									<span className='line'>MOST WANTED</span> <br />
									ONLINE PERSONAL <br />
									TRAINER
								</h1>
							</div>
							<button
								onClick={() => {
									document
										.getElementById("program")
										.scrollIntoView({ behavior: "smooth" });
								}}
								class='h-12 px-6 m-2 mx-6 xl:mx-0 text-lg font-bold text-black transition-colors duration-150 bg-[#d7fb03] rounded-full focus:shadow-outline hover:bg-[#a7c406]'>
								JOIN NOW
							</button>
						</div>
					</div>
					<div className='bg-[#d7fb03] h-16 absolute inset-x-0 bottom-0 w-full'>
						<div className='whitespace-nowrap py-2'>
							<span className='text-4xl font-bold tracking-tighter me-3 text-black py-5'>
								BEGINNERS FRIENDLY - LIVE CONSULTATION - TRAINER - 24/7 SUPPORT
								- BEGINNERS FRIENDLY
							</span>
						</div>
					</div>
				</div>
				<div className='sm:h-full md:h-full xl:h-screen  py-4 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl'>
					<h1 className='text-4xl xl:text-6xl font-bold tracking-tighter mb-3 text-center my-16'>
						FITNESS AND HEALTH
					</h1>
					<div className='flex flex-row mx-6 xl:mx-0'>
						{/* vertical line */}
						<div className='flex flex-col items-center justify-center'>
							<div className='w-4 h-24 bg-[#d7fb03]'></div>
							<div className='w-4 h-24 bg-[#d7fb03]'></div>
							<div className='w-4 h-24 bg-[#d7fb03]'></div>
							<div className='w-4 h-24 bg-[#d7fb03]'></div>
							<div className='w-4 h-24 bg-[#d7fb03]'></div>
						</div>
						<div className='flex flex-col items-center justify-center'>
							<p className='text-2xl xl:text-4xl text-center font-normal tracking-tighter ms-4 mb-3 text-clip'>
								Our gym offers a comprehensive range of fitness programs and
								resources to help you achieve your health goals. From weight
								training and cardio to yoga and group fitness classes, we have
								everything you need to get in shape and feel great. Our expert
								trainers and friendly community will support you every step of
								the way, ensuring that you stay motivated and on track.
							</p>
							<button class='text-start h-12 px-6 m-2 text-lg font-bold text-black transition-colors duration-150 bg-[#d7fb03] rounded-full focus:shadow-outline hover:bg-[#a7c406]'>
								START YOUR PROGRESS
							</button>
						</div>
					</div>
				</div>

				<div className='sm:h-full md:h-full xl:h-screen grid xl:grid-cols-3 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl	justify-center py-16'>
					<div className='h-2/3 w-96 bg-white rounded shadow-2xl'>
						<div className='flex flex-col items-center'>
							{/* avatar */}
							<Image
								src={gepeng}
								alt='Picture of the author'
								width={100}
								className='h-20 w-20 rounded-full mt-8'
							/>
							{/* testimonial */}
							<p className='text-center font-normal mx-6 mb-3 text-clip text-black break-all'>
								I absolutely love going to this gym! The staff is friendly, the
								equipment is great, and the atmosphere is always positive. Since
								I started coming here, I've noticed a significant improvement in
								my strength and endurance. I'm so glad I found this fitness
								center and would recommend it to anyone looking for a great
								place to work out.
							</p>
							<h1 className='text-1xl  tracking-tighter mb-3  mt-4 text-black text-start'>
								Gepeng Phentol
								<span className='text-1xl  tracking-tighter mb-3  mt-8 text-black'>
									<br />
									Supplier
								</span>
							</h1>
						</div>
					</div>
					<div className='h-2/3 w-96 bg-white rounded shadow-2xl'>
						<div className='flex flex-col items-center'>
							{/* avatar */}
							<Image
								src={khalim}
								alt='Picture of the author'
								width={100}
								className='h-20 w-20 rounded-full  mt-8'
							/>
							{/* testimonial */}
							<p className='text-center font-normal mx-6 mb-3 text-clip text-black break-all'>
								I recently joined this gym, and I'm already blown away by the
								results I'm seeing. The staff is friendly and welcoming, and the
								trainers are incredibly skilled and attentive. I love the range
								of equipment they have, and the classes are challenging but fun.
								What's more, I've made some great friends here who motivate me
								to keep pushing myself.
							</p>
							<h1 className='text-1xl  tracking-tighter mb-3  mt-4 text-black text-start'>
								Khalim
								<span className='text-1xl  tracking-tighter mb-3  mt-8 text-black'>
									<br />
									Gultik Seller
								</span>
							</h1>
						</div>
					</div>
					<div className='h-2/3 w-96 bg-white rounded shadow-2xl'>
						<div className='flex flex-col items-center'>
							{/* avatar */}
							<Image
								src={ucupia}
								alt='Picture of the author'
								width={100}
								className='h-20 w-20 rounded-full mt-8'
							/>
							{/* testimonial */}
							<p className='text-center font-normal mx-6 mb-3 text-clip text-black break-all'>
								I used to hate going to the gym, but this place has completely
								changed my mind. The atmosphere is friendly and non-judgmental,
								and the staff always make me feel welcome. I love the variety of
								classes they offer, especially the dance-based ones that make me
								forget I'm even working out.
							</p>
							<h1 className='text-1xl  tracking-tighter mb-3  mt-4 text-black text-start'>
								Ucupia
								<span className='text-1xl  tracking-tighter mb-3  mt-8 text-black'>
									<br />
									Rain Handler
								</span>
							</h1>
						</div>
					</div>
				</div>
				<div className='h-screen py-4 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl'>
					{/* testimonial cards */}
					<div className='flex flex-row mx-6 xl:mx-0'>
						<div className='flex flex-row items-end me-4'>
							<svg
								className='w-16 h-62 xl:w-24'
								viewBox='0 0 97 62'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M7.8 61.2H0.1L13.26 0.299996H20.96L7.8 61.2ZM32.8879 61.2H25.1879L38.3479 0.299996H46.0479L32.8879 61.2ZM57.9758 61.2H50.2758L63.4358 0.299996H71.1358L57.9758 61.2ZM83.0637 61.2H75.3637L88.5237 0.299996H96.2237L83.0637 61.2Z'
									fill='#D7FB03'
								/>
							</svg>
						</div>
						<h1
							className='text-4xl xl:text-6xl  font-bold tracking-tighter mb-3 text-start my-16'
							id='program'>
							OUR PROGRAMS
						</h1>
					</div>
					<p className='text-2xl xl:text-4xl font-normal tracking-tighter ms-4 mb-3 text-clip mt-5'>
						So why wait? Start your fitness journey today by signing up for our
						gym membership. With our PAS-based approach, you'll find the
						problem, agitate it, and offer the perfect solution. Don't let your
						health suffer any longer - take control and start achieving your
						fitness goals now!
					</p>

					{/* card carousel */}
				</div>
			</main>

			<Footer />
		</>
	);
}
