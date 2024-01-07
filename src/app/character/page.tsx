'use client';

import Btn from '@/components/button';

export default function character() {
  const GotoTestBtn = () => {
    alert('준비 중');
  };
  return (
    <div className="inner justify-center items-center h-screen gap-48">
      <h1 className="font-h1 text-h1 flex">나랑 맞는 두런두런 캐릭터는?</h1>
      <Btn text="테스트하러 가기" onClick={GotoTestBtn} />
    </div>
  );
}
