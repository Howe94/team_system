<template>
    <!--面包屑导航-->
    <div class="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="isShow">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的队伍</el-breadcrumb-item>
            <el-breadcrumb-item class="order">{{location}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-else>
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{breadAction.teamName}}</el-breadcrumb-item>
            <el-breadcrumb-item class="order">{{breadAction.proName}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!--虚线分割-->
        <!-- <div class="line"></div> -->
    </div>
</template>

<script>
    export default {
        name: "breadCrumb",
        props:['location','breadAction','isShow']
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
