export default function InfoCard({
	title,
	info,
}: {
	title: string;
	info: string;
}) {
	return (
		<div className='flex-1 p-5'>
			<h4 className='text-regular mb-[16px]'>{title}</h4>
			<p className='font-medium text-headingOne'>{info}</p>
		</div>
	);
}
