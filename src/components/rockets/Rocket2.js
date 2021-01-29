import Rocket from '../Rocket';

export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket2',
      acceleration: 20,
      handling: 30,
      speed: 50,
      name: 'rocket-2',
    }, {
      fireRotation: 3.6,
      fireX: 300,
      fireY: 260,
    });
  }
}
