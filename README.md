# Sweet Breath 甜之呼吸 - 網路甜點工作室

- [網站 DEMO](https://corekang.github.io/sweetbreath/#/)

![](./img/localhost-index02-20210106.png)

## 專案介紹

本專案為 Sweet Breath 甜之呼吸 - 網路甜點工作室的前端原始碼，採用前端技術為 React Hooks，搭配後端技術
Express 和 Sequelize 進行開發。

## 專案展示

### 使用者相關功能

#### `頁面架構`

![](./img/userflow-client-v3-20210104.png)

#### `產品模組`

- 瀏覽所有產品：可依照分類檢視產品。
- 瀏覽單一產品：可瀏覽產品詳細資訊、產品規格與庫存，並可選擇產品數量加入購物車。

![](./img/model_product_user.gif)

#### `購物模組`

- 購物車系統：顯示加入購物車的商品，並顯示訂單摘要。
- 結帳功能：導向登入頁面，登入後輸入配送資料，確認訂單資訊和總額後，即可建立訂單。

![](./img/model_creatOrder.gif)

#### `會員模組`

- 會員註冊功能
- 會員身分驗證功能：登入後可查看或編輯個人相關資訊。
- 查看訂單：可在消費記錄查看已建立的訂單資訊。

![](./img/)

#### `基本模組`

- 首頁：主打活動輪播區，以及顯示人氣產品。
- 關於我們：瀏覽網站架設理念。
- 最新消息：瀏覽最新消息列表。
- 聯絡我們：瀏覽店家相關聯絡資訊、Google Maps 實體地址。

![](./img/model_basic.gif)

#### 管理者相關功能

#### `頁面架構`

![](./img/userflow-admin-v3-20210104.png)

#### `產品管理模組`

- 依分類管理：可新增或編輯產品分類。
- 依規格管理：可新增或編輯產品資訊、產品規格。

![](./img/)

#### `權限管理模組`

- 會員搜尋功能：可瀏覽所有帳號，依照使用者 id 或名稱搜尋特定帳號。
- 會員管理功能：可變更會員權限狀態，分為一般權限、管理權限、停權。

![](./img/)

#### `訂單管理模組`

- 瀏覽所有訂單：可查看所有訂單明細，並依照訂單狀態顯示訂單進度。
- 訂單管理功能：可依照付款進度、出貨進度調整訂單狀態，或取消處理中訂單。

![](./img/)

## 專案執行

1. 執行 `npm install` 安裝專案所需套件。

2. 執行 `npm run start`，在 http://localhost:3000 啟動專案。

3. 執行 `npm run dev`，使用 concurrently 實現同時在 http://localhost:3000 啟動前端，並在 http://localhost:5000 啟動後端專案。

4. 執行 `npm build`，在 build 資料夾建立專案 production 版本。

5. 執行 `npm deploy`，在 GitHub Pages 部屬專案網站。

## 專案前端技術

#### `框架`

- [React Hooks](https://reactjs.org/)
- [React DOM](https://www.npmjs.com/package/react-dom)

#### `第三方套件`

- [React Router DOM](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Google Map React](https://github.com/google-map-react/google-map-react)
- [gh-pages](https://create-react-app.dev/docs/deployment/)官方推薦的快速部署方法
- [bootstrap](https://getbootstrap.com/)
- [react-slick](https://react-slick.neostack.com/) 圖片輪播功能
- [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) 解決每次串 API 都要寫一串網址的麻煩

#### `第三方 API`

- [Google Cloud Platform](https://cloud.google.com/)

## 專案後端技術

Sweet Breath 甜之呼吸的後端原始碼，採用 Express 和 Sequelize 開發，生成 API 與前端串連。

- 專案連結：[sweetbreath-backend](https://github.com/ivymuchacha/sweetbreath-backend)

## 專案授權

[MIT License](https://choosealicense.com/licenses/mit/)
