import Image from 'next/image';
import headerImg from '/public/images/web_header1.png';

export default function Home() {
  return (
    <>
      Hello, Nextjs!
      <Image src={headerImg} alt="" className="header-img" />
    </>
  );
}
