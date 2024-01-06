import Image from 'next/image';
import headerImg from '/public/images/web_header_1.png';
import appleLogo from '/public/images/apple_store_logo.png';
import playStoreLogo from '/public/images/play_store_logo.png';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <div className="bg-bg h-screen pt-52">
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
      <div>
        <div className="inner pt-44">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-h4 font-h4 text-primary-1">목표설정</h4>
              <h3 className="text-h3 font-h3">목표를 간편하게 관리하세요!</h3>
              <p className="text-body1 font-body1 text-gray-1">
                간단한 목표 설정 기능을 통해 하루를 계획하고 관리할 수 있어요.
                매일 작은 목표를 설정하여 소소한 달성을 이루어 내고 나만의
                루틴으로 만들어보세요!
              </p>
            </div>
            <div>
              <div className="relative">
                <div className="gap-3 w-130 bg-glass1 py-5 px-4 flex justify-start items-center rounded-2xl shadow-glass z-10 absolute">
                  <MdCheckCircle size="32" color="#648CF3" />
                  <p className="text-24 font-medium flex-1">챌린지 아이템</p>
                  <MdMoreHoriz size="32" color="#B5B5B5" />
                </div>
                <div className="w-130 h-16 bg-primary3 py-3 px-4 rounded-2xl absolute top-7 left-5 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
