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
  'ngAnimate',
  services,
  controllers,
  directives
])
  .config(routes)
  .run((formlyConfig)=> {
    formlyConfig.setType({
      name: 'input',
      template: '<input ng-model="model[options.key]">'
    });

    formlyConfig.setType({
      name: 'checkbox',
      template: '<md-checkbox ng-model="model[options.key]">{{to.label}}</md-checkbox>'
    });

    formlyConfig.setWrapper({
      name: 'mdLabel',
      types: ['input'],
      template: '<label>{{to.label}}</label><formly-transclude></formly-transclude>'
    });

    formlyConfig.setWrapper({
      name: 'mdInputContainer',
      types: ['input'],
      template: '<md-input-container><formly-transclude></formly-transclude></md-input-container>'
    });

    // having trouble getting icons to work.
    // Feel free to clone this jsbin, fix it, and make a PR to the website repo: https://github.com/formly-js/angular-formly-website
    formlyConfig.templateManipulators.preWrapper.push(function(template, options) {
      if (!options.data.icon) {
        return template;
      }
      return '<md-icon class="step" md-font-icon="icon-' + options.data.icon + '"></md-icon>' + template;
    });
  });
