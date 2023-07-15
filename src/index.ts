import express, { Application, Request, Response } from 'express';
import * as api from './routes/route';
import connect from './config/connection';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  throw new Error('PORT is not defined in the environment variables.');
}

const PORT = process.env.PORT;

const app: Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

api.createRoutes(app);

app.use((req: Request, res: Response) => {
  res.status(404).send('<body>Not Found</body>');
});

connect().then((connected: boolean) => {
  if (connected) {
    app.listen(PORT, () => {
      console.log('Running on port ' + PORT);
    });
  } else {
    console.log('Error connecting to the database');
  }
});
