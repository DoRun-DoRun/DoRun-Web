'use client';
import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        // 첫 번째 항목이 뷰포트에 들어오면 true, 아니면 false
        setIsVisible(entries[0].isIntersecting);
        // obs.unobserve(ref.current as HTMLDivElement);
      },
      {
        threshold: 0.1, // 10%가 보일 때 애니메이션 시작
      }
    );

    // 관찰할 요소 설정
    if (ref.current) {
      observer.observe(ref.current);
    }

    // 컴포넌트 언마운트 시 옵저버 정리
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'transform 1s ease-out, opacity 1s ease-out',
        opacity: isVisible ? 1 : 0,
      }}>
      {children}
    </div>
  );
};

export default AnimatedSection;
