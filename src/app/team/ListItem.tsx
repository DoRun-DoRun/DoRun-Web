'use client';
import { ProjectInfo } from '@/types/project';
import Link from 'next/link';

export default function ListItem({ result }: { result: any }) {
  return (
    <div>
      {result.map((item: ProjectInfo, idx: number) => (
        <div className="flex gap-3" key={item._id.toString()}>
          <Link prefetch={false} href={`detail/${item._id}`}>
            <p className="text-h4 font-h4">{item.project_name}</p>
            <p className="text-h4 font-h4">
              마감날짜: {item.invite_end_date.toString()}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
