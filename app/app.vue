<template>
  <div>
    <HelloWorld />
    <ConfigAnswer />
    <WithProps :data="{ foo: 42, bar: 'bar-value', baz: false }" />
  </div>
</template>
