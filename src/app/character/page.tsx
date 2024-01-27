'use client';

import Btn from '@/components/button';

export default function character() {
  const GotoTestBtn = () => {
    alert('준비 중');
  };
  return (
    <div className="inner justify-center items-center h-screen gap-48">
      <p className="font-bold text-24 md:text-60 flex">
        나랑 맞는 두런두런 캐릭터는?
      </p>
      <Btn text="테스트하러 가기" onClick={GotoTestBtn} />
    </div>
  );
}
