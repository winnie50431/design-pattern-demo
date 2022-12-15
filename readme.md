# JS design patterns

**CREATIONAL** 創建型模式

---

- 問題: 記憶體占用過多？
- 解決方案

### Singleton 單例模式

- 定義 確保每個類別只創建 _單一的實例_

---

- 問題: 過於複雜的類別
- 解決方案

### Prototype 原型模式

定義

- 不依賴 Class 本身的繼承，而是 _已被創建的 Object_
- 利用 prototype 更容易的共用 methods

---

**STRUCTURAL** 結構型模式

### Proxy 代理模式

定義

- 爲其他物件提供一種代理，以控制對這個物件的訪問。

> The Proxy object enables you to create a proxy for another object, which can _intercept_ and _redefine_ fundamental operations for that object.
> [Proxy-MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

應用

- Vue Reactivity System

---

**BEHAVIORAL** 行為模式

### State 狀態模式

定義

- 有狀態的物件，把複雜的邏輯判斷分配到不同的狀態物件中，允許狀態物件在其內部狀態發生改變時改變行為。
