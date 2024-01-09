import {
	ArrowDownUp,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Download,
	HelpCircle,
	Info,
	MessageSquareMore,
	MoveDown,
	SearchIcon,
} from "lucide-react";
import Tab from "./components/Tab";
import { Icons } from "./utils/Icons";
import InfoCard from "./components/InfoCard";
import Button from "./components/Button";

function App() {
	return (
		<div className='min-h-screen flex'>
			<section className='basis-[224px] overflow-y-clip bg-navbar min-h-full text-white px-2 py-6  flex-col gap-4 hidden md:flex'>
				<div className='px-2 flex gap-3 h-[42px] mb-2'>
					<div className='w-[39px] py-[1px] relative'>
						<img
							src='/public/Image.png'
							alt='Nishyan'
							className='absolute h-full w-full'
						/>
					</div>
					<div className='flex flex-col justify-between flex-1'>
						<h6 className='text-[15px] font-medium'>Nishyan</h6>
						<a
							href='#'
							className='text-[12px] lg:text-[13px] underline'>
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
						<p className='text-caption lg:text-subBody text-white'>
							Available credits
						</p>
						<p className='text-subTitle font-medium'>222.10</p>
					</div>
				</div>
			</section>
			<section className='px-2 md:px-8 w-full overflow-y-scroll'>
				<header className='flex justify-evenly items-center gap-4 py-3 h-16 border-b'>
					<div className='flex flex-col lg:flex-row lg:items-center flex-1'>
						<h5 className='text-blackFifty text-body mr-4'>
							Payments
						</h5>
						<p className='flex gap-1 md:gap-[6px] items-center'>
							<HelpCircle
								color='#4D4D4D'
								width={12}
								height={12}
							/>{" "}
							<span className='text-[9px] sm:text-[11px] lg:text-caption text-blackFifty'>
								How it works
							</span>
						</p>
					</div>
					<div className='relative flex-auto lg:flex-1'>
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
					<div className='relative inline-block'>
						<select
							name='date'
							id='date'
							className='block appearance-none rounded-sm w-[137px] pl-3.5 pr-1 py-1.5 outline outline-1 outline-blackEightFive text-md'>
							<option value='Last-Month' className='outline-none'>
								Last Month
							</option>
							<option value='Last-Year'>Last Year</option>
							<option value='Last-Week'>Last Week</option>
						</select>
						<ChevronDown
							className='pointer-events-none absolute inset-y-0 right-1 top-1.5 flex items-center mr-2'
							color='#4D4D4D'
						/>
					</div>
				</div>
				<div className='flex flex-col sm:flex-row gap-5 mb-8'>
					<InfoCard title='Online orders' info='231' />
					<InfoCard title='Amount received' info='₹23,92,312.19' />
				</div>
				<div className='flex flex-col'>
					<h2 className='text-headingTwo font-medium mb-5'>
						Transactions | This Month
					</h2>
					<div className='p-3 pb-6 mb-3'>
						<div className='flex md:items-center mb-3 flex-col sm:flex-row gap-2'>
							<div className='relative max-w-[248px] mr-auto '>
								<input
									className='h-10 border-2 rounded-sm px-10 py-[9px] gap-2 relative placeholder:text-grayFifty text-body leading-[22px]'
									placeholder='Search by order ID...'
								/>
								<SearchIcon
									color='#808080'
									width={16}
									height={16}
									className='absolute top-[13px] left-4'
								/>
							</div>
							<div className='flex  gap-3'>
								<Button type='text'>
									<span className='text-blackThirty mr-1.5'>
										Sort
									</span>
									<span>
										<ArrowDownUp
											width={16}
											height={15}
											color='#4D4D4D'
										/>
									</span>
								</Button>
								<Button type='iconButton'>
									<Download
										color='#4D4D4D'
										height={16}
										width={16}
									/>
								</Button>
							</div>
						</div>
						<table className='table-fixed w-full'>
							<thead>
								<tr className='h-10  bg-whiteCream text-blackThirty text-[10px] sm:text-normal font-medium'>
									<th className='text-start pl-3'>
										Order ID
									</th>
									<th className='text-start flex items-center my-auto h-10'>
										Order date{" "}
										<MoveDown width={12} height={12} />
									</th>
									<th className='text-end'>Order amount</th>
									<th className='text-end pr-[18px] relative'>
										Transaction fees
										<Info
											width={14}
											height={14}
											className='absolute right-0 top-3.5 ml-1'
										/>
									</th>
								</tr>
							</thead>
							<tbody>
								{Array(12)
									.fill(1)
									.map((item, index) => (
										<tr
											key={`${item}-${index}`}
											className='h-12  bg-white text-blackFifty  text-normal font-normal'>
											<td className='text-start pl-3 text-primaryBlue font-medium'>
												#281209
											</td>
											<td className='text-start'>
												7 July, 2023
											</td>
											<td className='text-end'>
												₹1,278.23
											</td>
											<td className='text-end pr-3'>
												₹22
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='pagination flex gap-6 items-center justify-center mb-8 flex-wrap'>
					<Button type='nav'>
						<span>
							<ChevronLeft
								width={18}
								height={18}
								color='#4D4D4D'
							/>
						</span>
						<span className='text-blackThirty'>Previous</span>
					</Button>
					<div className='flex gap-2 items-center'>
						<Button type='number'>1</Button>
						<Button type='number'>...</Button>
						<Button type='number-selected'>10</Button>
						<div className='hidden md:flex'>
							<Button type='number'>11</Button>
							<Button type='number'>12</Button>
							<Button type='number'>13</Button>
							<Button type='number'>14</Button>
							<Button type='number'>15</Button>
							<Button type='number'>16</Button>
							<Button type='number'>17</Button>
							<Button type='number'>18</Button>
						</div>
					</div>
					<Button type='nav'>
						<span className='text-blackThirty'>Next</span>
						<span>
							<ChevronRight
								width={18}
								height={18}
								color='#4D4D4D'
							/>
						</span>
					</Button>
				</div>
			</section>
		</div>
	);
}

export default App;
