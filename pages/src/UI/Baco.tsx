import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/profiles/Baco.module.css';
import 'external-svg-loader';
import { gsap } from 'gsap';

interface Props {
	profile: {
		baco_bg: string;
		baco_Image: {
			url: string;
		};
		baco_name: string;
		baco_name_textColor: string;
		baco_links: [any];
		baco_description: string;
		baco_links_bg: string;
		baco_links_textColor: string;
		baco_icons: [any];
		baco_icons_color: string;
		baco_footer_logo: {
			url: string;
		};
	};
}

const Baco = ({ profile }: Props) => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
		tl.fromTo(
			'.baco',
			{ opacity: 0.2 },
			{ opacity: 1, duration: 1.5, stagger: 0.25 }
		);
		tl.fromTo('.baco-links', { x: '-100%' }, { x: 0, duration: 1.5 }, '=-1.5');
		tl.fromTo('.baco-icons', { x: '1100%' }, { x: 0, duration: 1 });
		tl.fromTo('.profileFooter', { x: '500%' }, { x: 0, duration: 1 });
	}, []);

	if (!profile?.baco_name) return <div></div>;

	return (
		<main className={`profileContainer baco ${styles.baco}`}>
			<section
				className={`${styles.bacoWrapper} bg-gradient-to-tr from-red-400 via-red-600  to-red-900`}
			>
				<div className={`${styles.bacoContainerImage}`}>
					<div className={`${styles.bacoImage} flex justify-center`}>
						<img
							src={'/carlos.jpg'}
							width='150px'
							height='150px'
							alt='Profile picture'
							className='rounded-full '
						/>
					</div>
				</div>

				<div className={`${styles.bacoText} mt-4 text-3xl`}>
					<h2 className={`${styles.bacoTextName} text-white drop-shadow`}>
						{profile.baco_name}
					</h2>
					<div className='font-medium break-words whitespace-pre select-text text-center text-white text-lg -p-4'>
						<p className='drop-shadow'>Emprendedor | Político</p>
					</div>
				</div>

				<div className={`${styles.bacoLinks}`}>
					<ul
						className={`${styles.bacoLinksContainer} text-black my-10 gap-8 w-[90%]`}
					>
						{profile.baco_links.map((link) => (
							<BacoLink
								key={link.id}
								link={link}
								baco_name_textColor={profile.baco_name_textColor}
								baco_links_textColor={profile.baco_links_textColor}
								baco_links_bg={profile.baco_links_bg}
							/>
						))}
					</ul>
				</div>

				<div className={`${styles.bacoIcons}`}>
					<ul className={`${styles.bacoIconsContainer}`}>
						{profile.baco_icons.map((icon) => (
							<BacoIcon
								key={icon.id}
								baco_icons_color={profile.baco_icons_color}
								icon={icon}
							/>
						))}
					</ul>
				</div>

				<div className='container mt-10 py-5'>
					<div className='flex justify-center '>
						<Link href='https://noova.app' target={'_blank'}>
							<a
								target={'_blank'}
								className='hover:scale-105 profileFooter flex justify-center'
							>
								<img
									src={profile.baco_footer_logo.url}
									width={'50%'}
									alt='noova-footer'
								/>
							</a>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Baco;

export const BacoLink = ({ link }: any) => {
	return (
		<a
			style={{ boxShadow: '0px 0px 0px 3px #3f3f46' }}
			className={` p-4 max-w-full font-semibold baco-links bg-white text-#3f3f46 text-xl hover:scale-y-110 rounded-2xl`}
			href={link.link_url}
		>
			{link.link_name}
		</a>
	);
};

export const BacoIcon = ({ icon }: any) => {
	return (
		<a href={icon.icon_url} className={`${styles.bacoIcon} baco-icons`}>
			<svg
				data-src={icon.icon_image.url}
				fill='white'
				color='white'
				width='32'
				height='32'
			></svg>
		</a>
	);
};
