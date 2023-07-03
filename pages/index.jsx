var $ = require("jquery");
if (typeof window !== "undefined") {
	window.$ = window.jQuery = require("jquery");
}

import { useState } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import gepeng from "../assets/images/avatar-1.svg";
import khalim from "../assets/images/avatar-2.svg";
import ucupia from "../assets/images/avatar-3.svg";
import yoga from "../assets/images/yoga.png";
import trainerOne from "../assets/images/trainer-1.png";
import trainerTwo from "../assets/images/trainer-2.png";
import { toast, ToastContainer } from "react-nextjs-toast";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});

export default function Home() {
	const [email, setEmail] = useState("");

	function handleSignUp(e) {
		e.preventDefault();
		fetch("/api/signup", {
			method: "POST",
			body: JSON.stringify({ email }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				document.querySelector("input[name=email]").value = "";
				toast.notify("Thanks for join us!", {
					title: "Success",
					type: "success",
					duration: 5,
					sticky: false,
				});
			});
	}
	return (
		<>
			<Head>
				<title>ALIV GYM - Your Fitness Journey Starts Here</title>
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
				{/* add google analitycs */}

				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-RC2CES8BLP'></script>

				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-RC2CES8BLP');`,
					}}
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='ALIVgym is a premier fitness and wellness center offering a wide range of services, including personal training, group classes, and nutritional guidance. Get fit and stay healthy with ALIVgym.'
				/>
				<meta
					name='keywords'
					content='ALIVgym, fitness, wellness center, personal training, group classes, nutrition, health'
				/>
				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow' />
				<meta
					property='og:title'
					content='ALIVgym - Fitness and Wellness Center'
				/>
				<meta
					property='og:description'
					content='ALIVgym is a premier fitness and wellness center offering a wide range of services, including personal training, group classes, and nutritional guidance. Get fit and stay healthy with ALIVgym.'
				/>
				<meta
					property='og:image'
					content='https://www.alivgym.xyz/favicon.ico'
				/>
				<meta property='og:url' content='https://www.alivgym.xyz/' />
				<link rel='canonical' href='https://www.alivgym.xyz/' />

				<meta
					property='og:title'
					content='ALIVGym - Your Fitness Journey Starts Here'
				/>
				<meta
					property='og:description'
					content='ALIVGym offers a wide range of fitness programs and state-of-the-art facilities to help you achieve your fitness goals. Join us today and start your fitness journey!'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='ALIVGym - Your Fitness Journey Starts Here'
				/>
				<meta
					name='twitter:description'
					content='ALIVGym offers a wide range of fitness programs and state-of-the-art facilities to help you achieve your fitness goals. Join us today and start your fitness journey!'
				/>
				<meta
					name='twitter:image'
					content='https://www.alivgym.xyz/favicon.ico'
				/>
			</Head>

			<Navbar />
			<ToastContainer />
			<main className='sm:overflow-x-hidden bg-black'>
				<div className="h-screen bg-[url('../assets/images/person.png')] bg-no-repeat bg-right">
					<div className='py-4 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl'>
						<div className='sm:order-last md:order-last xl:order-first my-16'>
							<div className='flex flex-col justify-left items-left'>
								<h1 className='text-2xl xl:text-4xl mx-6 xl:mx-0 font-bold text-[#d7fb03] '>
									WELCOME TO THE
								</h1>
								<h1 className='text-6xl xl:text-8xl font-bold mb-3 mx-6 xl:mx-0 text-white'>
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
					<h1 className='text-4xl xl:text-6xl font-bold tracking-tighter mb-3 text-center my-16 text-white'>
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
							<p className='text-2xl xl:text-4xl text-center font-normal tracking-tighter ms-4 mb-3 text-white text-clip'>
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
						<div className='flex flex-col items-center' id='testimonials'>
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
				<div className='h-full py-4 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl'>
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
							className='text-4xl xl:text-6xl  font-bold tracking-tighter mb-3 text-start my-16 text-white'
							id='program'>
							OUR PROGRAMS
						</h1>
					</div>
					<p className='text-2xl xl:text-4xl font-normal tracking-tighter ms-4 mb-3 text-clip mt-5 text-white'>
						So why wait? Start your fitness journey today by signing up for our
						gym membership. With our PAS-based approach, you'll find the
						problem, agitate it, and offer the perfect solution. Don't let your
						health suffer any longer - take control and start achieving your
						fitness goals now!
					</p>
					{/* card carousel */}
					<OwlCarousel
						className='owl-theme'
						loop
						margin={10}
						nav
						responsive={{
							0: {
								items: 1.5,
							},
							600: {
								items: 2.5,
							},
							1000: {
								items: 3,
							},
						}}>
						<div className='item'>
							<Image
								src={yoga}
								alt='Picture of the author'
								width={50}
								height={60}
								className='rounded mt-8'
							/>
							<h2 className='text-2xl xl:text-4xl font-bold tracking-tighter mb-3 text-start text-white'>
								YOGA
							</h2>
							<p className='text-clip text-white'>
								workout led try our world-class trainers.
							</p>
						</div>
						<div className='item'>
							<Image
								src={trainerOne}
								alt='Picture of the author'
								width={100}
								className='rounded mt-8'
							/>

							<h2 className='text-2xl xl:text-4xl font-bold tracking-tighter mb-3 text-start text-white'>
								STRENGTH TRAINING
							</h2>
							<p className='text-clip text-white'>
								workout led try our world-class trainers.
							</p>
						</div>
						<div className='item'>
							<Image
								src={trainerTwo}
								alt='Picture of the author'
								width={100}
								className='rounded mt-8'
							/>

							<h2 className='text-2xl xl:text-4xl font-bold tracking-tighter mb-3 text-start text-white'>
								STRENGTH TRAINING
							</h2>
							<p className='text-clip text-white'>
								workout led try our world-class trainers.
							</p>
						</div>
						<div className='item'>
							<Image
								src={yoga}
								alt='Picture of the author'
								width={50}
								height={60}
								className='rounded mt-8'
							/>

							<h2 className='text-2xl xl:text-4xl font-bold tracking-tighter mb-3 text-start text-white'>
								YOGA
							</h2>
							<p className='text-clip text-white'>
								workout led try our world-class trainers.
							</p>
						</div>
					</OwlCarousel>
				</div>
			</main>

			<Footer email={email} handleSignUp={handleSignUp} setEmail={setEmail} />
		</>
	);
}
