import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({ 
  title, 
  description, 
  name = "Teni", 
  type = "website",
  keywords = "Teni, Web Development, Design, Branding, Digital Service"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | {name}</title>
      <meta name='description' content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
