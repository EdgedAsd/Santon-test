import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

const UserStore = new Store("user", {
  data: {
    user: {}
  },
  reducers: [
    {
      type: "ADD_USER",
      action(state, payload) {
        const { user } = payload;

        return {
          user: user
        }
      }
    }
  ],
});

Registry.addStore(UserStore);

export { UserStore };
