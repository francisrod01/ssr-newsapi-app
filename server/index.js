/* eslint-disable no-unused-vars */
import path from 'path';
import compression from 'compression';
import express from 'express';

// Our loader - this basically acts as the entry point for each page load
import loader from './loader';

const app = express();
const PORT = process.env.PORT || 3000;

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (default 6)
    filter: shouldCompress,
  })
);

// Server code with some error handling
// ...

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get('^/$', loader));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(loader);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
