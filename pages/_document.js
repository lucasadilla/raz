import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>

                    <link rel="icon" href="/images/razLogo.png"/>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": "https://www.amirraz.com",
                            "name": "Amir Raz Official Website",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://www.amirraz.com/search?query={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;