import {
	ChevronDown,
	HelpCircle,
	MessageSquareMore,
	SearchIcon,
} from "lucide-react";
import Tab from "./components/Tab";
import { Icons } from "./utils/Icons";
import InfoCard from "./components/InfoCard";

function App() {
	return (
		<div className='min-h-screen flex'>
			<section className='basis-[224px] bg-navbar min-h-full text-white px-2 py-6 flex flex-col gap-4'>
				<div className='px-2 flex gap-3 h-[42px] mb-10'>
					<div className='w-[39px] py-[1px] relative'>
						<img
							src='/public/Image.png'
							alt='Nishyan'
							className='absolute h-full w-full'
						/>
					</div>
					<div className='flex flex-col justify-between flex-1'>
						<h6 className='text-[15px] font-medium'>Nishyan</h6>
						<a href='#' className='text-[13px] underline'>
							Visit store
						</a>
					</div>
					<div className='self-center '>
						<ChevronDown strokeWidth={2.5} />
					</div>
				</div>
				<div className='flex-1 mb-10'>
					<Tab name='home' />
					<Tab name='orders' />
					<Tab name='products' />
					<Tab name='delivery' />
					<Tab name='marketing' />
					<Tab name='analytics' />
					<Tab name='payments' />
					<Tab name='tools' />
					<Tab name='discounts' />
					<Tab name='audience' />
					<Tab name='appearance' />
					<Tab name='plugins' />
				</div>
				<div className='mx-2 bg-navbarAccent px-3 py-[8px] gap-3 flex items-center rounded-md '>
					<div className='h-9 w-9 bg-whiteTenLightness rounded-md flex items-center justify-center'>
						{Icons["wallet"].icon}
					</div>
					<div>
						<p className='text-subBody text-white'>
							Available credits
						</p>
						<p className='text-subTitle font-medium'>222.10</p>
					</div>
				</div>
			</section>
			<section className='px-8 w-full'>
				<header className='flex justify-evenly items-center gap-4 py-3 h-16 border-b'>
					<div className='flex items-center flex-1'>
						<h5 className='text-blackFifty text-body mr-4'>
							Payments
						</h5>
						<p className='flex gap-[6px] items-center'>
							<HelpCircle
								color='#4D4D4D'
								width={12}
								height={12}
							/>{" "}
							<span className='text-caption text-blackFifty'>
								How it works
							</span>
						</p>
					</div>
					<div className='relative flex-1'>
						<input
							className='h-10 w-full rounded-md px-10 py-[9px] gap-2 relative placeholder:text-grayFifty text-body leading-[22px]'
							placeholder='Search features, tutorials, etc.'
						/>
						<SearchIcon
							color='#808080'
							width={16}
							height={16}
							className='absolute top-[13px] left-4'
						/>
					</div>
					<div className='flex-1 justify-end gap-3 flex'>
						<div className='h-10 w-10 bg-blackNinety rounded-full flex items-center justify-center'>
							<MessageSquareMore width={20} height={20} />
						</div>
						<div className='h-10 w-10 bg-blackNinety rounded-full flex items-center justify-center'>
							<ChevronDown width={20} height={13} />
						</div>
					</div>
				</header>
				<div className='py-9 flex items-center mb-6'>
					<h2 className='font-medium text-headingTwo mr-auto'>
						Overview
					</h2>
					<select name='date' id='date'>
						<option value='Last-Month'>Last Month</option>
						<option value='Last-Year'>Last Year</option>
						<option value='Last-Week'>Last Week</option>
					</select>
				</div>
				<div className='flex gap-5 mb-8'>
					<InfoCard title='Online orders' info='231' />
					<InfoCard title='Amount received' info='₹23,92,312.19' />
				</div>
				<div>
					<h2 className='text-headingTwo font-medium'>
						Transactions | This Month
					</h2>
				</div>
			</section>
		</div>
	);
}

export default App;
