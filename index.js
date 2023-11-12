import localFn from "./localStore";

export const localStore = localFn(localStorage);
export const sesstionStore = localFn(sessionStorage);

export default {
  localStore,
  sesstionStore,
};
