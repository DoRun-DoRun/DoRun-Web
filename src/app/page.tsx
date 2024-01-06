import Image from 'next/image';
import headerImg from '/public/images/web_header_1.png';
import appleLogo from '/public/images/apple_store_logo.png';
import playStoreLogo from '/public/images/play_store_logo.png';
import hammer from '/public/images/hammer.png';
import phone1 from '/public/images/play_image_1.png';
import phone2 from '/public/images/play_image_2.png';
import two_bean from '/public/images/two_bean.png';
import image4 from '/public/images/img4.png';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';
import { MdMoreHoriz } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <div className="bg-bg h-screen">
        <Image
          src={headerImg}
          alt="별이 반짝이는 겨울 밤의 산 배경이미지입니다. 하늘색과 남색의 산들과 눈이 더해져 차가운 겨울 느낌을 줍니다."
          className="w-screen absolute bottom-0"
        />
        <div className="inner gap-16 h-screen  pt-208">
          <div className="flex gap-16">
            <Link href="https://www.naver.com" target="_blank">
              <div className="p-12 pl-20 pr-24 items-center bg-white rounded-lg flex gap-8 shadow-md">
                <Image
                  src={appleLogo}
                  alt="AppleStore을 나타내는 로고입니다."
                  className="w-28"
                />
                <p className="text-24 font-bold">App Store</p>
              </div>
            </Link>
            <div className="p-12 pl-20 pr-24 items-center bg-white rounded-lg flex gap-8 shadow-md">
              <Image
                src={playStoreLogo}
                alt="PlayStore을 나타내는 로고입니다."
                className="w-28"
              />
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
          <BoxItem bottom={406} left={87}>
            오늘은 한 걸음 더!
          </BoxItem>
          <BoxItem bottom={280} left={495}>
            챌린지를 생성해주세요!
          </BoxItem>
          <BoxItem bottom={484} left={1077}>
            같이 달려보자!
          </BoxItem>
        </div>
      </div>
      <div className="h-1440">
        <div className="inner pt-176 gap-144">
          <div className="grid grid-cols-2 gap-90">
            <div className="flex flex-col gap-25">
              <h4 className="text-h4 font-h4 text-primary-1">목표설정</h4>
              <h3 className="text-h3 font-h3">목표를 간편하게 관리하세요!</h3>
              <p className="text-body1 font-body1 text-gray-1">
                간단한 목표 설정 기능을 통해 하루를 계획하고 <br />
                관리할 수 있어요. 매일 작은 목표를 설정하여 <br />
                소소한 달성을 이루어 내고 나만의 루틴으로 만들어보세요!
              </p>
            </div>
            <div className="flex flex-col gap-40">
              <ChallengeItem background />
              <ChallengeItem />
              <ChallengeItem background />
              <ChallengeItem />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-86">
            <Image src={phone1} alt="" className="ml-100 w-5/6" />
            <div className="flex flex-col justify-center gap-25">
              <h4 className="text-h4 font-h4 text-primary-1">도전과 경쟁</h4>
              <h3 className="text-h3 font-h3">친구들과 함께 도전하세요!</h3>
              <p className="text-body1 font-body1 text-gray-1">
                캐릭터와 아이템을 통해 친구들과 상호작용하며
                <br /> 더욱 즐겁게 챌린지를 수행할 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-928 bg-primary-2">
        <div className="inner">
          <div className="grid grid-cols-2 gap-86">
            <div className="flex flex-col justify-center gap-25">
              <h3 className="font-h3 text-h3">
                친구들과 경쟁하며
                <br /> 챌린지를 수행하세요!
              </h3>
              <p className="font-body1 text-body1">
                챌린지의 진행도가 승부욕을 자극하여
                <br /> 더욱 즐거운 챌린지가 될 거예요!
              </p>
            </div>
            <div>
              <Image
                src={hammer}
                alt=""
                className="w-256 absolute top-40 right-40 rotate-28"
              />
              <Image src={phone2} alt="" className="relative top-176 w-5/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1600 ">
        <div className="inner pt-360 gap-144">
          <div className="grid grid-cols-2 gap-90">
            <div className="flex flex-col gap-25">
              <h4 className="text-h4 font-h4 text-primary-1">챌린지 공유</h4>
              <h3 className="text-h3 font-h3">
                챌린지 완수하고
                <br /> 친구들에게 자랑하세요!
              </h3>
              <p className="text-body1 font-body1 text-gray-1">
                챌린지를 완수하면 주어지는 이미지를 통해 완수한 챌린지를
                인증하고 공유할 수 있어요. 매일 작성하는 한 줄 일기로 오늘의
                성공을 기록하고 친구들과 추억해 보세요.
              </p>
            </div>
            <Image src={two_bean} alt="" className="w-4/5" />
          </div>
          <div className="grid grid-cols-2 gap-86">
            <Image src={image4} alt="" className="w-4/5" />
            <div className="flex flex-col justify-center gap-25">
              <h4 className="text-h4 font-h4 text-primary-1">한 줄 일기</h4>
              <h3 className="text-h3 font-h3">
                하루하루의 성공을
                <br /> 기록하고 공유하세요!
              </h3>
              <p className="text-body1 font-body1 text-gray-1">
                한 줄 일기를 통해 성공한 하루를 추억하고 친구들과 공유하여 나눌
                수 있어요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChallengeItem = ({ background }: { background?: boolean }) => {
  return (
    <div className={`relative ${!background && 'self-end'}`}>
      <div className="gap-12 w-520 bg-glass1 py-20 px-16 flex justify-start items-center rounded-2xl shadow-glass z-10 relative">
        <MdCheckCircle size="32" color="#648CF3" />
        <p className="text-24 font-medium flex-1">챌린지 아이템</p>
        <MdMoreHoriz size="32" color="#B5B5B5" />
      </div>
      {background && (
        <div className="w-520 h-76 bg-primary3 px-16 rounded-2xl absolute top-28 left-20s z-0"></div>
      )}
    </div>
  );
};

const BoxItem = ({
  children,
  bottom,
  left,
}: {
  children: string;
  bottom: number;
  left: number;
}) => {
  return (
    <div
      className="bg-glass1 rounded-lg w-285 py-28 shadow-rectangle01 flex justify-center absolute"
      style={{ bottom: `${bottom}px`, left: `${left}px` }}>
      <p className=" text-primary-1 text-22 font-bold leading-6">{children}</p>
    </div>
  );
};
