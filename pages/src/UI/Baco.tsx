import { useState } from 'react';
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
	const {
		baco_Image,
		baco_name,
		baco_name_textColor,
		baco_description,
		baco_links,
		baco_links_bg,
		baco_links_textColor,
		baco_icons,
		baco_icons_color,
		baco_footer_logo,
	} = profile;

	return (
		<main className={`profileContainer  ${styles.baco}`}>
			<section
				className={`${styles.bacoWrapper} bg-gradient-to-tr from-red-400 via-red-600  to-red-900`}
			>
				<div className={`${styles.bacoContainerImage}`}>
					<div className={`${styles.bacoImage} flex justify-center`}>
						<Image
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
						{baco_name}
					</h2>
					<div className='font-medium break-words whitespace-pre select-text text-center text-white text-lg -p-4'>
						<p className='drop-shadow'>Emprendedor | Político</p>
					</div>
				</div>

				<div className={`${styles.bacoLinks}`}>
					<ul className={`${styles.bacoLinksContainer} text-black my-10`}>
						{baco_links.map((link) => (
							<BacoLink
								key={link.id}
								link={link}
								baco_name_textColor={baco_name_textColor}
								baco_links_textColor={baco_links_textColor}
								baco_links_bg={baco_links_bg}
							/>
						))}
					</ul>
				</div>

				<div className={`${styles.bacoIcons}`}>
					<ul className={`${styles.bacoIconsContainer}`}>
						{baco_icons.map((icon) => (
							<BacoIcon
								key={icon.id}
								baco_icons_color={baco_icons_color}
								icon={icon}
							/>
						))}
					</ul>
				</div>

				<div className='container py-5'>
					<div className='flex justify-center '>
						<Link href='https://noova.app' target={'_blank'}>
							<a target={'_blank'} className='hover:scale-105'>
								<Image
									src={baco_footer_logo.url}
									height='100%'
									width='100%'
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
			className={`${styles.bacoLink} bg-white outline outline-2 outline-#3f3f46 text-#3f3f46 text-xl hover:scale-y-110`}
			href={link.link_url}
		>
			{link.link_name}
		</a>
	);
};

export const BacoIcon = ({ icon }: any) => {
	return (
		<a href={icon.icon_url} className={`${styles.bacoIcon}`}>
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
