import React from "react";

interface Props {
  description: string;
  image?: string;
  title: string;
  url?: string;
  type?: string;
  locale?: string;
  siteName?: string;
}

const Meta: React.FC<Props> = ({ 
  description, 
  title, 
  image, 
  url, 
  type = "website",
  locale = "en_US",
  siteName 
}: Props) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    
    {/* Open Graph / Facebook / Telegram */}
    <meta property="og:type" content={type} />
    {url && <meta property="og:url" content={url} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    {image && <meta property="og:image:width" content="1200" />}
    {image && <meta property="og:image:height" content="630" />}
    {siteName && <meta property="og:site_name" content={siteName} />}
    <meta property="og:locale" content={locale} />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    {url && <meta name="twitter:url" content={url} />}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
    
    {/* Additional meta tags */}
    {image && <meta name="image" content={image} />}
  </>
);

export default Meta;
