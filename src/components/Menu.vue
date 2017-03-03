<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to='/'>Home</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">Just testing menu</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><router-link to='/about'>About</router-link></el-menu-item>
    </el-menu>

    <!-- <div class="line"></div> -->

</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'The title of the menu'
    }
  },
}
</script>

<style>

</style>
