import 'dotenv/config';
import app from './app';
import sequelize from './database/config/database';

const PORT = process.env.PORT || 5333;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected🔗');

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err: any) {
    console.error('Database connection failed ❌', err.message);
    process.exit(1);
  }
};

startServer();
