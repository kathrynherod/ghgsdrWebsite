import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dog', { path: '/:id' });
  this.route('export');
  this.route('happy-tails');
});

export default Router;
