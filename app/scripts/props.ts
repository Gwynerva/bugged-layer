// This fails too
import { LazyHelloWorld } from '#components';
console.log('Hello World Lazy: ', LazyHelloWorld.name);
//

export interface BuggedProps {
  text: string;
}