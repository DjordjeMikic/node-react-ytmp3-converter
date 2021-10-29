let express = require('express');
let app = express();
let { log } = console;
app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api', require('./routes'));
// require('./controllers')();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running on ${PORT}`);
})
