import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doeeeee';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
