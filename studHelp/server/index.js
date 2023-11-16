// server/index.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
  console.log("Press Ctrl+C to quit.");
});

(async () => {
  console.log('Conectou!');
  const prisma = new PrismaClient();
  const devices = await prisma.device.findMany()
  console.log(devices);
})();