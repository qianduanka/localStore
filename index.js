import localFn from "./localStore";

export const localStore = localFn(localStorage);
export const sesstionStore = localFn(sesstionStore);

export default {
  localStore,
  sesstionStore,
};
