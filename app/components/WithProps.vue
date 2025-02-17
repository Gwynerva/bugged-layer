<script lang="ts" setup>
import { type PropsFromScripts } from '@app/scripts/props';

const props = defineProps<PropsFromScripts<{ foo: 42, bar: 'bar-value', baz: boolean }>>();
</script>

<template>
    Foo:
    {{ data.foo }}
    <br><br>
    Bar:
    {{ data.bar }}
    <br><br>
    Baz:
    {{ data.baz }}
</template>