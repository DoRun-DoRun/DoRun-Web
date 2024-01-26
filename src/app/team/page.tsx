import { connectDB } from '../../../util/database';
import ListItem from './ListItem';

export default async function team() {
  const db = (await connectDB).db('dorun_web');
  let result = await db.collection('project').find().toArray();
  console.log(result);

  return (
    <div className="flex items-center justify-center h-screen gap-3 flex-col">
      <p className="text-h1 font-h1">team</p>
      <ListItem result={result} />
    </div>
  );
}
