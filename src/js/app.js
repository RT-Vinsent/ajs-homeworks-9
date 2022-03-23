/* eslint-disable no-console */
import Daemon from './modules/daemon';

const test = new Daemon('test');

console.log(test);
test.attack = 200;
test.distance = 2;
test.stoned = true;
console.log(test.attack);
