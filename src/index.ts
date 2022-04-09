import AppContainer from './app';

const application = AppContainer.cradle.application;

application.start().catch((err) => console.log(err));
