import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import 'react-multi-carousel/lib/styles.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Isaac's Blog",
    template: `Isaac's Blog | %s`,
  },
  description: "Developer's Blog",
  icons: 'favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
