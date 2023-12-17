import { cloneDeep } from "lodash";
export function myClone<T>(obj: T): T {
  return cloneDeep(obj);
}
