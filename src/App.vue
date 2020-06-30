<template>
  <el-container class="main-container">
    <el-header class="white main-header">Header</el-header>
    <el-container>
      <el-aside
        class="main-aside"
        :style="{ width: showAside ? '200px' : '60px' }"
        ><menu-tree :menuList="menuList"></menu-tree
      ></el-aside>
      <el-main>
        <div id="microAppsContainer"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuTree, { IMenuItem } from "./components/MenuTree.vue";
import { eventHub } from "./utils/event";
import { IAppList } from "./api/common";

@Component({
  components: {
    MenuTree,
  },
})
export default class App extends Vue {
  private showAside: boolean = true;
  private menuList: IMenuItem[] = [
    {
      name: "系统管理",
      path: "1",
      children: [
        {
          name: "用户管理",
          path: "1-1",
        },
        {
          name: "功能管理",
          path: "1-2",
        },
      ],
    },
  ];
  private async created() {
    eventHub.$on("menu-list", this.getMenuList);
  }
  private getMenuList(list: IAppList[]) {
    this.menuList = list;
  }
}
</script>

<style lang="less">
.main {
  &-container {
    height: 100%;
  }
  &-header {
    margin-bottom: 8px;
    box-shadow: 0 0 2px #dcdfe6;
    background-color: #fff;
  }
  &-aside {
    transition: width 0.1s;
    margin-left: 8px;
    margin-bottom: 8px;
    box-shadow: 0 0 2px #dcdfe6;
    background-color: #fff;
  }
}
</style>
