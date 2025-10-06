import Script from 'next/script';

interface SchemaProps {
  id: string;
  data: unknown;
}

export const Schema = ({ id, data }: SchemaProps) => (
  <Script id={id} type="application/ld+json" strategy="afterInteractive">
    {JSON.stringify(data)}
  </Script>
);


