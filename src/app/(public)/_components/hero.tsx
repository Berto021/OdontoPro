import { Button } from '@/components/ui/button';
import doctorImg from '../../../../public/doctor-hero.png';
import Image from 'next/image';

export function Hero() {
	return (
		<section className='bg-green-100'>
			<div className='container mx-auto pb-4 px-4 pt-20 sm:pb-2 sm:px-6 lg:px-8'>
				<main className='flex items-center justify-center'>
					<article className='max-w-3xl space-y-8 flex flex-col justify-center'>
						<h1 className='text-4xl font-bold'>
							Encontre os melhores profissionais em um único local
						</h1>
						<p className='text-base lg:text-lg text-gray-600'>
							Nós somos uma plataforma para profissionais da saúde com o foco em
							agilizar seu atendimento de forma simplificada e organizada
						</p>

						<Button className='bg-emerald-500 hover:bg-emerald-400 w-fit font-semibold '>
							Encontre uma clínica
						</Button>
					</article>
					<div className='hidden lg:block'>
						<Image
							src={doctorImg}
							alt='Foto ilustrativa de um profissional da sáude'
							width={340}
							height={300}
							quality={100}
							priority
						/>
					</div>
				</main>
			</div>
		</section>
	);
}
