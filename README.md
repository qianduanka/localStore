## 描述
localStorage 本地数据长期存储，不会因为浏览器关闭而清空数据。
sessionStorage 当前页面会话期间有效，当页面窗口关闭时，存储在sessionStorage的数据将被清空。

localStorage 、sessionStorage 键值对都是以字符串的形式存储，如果是其他类型将会自动转换为字符串类型的数据存储。

根据上面的特性，创建了localStore库，键可以是字符串，值可以是任何类型。支持方法有设置、读取、删除、清空、遍历键值对。

## 安装
```
npm install -S @qdk/localstore
```

## 引用
```javascript
import { localStore, sesstionStore } from '@qdk/localstore';
```


## 例子

### 一、localStore 本地数据长期存储

#### 例一、设置
```javascript
localStore.setItem('array', [1, 2, 3, 4, 5, 6]);
localStore.setItem('object', { a: 'a', b: 'b', c: 'c' });
localStore.setItem('data', { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' });
```

#### 例二、读取
```javascript
localStore.getItem('array'); // [1, 2, 3, 4, 5, 6]
localStore.getItem('object'); // { a: 'a', b: 'b', c: 'c' }
localStore.getItem('data'); // { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' }
```

#### 例三、删除
```javascript
localStore.removeItem('array');
localStore.removeItem('object');
localStore.removeItem('data');
```

#### 例四、清空
```javascript
localStore.clear();
```

#### 例五、遍历键
```javascript
localStore.keys().forEach(item=> {
    console.log(item);
});

// 'array'
// 'object'
// 'data'
```

#### 例六、遍历值
```javascript
localStore.values().forEach(item=> {
    console.log(item);
});

// [1, 2, 3, 4, 5, 6]
// { a: 'a', b: 'b', c: 'c' }
// { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' }
```

#### 例七、遍历键值对
```javascript
localStore.entries().forEach(item=> {
    console.log(item);
});

// ['array', [1, 2, 3, 4, 5, 6]]
// ['object', { a: 'a', b: 'b', c: 'c' }]
// ['data', { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' }]
```

### 二、sesstionStore 页面会话期间有效

#### 例一、设置
```javascript
sesstionStore.setItem('array', [1, 2, 3, 4, 5, 6]);
sesstionStore.setItem('object', { a: 'a', b: 'b', c: 'c' });
sesstionStore.setItem('data', { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' });
```

#### 例二、读取
```javascript
sesstionStore.getItem('array'); // [1, 2, 3, 4, 5, 6]
sesstionStore.getItem('object'); // { a: 'a', b: 'b', c: 'c' }
sesstionStore.getItem('data'); // { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' }
```

#### 例三、删除
```javascript
sesstionStore.removeItem('array');
sesstionStore.removeItem('object');
sesstionStore.removeItem('data');
```

#### 例四、清空
```javascript
sesstionStore.clear();
```

#### 例五、遍历键
```javascript
sesstionStore.keys().forEach(item=> {
    console.log(item);
});

// 'array'
// 'object'
// 'data'
```

#### 例六、遍历值
```javascript
sesstionStore.values().forEach(item=> {
    console.log(item);
});

// [1, 2, 3, 4, 5, 6]
// { a: 'a', b: 'b', c: 'c' }
// { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' }
```

#### 例七、遍历键值对
```javascript
sesstionStore.entries().forEach(item=> {
    console.log(item);
});

// ['array', [1, 2, 3, 4, 5, 6]]
// ['object', { a: 'a', b: 'b', c: 'c' }]
// ['data', { list: [{a: 1}, {a: 2}, {a: 3}], version: '1.0.0' }]
```

## 微信号

联系作者：qianduanka

## 网站

https://www.qianduanka.com

### 前端咖公众号

![公众号](https://qianduanka.github.io/assets/images/qianduanka-gongzhonghao.jpg)

### 前端咖小程序

![公众号](https://qianduanka.github.io/assets/images/qianduanka-xiaochengxu.jpg)

## 支持

### 微信

![打赏](https://qianduanka.github.io/assets/images/wx.png)

### 支付宝

![打赏](https://qianduanka.github.io/assets/images/zfb.png)

