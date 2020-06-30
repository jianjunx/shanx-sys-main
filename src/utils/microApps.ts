import { registerMicroApps, start } from "qiankun";
import { getMicroAppList, IAppList } from "@/api/common";
import { eventHub } from "./event";

const routers: IMicroAppItem[] = [];

export interface IMicroAppItem {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}

export async function microAppStart() {
  const result = await getMicroAppList();
  getMicroApp(result, routers);
  console.log("microAppStart");
  eventHub.$emit("menu-list", result);
  registerMicroApps(routers);
  start();
}

function getMicroApp(
  list: IAppList[],
  temps: IMicroAppItem[] = []
): IMicroAppItem[] {
  for (const { type, name, host = "", path = "", children } of list) {
    if (type === "app") {
      temps.push({
        name,
        entry: host,
        container: "#microAppsContainer",
        activeRule: path,
      });
    }
    if (Array.isArray(children)) getMicroApp(children, temps);
  }
  return temps;
}
