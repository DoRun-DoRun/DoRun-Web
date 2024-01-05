import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/header';

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
      </body>
    </html>
  );
}
