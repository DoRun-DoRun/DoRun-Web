import { ObjectId } from 'mongodb';

export interface ProjectInfo {
  _id: ObjectId;
  project_name: string;
  project_owner_id: number;
  invite_end_date: Date;
  start_date: Date;
  end_date: Date;
  project_status: 'waiting' | 'progress' | 'done';
  crew_id: number;
  project_description_id: number;
}
