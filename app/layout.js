import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/_components/Nav';

const generalSans = localFont({ src: '../public/f/GeneralSans-Variable.ttf' });

export const metadata = {
  title: 'Erryf',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={[generalSans.className, 'px-20', 'py-16'].join(' ')}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
