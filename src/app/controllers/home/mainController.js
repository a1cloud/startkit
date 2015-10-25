/**
 * 默认首页控制器
 */
export default class HomeController {
  constructor(UserService) {
    this.name = 'World';
    this.userService= UserService;
  }

  changeName() {
    this.name = this.userService.getName();
  }
}

HomeController.$inject=['UserService'];
