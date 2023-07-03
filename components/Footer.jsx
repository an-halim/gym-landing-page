import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";
import { toast, ToastContainer } from "react-nextjs-toast";

export default function Foot(props) {
	return (
		<footer className='bg-black'>
			<div className='flex flex-col sm:max-w-3xl md:max-w-4xl lg:max-w-7xl px-1 py-8 mx-3 xl:mx-auto'>
				<svg
					width='auto'
					height='16'
					viewBox='0 0 1248 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect
						x='311.972'
						y='0.964111'
						width='12'
						height='311.937'
						rx='6'
						transform='rotate(90.1771 311.972 0.964111)'
						fill='#D7FB03'
					/>
					<rect
						x='1247.94'
						y='3.92651'
						width='12'
						height='946.906'
						rx='6'
						transform='rotate(90.1771 1247.94 3.92651)'
						fill='white'
					/>
				</svg>
				<div className='grid md:grid-cols-3 lg:grid-cols-3 w-full justify-between sm:flex sm:justify-between md:flex  my-4'>
					<div className='py-4'>
						<h1 className='font-bold text-white mb-2'>START YOUR PROGRAMS</h1>
						<h2 className='text-white mb-6'>
							Sign up for the latest our program news and coupons
						</h2>
						<h3 className='mb-2 font-semibold'>EMAIL ADDRESS *</h3>
						<input
							name='email'
							type='email'
							onChange={(e) => props.setEmail(e.target.value)}
							className='border-2 border-white px-9 py-2 me-2 text-black'
							placeholder='Enter Your Email Address'
						/>
						<button
							className='bg-black px-6 py-2 border-2 border-white mb-3'
							onClick={props.handleSignUp}>
							SIGN UP
						</button>
						<div className='flex flex-col'>
							<span className='text-white text-xs truncate'>
								This site is intended for US consumers. By signing up, you
								understand and agree that
							</span>
							<span className='text-white text-xs truncate'>
								your data will be collected and used used subject to our US
								Privacy Policy and Terms of Use
							</span>
						</div>
					</div>
					<div className='py-4 text-white'>
						<h1 className='font-bold mb-2 '>COMPANY</h1>
						<div className='flex flex-col'>
							<a href='#' className='mb-2'>
								About Us
							</a>
							<a href='#' className='mb-2'>
								Expert and Spokesmodels
							</a>
						</div>
					</div>
					<div className='py-4 text-white'>
						<h1 className='font-bold mb-2'>CUSTOMER SERVICE </h1>
						<div className='flex flex-col'>
							<a href='#' className='mb-2'>
								Contact Us
							</a>
							<a href='#' className='mb-2'>
								My Account
							</a>
							<a href='#' className='mb-2'>
								Redeem Rewards
							</a>
						</div>
					</div>
				</div>
				<div className='w-full items-center'>
					<p className='text-start text-white'>* Required information</p>
					<div className='flex flex-row mt-2 text-white'>
						{/* youtube icon */}
						<IoLogoYoutube className='w-12 h-12 mx-2' />
						<IoLogoInstagram className='w-12 h-12 mx-2' />
						<IoLogoTwitter className='w-12 h-12 mx-2' />
					</div>
				</div>
			</div>
		</footer>
	);
}

export async function getServerSideProps(ctx) {
	return {
		props: {
			data: null,
		},
	};
}
