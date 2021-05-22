const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
