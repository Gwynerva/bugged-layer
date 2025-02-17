import { LazyHelloWorld } from '#components';

console.log(LazyHelloWorld);

interface BaseData {
    foo: number;
    bar: string;
}

export interface PropsFromScripts<T extends BaseData> {
    data: T;
}