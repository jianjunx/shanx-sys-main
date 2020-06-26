import { registerMicroApps, start } from 'qiankun';
import { getMicroAppList } from '@/api/common';
import { eventHub } from './event';

const routers: IMicroAppItem[] = [];

export interface IMicroAppItem {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}

export async function microAppStart() {
  const result = await getMicroAppList();
  for (const { name, host = '', path = '' } of result) {
    routers.push({
      name,
      entry: host,
      container: '#microAppsContainer',
      activeRule: path,
    });
  }
  eventHub.$emit('menu-list', result);
  registerMicroApps(routers);
  start();
}
