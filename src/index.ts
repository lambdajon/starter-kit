import AppContainer from './app';
const application = AppContainer.cradle.application;

application
  .start()
  .then(() => {
    console.log('Application started');
  })
  .catch((err) => console.log(err));
