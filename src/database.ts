import { connect } from 'mongoose';

export async function startConnection() {
  const db = await connect(
    'mongodb://mongo:27017/library',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
    },
  );
  console.log('Database is connected');
}