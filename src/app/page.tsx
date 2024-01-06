import Image from 'next/image';
import headerImg from '/public/images/web_header_1.png';

export default function Home() {
  return (
    <div>
      <div className="bg-bg  h-screen">
        <Image src={headerImg} alt="" className="w-screen h-screen absolute" />
        <div className="inner pt-96">
          <div className="flex gap-17">
            <div className="p-12 items-center">App Store</div>
            <div className="p-12 items-center">Play Strore</div>
          </div>
          <h1 className="text-h1 font-h1">
            함께 성장하는 즐거움을 선사할게요!
          </h1>
          <p>두런두런을 통해 함께 도전하고 하루하루 작은 상금을 모아보세요.</p>
        </div>
      </div>
    </div>
  );
}
