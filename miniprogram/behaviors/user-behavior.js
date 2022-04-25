import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { user } from "../models/index";

export const userBehavior = BehaviorWithStore({
  storeBindings: [{
    namespace: "user",
    store: user,
    fields: ["phoneNumber", "desensitiveMobile", "isLogin", "location"],
    actions: ["updatePhoneNumber", "updateLocation"],
  }]
});
