'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { LogIn, Menu } from 'lucide-react';

export function Header() {
	const navItems = [{ href: '#profissionais', label: 'Profissionais' }];
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const session = true;

	const NavLinks = () => (
		<>
			{navItems.map((item) => (
				<Button
					key={item.href}
					onClick={() => setIsMenuOpen(false)}
					className='bg-transparent hover:bg-transparent text-black shadow-none'
				>
					<Link className='text-base' href={item.href}>
						{item.label}
					</Link>
				</Button>
			))}

			{session ? (
				<Link
					className='flex items-center justify-center gap-2'
					href='/dashboard'
				>
					<LogIn />
					Acessar clinica
				</Link>
			) : (
				<Button> Portal da Cinica</Button>
			)}
		</>
	);

	return (
		<header className='fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white'>
			<div className='container flex justify-between min-w-full space-x-5'>
				<Link href='/' className='text-3xl font-bold text-zinc-900'>
					Odonto <span className='text-emerald-500'>PRO</span>
				</Link>

				<nav className='hidden md:flex items-center ml-10'>
					<NavLinks />
				</nav>

				<Sheet open={isMenuOpen} onOpenChange={(value) => setIsMenuOpen(value)}>
					<SheetTrigger asChild className='md:hidden'>
						<Button
							className='text-black hover:bg-transparent cursor-pointer'
							variant='ghost'
						>
							<Menu className='w-6 h-6' />
						</Button>
					</SheetTrigger>

					<SheetContent side='right' className='w-60 sm:w-75 z-999'>
						<SheetTitle className='flex justify-center'>Menu</SheetTitle>
						<SheetDescription className='flex justify-center'>
							Veja nosso Menu
						</SheetDescription>
						<nav className='flex flex-col justify-center space-y-4 mt-3'>
							<NavLinks />
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
