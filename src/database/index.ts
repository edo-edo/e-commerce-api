import signale from 'signale';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DB_URL as string)
  .then(() => signale.success('mongoDB connected'))
  .catch(err => signale.error(err, 'Unable to connect mongoDB'));