export default function Button({
	type,
	children,
	aria,
}: {
	type: string;
	children: React.ReactNode;
	aria?: string;
}) {
	if (type === "iconButton") {
		return (
			<button
				aria-label={aria}
				role='button'
				className='p-2 flex border border-blackEightFive items-center justify-center h-9 w-9'>
				{children}
			</button>
		);
	}
	if (type === "nav") {
		return (
			<button
				aria-label={aria}
				role='button'
				className='px-2.5 py-1 pr-3 flex border  gap-1.5  items-center justify-center h-fit text-normal font-medium'>
				{children}
			</button>
		);
	} else if (type === "number-selected") {
		return (
			<button
				aria-label={aria}
				role='button'
				className='rounded-[4px] text-normal  text-white  bg-primaryBlue py-1  flex  items-center justify-center h-[28px] w-[28px]'>
				{children}
			</button>
		);
	}
	if (type === "number") {
		return (
			<button
				aria-label={aria}
				role='button'
				className='py-1  flex  items-center justify-center h-[28px] w-[28px] text-normal'>
				{children}
			</button>
		);
	}
	return (
		<button
			role='button'
			className='px-3 py-1.5 flex border border-blackEightFive justify-center items-center text-regular h-9'>
			{children}
		</button>
	);
}
