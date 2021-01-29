import Rocket from '../Rocket';

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 40,
      handling: 30,
      speed: 40,
      name: 'rocket-4',
    }, {
      fireRotation: -1.6,
      fireX: 95,
      fireY: 130,
      scale: 0.3,
    });
  }
}
