import { Scoreable } from './interfaces'
import { Foods } from './foods'

// スコア処理
export class Score implements Scoreable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0);
  }
  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}