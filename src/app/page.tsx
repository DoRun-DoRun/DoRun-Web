import Image from 'next/image';
import headerImg from '/public/images/web_header_1.png';

export default function Home() {
  return (
    <div>
      <div className="bg-bg h-full">
        <Image src={headerImg} alt="" className="" />
      </div>
    </div>
  );
}
