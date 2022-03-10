<template>
    <el-container style="height: 100%">
        <el-aside width="auto">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    name: 'HoMe',
    data () {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.el-header {
    background: black;
}
el-main {
    padding-top: 0;
}
</style>
