<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>

        <el-aside width="200px">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              router
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>导航1</span>
              </template>
                <el-menu-item index="/teacherStat">教师空间数据统计</el-menu-item>
                <el-menu-item index="/schoolStat">学校空间数据统计</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>导航2</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>导航3</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>导航4</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>




<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-header {
  background-color: #295997;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #91cee0;
  color: #333;
  text-align: center;
  line-height: 1000px;
  width: 300px;
}

.el-main {
  background-color: #87a9cb;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 800px;
}

</style>