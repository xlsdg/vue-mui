<template>
    <div class="index">
        <img class="logo" src="../assets/logo.png">
        <hello></hello>
    </div>
</template>

<script type="text/babel">
    import hello from '../components/Hello';
    export default {
        name: 'index',
        components: {
            hello
        },
        data () {
            return {};
        },
        created () {
        },
        methods: {
        }
    };
</script>

<style scoped>
    .index {
        margin-top: 100px;
        text-align: center;
    }
    .logo {
        width: 200px;
        height: 200px
    }
</style>