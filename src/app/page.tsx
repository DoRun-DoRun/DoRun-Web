import Image from 'next/image';
import headerImg from '/public/images/web_header_1.png';
import appleLogo from '/public/images/apple_store_logo.png';
import playStoreLogo from '/public/images/play_store_logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="bg-bg  h-screen pt-52">
        <Image
          src={headerImg}
          alt="별이 반짝이는 겨울 밤의 산 배경이미지입니다. 하늘색과 남색의 산들과 눈이 더해져 차가운 겨울 느낌을 줍니다."
          className="w-screen absolute bottom-0"
        />
        <div className="inner gap-4">
          <div className="flex gap-4">
            <Link href="https://www.naver.com" target="_blank">
              <div className="p-3 pl-5 pr-6 items-center bg-white rounded-lg flex gap-2 shadow-md">
                <Image
                  src={appleLogo}
                  alt="AppleStore을 나타내는 로고입니다.
"
                  className="w-7"></Image>
                <p className="text-24 font-bold">App Store</p>
              </div>
            </Link>
            <div className="p-3 pl-5 pr-6 items-center bg-white rounded-lg flex gap-2 shadow-md">
              <Image
                src={playStoreLogo}
                alt="PlayStore을 나타내는 로고입니다."
                className="w-7"></Image>
              <p className="text-24 font-bold">Play Store</p>
            </div>
          </div>
          <h1 className="text-h1 font-h1">
            함께 성장하는 즐거움을 선사할게요!
          </h1>
          <h2 className="text-h2 font-h2 text-gray-2">
            두런두런을 통해 친구들과 함께 도전하고 하루하루 작은 성공을
            모아보세요.
          </h2>
        </div>
      </div>
    </div>
  );
}
