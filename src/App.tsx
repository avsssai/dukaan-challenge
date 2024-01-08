import { ChevronDown } from "lucide-react";
import Tab from "./components/Tab";
import { Icons } from "./utils/Icons";

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
			<section></section>
		</div>
	);
}

export default App;
