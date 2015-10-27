import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import controllers from './controllers';
import services from './services';
import directives from './directives';

/**
 * 主程序，自动加载controllers,services
 */
angular.module('app', [
  uiRouter,
  'ngMaterial',
  'formly',
  services,
  controllers,
  directives
]).config(routes);
