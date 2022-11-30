import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await connect(process.env.MONGO_URI, {
      dbName: 'proShop',
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
