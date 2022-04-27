import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { global } from "../models/index";

export const globalBehavior = BehaviorWithStore({
  storeBindings: [{
    namespace: "global",
    store: global,
    fields: ["currentStore"],
    actions: ["setCurrentStore"],
  }]
});
