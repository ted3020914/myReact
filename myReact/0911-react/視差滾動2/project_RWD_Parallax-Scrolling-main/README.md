視差滾動(Parallax Scrolling)練習
===
### Project 說明
### 視差滾動(Parallax Scrolling)練習：運用JavaScipt、jQuery和RWD響應式網頁設計，並導入SASS/SCSS。

---
### 學習紀錄

- 取得屬性值、位置偏移值、偵測滾動導覽列選單：`$(this)` ,`.attr()` , `.offset()` , `.scrollTop()`

- **進度條(progress bar)**：`.each()` , `.addClass()`

- jQuery的position()與offset()差異之處，在於「取得自身定位的依據對象不同」。
  - position 依據「該元素最近的一個絕對定位或相對定位的元素」來計算相對距離，若找不到符合元素就會以視窗大小作為依據來計算。
  - offset 則是依據你「當前頁面的視窗」大小，作為計算相對距離的對象。會忽略外層元素! (*不管該元素如何定位，也不管其父元素如何定位，都是獲取的該元素相對於當前視口的偏移。)
