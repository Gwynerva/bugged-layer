<script lang="ts" setup>
import { getTheAnswer } from '@app/scripts/foo';
</script>

<template>
    <div>The answer is {{getTheAnswer()}} (taken from `#mylayer` config)</div>
</template>