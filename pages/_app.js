// pages/_app.js
import '../styles/global.css'; // Import the global CSS file
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Analytics />
            <Script
                src="https://www.youtube.com/iframe_api"
                strategy="lazyOnload"
            />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;