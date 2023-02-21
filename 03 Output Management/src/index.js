import _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const br = document.createElement('br');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.appendChild(br);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
