<template>
  <el-menu @select="selectHandler">
    <menu-item :menuList="menuList"></menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import { eventHub } from '../utils/event';
import { IAppList } from '../api/common';

@Component({
  components: {
    MenuItem,
  },
})
export default class MenuTree extends Vue {
  name: string = 'MenuTree';
  @Prop({ default: () => [] }) menuList!: IMenuItem[];

  private selectHandler(index: string) {
    console.log('select', index);
  }
  private created() {
    eventHub.$on('menu-list', this.getMenuList);
  }
  private getMenuList(list: IAppList[]) {}
}

export interface IMenuItem {
  name: string;
  path: string;
  children?: IMenuItem[];
}
</script>

<style></style>
