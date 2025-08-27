import React from 'react';
// import { Helmet } from 'react-helmet-async';

const SEOHead = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    siteName = 'E-Commerce API Platform'
}) => {
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        // <Helmet>
        <>

            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            {url && <meta property="og:url" content={url} />}
            {image && <meta property="og:image" content={image} />}
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Additional meta tags */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />

            {/* Canonical URL */}
            {url && <link rel="canonical" href={url} />}
        </>
    );
};

export default SEOHead;