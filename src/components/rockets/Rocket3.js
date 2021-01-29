import Rocket from '../Rocket';

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 50,
      handling: 20,
      speed: 30,
      name: 'rocket-3',
    }, {
      fireRotation: -2.2,
      fireX: 110,
      fireY: 80,
      scale: 0.3,
    });
  }
}
