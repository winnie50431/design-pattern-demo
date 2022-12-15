/** --- same method; difference outcome --- */

// 介面(Interface) 主要表示抽象的行為，不能初始化屬性和方法
interface State {
  think(): string;
}

// 類別實踐(implement)介面時就可以具體化行為
class HappyState implements State {
  think() {
    return 'I am happy 😊';
  }
}

class SadState implements State {
  think() {
    return 'I am sad 😢';
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  think() {
    return this.state.think();
  }

  changeState(state) {
    this.state = state;
  }
}
