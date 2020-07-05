import { Foodable } from './interfaces'
import { Score } from './score'

// 食べ物の特定の処理
export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this)); // bind でこの class 内の this となる
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}