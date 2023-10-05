import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/_components/Nav';
import Footer from '@/_components/Footer';

const generalSans = localFont({ src: '../public/f/GeneralSans-Variable.ttf' });

export const metadata = {
  title: 'Erryf Magazine',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={generalSans.className}>
        <nav className='px-6 md:px-10 md:pt-8 lg:pt-16'>
          <Nav />
        </nav>
        <main className='px-6 md:px-10'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
