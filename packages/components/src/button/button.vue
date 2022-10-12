<template>
    <button class="u-button" :class="styleClass"><slot></slot></button>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
import './style/index.less'
export default defineComponent({
    name: 'u-button',
    props: buttonProps,
    setup(props) {
        const styleClass = computed(() => { 
            return {
                [`u-button--${props.type}`]: props.type
            }
        })

        return {
            styleClass
        };
    },
});
</script>