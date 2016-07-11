<template>
    <div class="index">
        <img class="logo" src="../assets/logo.png">
        <hello></hello>
    </div>
</template>

<script type="text/babel">
    export default {
        'name': 'index',
        'components': {
            'hello': require('../components/Hello')
        },
        'props': {},
        data () {
            return {};
        },
        'computed': {},
        'methods': {},
        created () {},
        beforeCompile () {},
        compiled () {},
        ready () {},
        beforeDestroy () {},
        destroyed () {},
        'watch': {}
    };
</script>

<style lang="less" scoped>
    .index {
        margin-top: 100px;
        text-align: center;
    }
    .logo {
        width: 200px;
        height: 200px
    }
</style>