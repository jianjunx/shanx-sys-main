<template>
  <div>
    <template v-for="item in menuList">
      <el-submenu
        v-if="Array.isArray(item.children)"
        :index="item.path"
        :key="item.path"
      >
        <template slot="title">{{ item.name }}</template>
        <menu-item :menuList="item.children"></menu-item>
      </el-submenu>
      <el-menu-item :key="item.path" :index="item.path" v-else>{{
        item.name
      }}</el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class MenuItem extends Vue {
  name: string = 'MenuItem';
  @Prop({ default: () => [] }) menuList!: IMenuItem[];

  private showAside: boolean = false;

  private toggleAside() {
    this.showAside = !this.showAside;
  }
}

interface IMenuItem {
  name: string;
  path: string;
  children?: IMenuItem[];
}
</script>

<style></style>
