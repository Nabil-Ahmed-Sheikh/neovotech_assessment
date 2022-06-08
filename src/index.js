const app = require('./app');

const start = async () => {
  const port = process.env.PORT || 3000;

  app.listen(port, async () => {
    console.log(`Listening at port: ${port}`);
  });
};

start();
