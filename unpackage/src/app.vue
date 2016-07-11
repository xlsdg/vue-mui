<template>
    <div class="router-view">
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'app',
        components: {},
        props: {},
        data () {
            return {
                msg: 'Hello World!'
            };
        },
        methods: {},
        created () {},
        beforeCompile () {},
        compiled () {},
        ready () {},
        beforeDestroy () {},
        destroyed () {},
        watch: {}
    };
</script>

<style scoped>
    .router-view {}
</style>