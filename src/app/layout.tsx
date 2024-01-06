import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/images/title.png';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '두런두런',
  description:
    '두런두런은 친구들과 함께 목표를 설정하고 경쟁하는 자기개발 어플리케이션으로, 사용자들은 친구들과 함께 목표를 달성하며 서로에게 도전과 자극을 주고받을 수 있습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={notoSansKr.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const NavBar = () => {
  const category = [
    { name: '내 캐릭터 찾기', link: '/character' },
    { name: '고객센터', link: '/customer' },
    { name: 'About us', link: '/aboutus' },
    { name: '팀원 모집', link: 'team' },
    { name: '소셜 로그인', link: 'login' },
  ];

  return (
    <div className="flex flex-row gap-48">
      {category.map((nav, idx) => (
        <Link href={nav.link}>
          <div key={idx} className="text-gray-4">
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col w-full h-80 justify-center absolute bg-white">
      <div className="inner">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={Logo} alt="두런두런" />
          </Link>
          <NavBar />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-360 justify-center bg-gray-6">
      <div className="inner">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={Logo} alt="두런두런" />
          </Link>
          <NavBar />
        </div>
      </div>
    </div>
  );
};
