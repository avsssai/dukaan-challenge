import { Icons, IconsType } from "../utils/Icons";

export default function Tab({ name }: { name: IconsType }) {
	return (
		<div className='flex px-4 py-2 gap-3'>
			<span>{Icons[name].icon}</span>
			<h6 className='text-normal font-medium'>{Icons[name].name}</h6>
		</div>
	);
}
