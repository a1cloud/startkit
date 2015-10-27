/**
 * 默认首页控制器
 */
export default class HomeController {

  constructor(UserService) {
    this.userService=UserService;
    this.name='Main';
    this.fields = [
      {
        key: 'text',
        type: 'input',
        templateOptions: {
          label: '标题'
        }
      },
      {
        elementAttributes: {
          layout: 'row',
          'layout-sm': 'column'
        },
        fieldGroup: [
          {
            key: 'firstName',
            elementAttributes: {
              flex: ''
            },
            type: 'input',
            templateOptions: {
              label: '姓'
            }
          },
          {
            key: 'lastName',
            elementAttributes: {
              flex: ''
            },
            type: 'input',
            templateOptions: {
              label: '名'
            }
          }
        ]
      },
      {
        key: 'knowsMuffinMan',
        type: 'checkbox',
        templateOptions: {
          label: 'Do you know the muffin man?'
        }
      }
    ];

    this.model = {};
    this.options = {};

    this.originalFields = angular.copy(this.fields);
  }

  onSubmit() {
    this.options.updateInitialValue();
    alert(JSON.stringify(this.model), null, 2);
  }

  changeName() {
    this.name = this.userService.getName();
  }
}

HomeController.$inject=['UserService'];
