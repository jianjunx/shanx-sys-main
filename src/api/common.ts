import microAppList from '@/api/microAppList.json';

export interface IAppList {
  name: string;
  type: string;
  host?: string;
  icon?: string;
  path?: string;
  children?: IAppList[];
}
export function getMicroAppList(): Promise<IAppList[]> {
  return new Promise((resolve, reject) => {
    resolve(microAppList);
  });
}
