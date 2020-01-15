<template>
    <!--面包屑导航-->
    <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item class="order">我的团队</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>我的项目</el-breadcrumb-item> -->
            <!-- <el-breadcrumb-item >{{location}}</el-breadcrumb-item> -->
        </el-breadcrumb>
        <!--虚线分割-->
        <!-- <div class="line"></div> -->
    </div>
</template>

<script>
    export default {
        name: "breadCrumb",
        props:['location']
    }
</script>

<style lang="scss">
    .breadCrumb {

        .el-breadcrumb__item {
            span {
                color: #444444 !important;
            }
        }

        .order {
            span {
                color: #3e97df !important;
            }
        }
        .line{
            margin-top: 8px;
            width: 100%;
            opacity: 0.1;
            border: 1px dashed #000000;
        }
    }

</style>
