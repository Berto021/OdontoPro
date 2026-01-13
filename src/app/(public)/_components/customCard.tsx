import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import defaultImage from '../../../../public/foto1.png';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CustomCard() {
	return (
		<Card className='overflow-hidden'>
			<CardContent className='p-0'>
				<div>
					<div className='relative h-60'>
						<Image
							src={defaultImage}
							alt='foto default'
							fill
							className='object-contain'
						/>
					</div>
				</div>
				<div className='p-4 space-y-4'>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='font-semibold'>Clínica centro</h3>
							<p className='text-sm text-gray-500'>
								Rua x, centro, Campo grande - MG
							</p>
						</div>
						<div className='w-2.5 h-2.5 rounded-full bg-emerald-500'></div>
					</div>
					<Link href='/clinicaexemplo'>
						<Button className='bg-emerald-500 hover:bg-emerald-400 w-fit  cursor-pointer text-sm md:text-base font-medium'>
							Agendar horário
							<ArrowRight />
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
