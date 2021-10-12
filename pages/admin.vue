<template>
    <nuxt-child /> 
</template>

<script>
export default {
    middleware: ['is-admin'],
    layout: 'admin'
}
</script>