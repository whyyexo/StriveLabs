import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Strive Labs - Build faster. Ship smarter.',
  description = 'Premium tools for modern teams. Accelerate development with AI-powered automation and seamless integrations.',
  image = 'https://strivelabs.com/og-image.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://strivelabs.com',
  type = 'website',
  jsonLd,
}) => {
  const fullTitle = title.includes('Strive Labs') ? title : `${title} - Strive Labs`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add JSON-LD
    const defaultJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Strive Labs',
      url: 'https://strivelabs.com',
      logo: 'https://strivelabs.com/logo.png',
      description: 'Premium tools for modern teams. Accelerate development with AI-powered automation and seamless integrations.',
      sameAs: [
        'https://github.com/strivelabs',
        'https://twitter.com/strivelabs',
        'https://discord.gg/strivelabs',
      ],
    };

    // Remove existing JSON-LD script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new JSON-LD script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd || defaultJsonLd);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, image, url, type, jsonLd, fullTitle]);

  return null;
};

export default SEO;

