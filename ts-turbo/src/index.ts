import express, { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';

const MONGODB_URL = '';

interface ExampleDocument extends Document {
  message: string;
}

const exampleSchema = new Schema<ExampleDocument>({
  message: { type: String, required: true }
});

const ExampleModel = mongoose.model<ExampleDocument>('Example', exampleSchema);

mongoose.connect(MONGODB_URL)
  .then(() => {})
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const app = express();
const PORT = 8000;

app.get('/', async (req: Request, res: Response) => {
  try {
    const example = new ExampleModel({ message: 'Hello, World!' });
    await example.save();
    res.send('Document saved to MongoDB');
  } catch (error) {
    console.error('Error saving document to MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



