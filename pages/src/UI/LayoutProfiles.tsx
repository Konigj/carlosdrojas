import Head from 'next/head';

type LayoutProps = {
	children: React.ReactNode;
	slug: string;
};

const LayoutProfiles = ({ children, slug }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{slug} | Presentación digital</title>
				<meta
					name='description'
					content=' Carlos Rojas Pico - Emprendedor y Político'
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta name='author' content='Juan Rey' />
				<meta name='twitter:site' content='@JuanReyAl' />
				<meta name='twitter:creator' content='@JuanReyAl' />
			</Head>
			{children}
		</>
	);
};

export default LayoutProfiles;
