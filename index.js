const express = require('express');
const cors = require('cors');
 
const app = express();
app.use(express.static('public'));
app.use(cors());

app.listen(3000, () => console.log('server started'));

app.get('/', (req, res) => {
  res.send('public/index.html');
});

