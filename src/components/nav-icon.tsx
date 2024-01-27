'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';

export const NavIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const category = [
    { name: '내 캐릭터 찾기', link: '/character' },
    { name: '고객센터', link: '/customer' },
    { name: '두런두런 소개', link: '/aboutus' },
    { name: '팀원 모집', link: '/team' },
    { name: '소셜 로그인', link: '/login' },
  ];

  return (
    <div className="z-30 md:hidden">
      <div
        className={`${
          isOpen ? 'w-full' : 'w-0'
        } fixed top-0 right-0 h-full pt-24 bg-white transition-all`}>
        <div className="flex flex-col gap-24 inner">
          <div className="flex flex-row justify-between">
            <p className="font-bold">두런두런</p>
            <div onClick={() => setIsOpen((prev) => !prev)}>
              <MdArrowBackIos size="32" color="#000"></MdArrowBackIos>
            </div>
          </div>
          {category.map((nav, idx) => (
            <Link href={nav.link} key={idx} onClick={() => setIsOpen(false)}>
              <p className="font-light text-16 text-gray-4">{nav.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <MdMenu size="24" color="#000"></MdMenu>
      </div>
    </div>
  );
};
