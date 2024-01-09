import { Icons, IconsType } from "../utils/Icons";

export default function Tab({ name }: { name: IconsType }) {
	if (name === "paymentsSolid") {
		return (
			<button
				// style={{ background: "#343b53" }}
				className='selected group flex px-4 py-2 gap-3 cursor-pointer w-full rounded-md hover:bg-hoverBg'>
				<span className='group-hover:fill-white'>
					{Icons[name].icon}
				</span>
				<h6 className='text-normal font-medium'>{Icons[name].name}</h6>
			</button>
		);
	}
	return (
		// button to get automatic tab navigation (would prefer nav and li)
		<button className='flex px-4 py-2 gap-3 cursor-pointer w-full rounded-md hover:bg-hoverBg'>
			<span>{Icons[name].icon}</span>
			<h6 className='text-normal font-medium'>{Icons[name].name}</h6>
		</button>
	);
}
