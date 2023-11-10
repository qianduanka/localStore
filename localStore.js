const localFn = (local = localStorage) => {
  const localStore = {
    setItem: function (key, val, isJson = true) {
      let obj = { val: val };
      if (isJson) {
        try {
          let txt = JSON.stringify(obj);
          local.setItem(key, txt);
        } catch (err) {
          console.error(err);
        }
      } else {
        local.setItem(key, txt);
      }
    },
    getItem: function (key) {
      let txt = local.getItem(key);
      if (txt === null) {
        return txt;
      }
      try {
        let obj = JSON.parse(txt);
        return obj.val;
      } catch (err) {
        return txt;
      }
    },
    removeItem: function (key) {
      local.removeItem(key);
    },
    clear: function () {
      local.clear();
    },
    keys: function () {
      return Object.keys(local);
    },
    values: function () {
      return Object.keys(local).map((item) => localStore.getItem(item));
    },
    entries: function () {
      return Object.keys(local).map((item) => [item, localStore.getItem(item)]);
    },
  };

  const handler = new Proxy(localStore, {
    get(target, key, r) {
      if (key === 'length') {
        return local.length;
      } else if (
        [
          'setItem',
          'getItem',
          'removeItem',
          'clear',
          'keys',
          'values',
          'entries',
        ].includes(key)
      ) {
        return target[key];
      } else {
        return target.getItem(key);
      }
    },
  });

  return handler;
};

export default localFn;
