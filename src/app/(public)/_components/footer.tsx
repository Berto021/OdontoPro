import Link from 'next/link';

export function Footer() {
	return (
		<footer className='py-6 text-center text-gray-500 text-sm md:text-base'>
			<p>
				Todos direitos reservados {new Date().getFullYear()} -{' '}
				<Link
					className='hover:text-black ease-in-out duration-300 transition-colors'
					href='https://www.linkedin.com/in/humberto-lima-a0a213229/'
				>
					{' '}
					@Humberto Lima
				</Link>
			</p>
		</footer>
	);
}
