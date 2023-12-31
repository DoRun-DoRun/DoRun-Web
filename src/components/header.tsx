import Image from 'next/image';
import Logo from '/public/images/title.png';
import Link from 'next/link';

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
          <div key={idx}>{nav.name}</div>
        </Link>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="header-frame">
        <Link href="/">
          <Image src={Logo} alt="두런두런" className="mt-20 mb-20" />
        </Link>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
