
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Construtora | Construção e Reforma em Goiânia',
  description: 'A Global Construtora realiza construção civil, reformas, áreas de lazer e edificações em Goiânia e região, com equipe própria, preço justo e qualidade.',
  keywords: 'construtora em Goiânia, construção civil em Goiânia, reforma em Goiânia, área de lazer em Goiânia, construção e reforma, edificação em Goiânia, obras em Goiânia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap" rel="stylesheet" />
        {/* Placeholder for Analytics/Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Mock Analytics Tracking
          window.trackConversion = function(type) {
            console.log('Conversion Tracked:', type);
          }
        `}} />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
