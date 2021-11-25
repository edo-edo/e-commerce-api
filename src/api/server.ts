import signale from 'signale';

import app from './app';
import '../database';

app.listen(5000, () => signale.success(`Server listens to port 5000`));