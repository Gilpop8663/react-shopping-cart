"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[921],{"./src/components/common/Header/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Header",component:__webpack_require__("./src/components/common/Header/index.tsx").Z};__webpack_exports__.default=meta;var Default={args:{}};Default.parameters=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/HomePage/AddCartButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_templateObject3,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_recoil_atoms_cartAtom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/recoil/atoms/cartAtom.ts"),_components_common_BucketCounter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/BucketCounter/index.tsx"),_assets_images__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/assets/images.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AddCartButton=function AddCartButton(_ref){var id=_ref.id,addProductToCart=_ref.addProductToCart,savedCartData=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.sJ)(_recoil_atoms_cartAtom__WEBPACK_IMPORTED_MODULE_1__.c).find((function(item){return item.id===id}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper,{children:savedCartData?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_common_BucketCounter__WEBPACK_IMPORTED_MODULE_2__.Z,{kind:"small",id:id,quantity:savedCartData.quantity}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,{title:"장바구니 추가",type:"button",onClick:addProductToCart,"aria-label":"장바구니 버튼",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Image,{src:_assets_images__WEBPACK_IMPORTED_MODULE_3__.Lb,alt:"장바구니 버튼"})})})},Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)([""]))),Button=styled_components__WEBPACK_IMPORTED_MODULE_5__.zo.button(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  border: none;\n\n  background: none;\n  cursor: pointer;\n"]))),Image=styled_components__WEBPACK_IMPORTED_MODULE_5__.zo.img(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  width: 25px;\n  height: 22px;\n"])));__webpack_exports__.Z=AddCartButton;try{AddCartButton.displayName="AddCartButton",AddCartButton.__docgenInfo={description:"",displayName:"AddCartButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},addProductToCart:{defaultValue:null,description:"",name:"addProductToCart",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HomePage/AddCartButton.tsx#AddCartButton"]={docgenInfo:AddCartButton.__docgenInfo,name:"AddCartButton",path:"src/components/HomePage/AddCartButton.tsx#AddCartButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HomePage/ProductItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_hooks_useControlCart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useControlCart.ts"),_styles_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/theme.ts"),_AddCartButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/HomePage/AddCartButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductItem=function ProductItem(_ref){var product=_ref.product,id=product.id,name=product.name,price=product.price,imageUrl=product.imageUrl,_addProductToCart=(0,_hooks_useControlCart__WEBPACK_IMPORTED_MODULE_1__.Z)().addProductToCart,localePrice=price.toLocaleString("ko-KR"),slicedPrice=localePrice.length>15?"".concat(localePrice.slice(0,15),"..."):localePrice;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Picture,{title:name,src:imageUrl,alt:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(InformationWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TitleAndPriceWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Title,{title:name,children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Price,{title:"".concat(localePrice," 원"),children:[slicedPrice," 원"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddCartButton__WEBPACK_IMPORTED_MODULE_3__.Z,{id:id,addProductToCart:function addProductToCart(){return _addProductToCart(product)}})]})]})},Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  width: 282px;\n  cursor: pointer;\n"]))),Picture=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.img(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  margin-bottom: 18px;\n"]))),InformationWrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-left: 10px;\n"]))),TitleAndPriceWrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100% - 80px);\n"]))),Title=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.span(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n\n  letter-spacing: 0.5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n\n  color: ",";\n"])),_styles_theme__WEBPACK_IMPORTED_MODULE_2__.rS.colors.primaryBlack),Price=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.span(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n\n  letter-spacing: 0.5px;\n\n  color: ",";\n"])),_styles_theme__WEBPACK_IMPORTED_MODULE_2__.rS.colors.primaryBlack);__webpack_exports__.Z=react__WEBPACK_IMPORTED_MODULE_0__.memo(ProductItem);try{ProductItem.displayName="ProductItem",ProductItem.__docgenInfo={description:"",displayName:"ProductItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductInformation"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HomePage/ProductItem.tsx#ProductItem"]={docgenInfo:ProductItem.__docgenInfo,name:"ProductItem",path:"src/components/HomePage/ProductItem.tsx#ProductItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/HomePage/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return HomePage}});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),common=__webpack_require__("./src/constants/common.ts"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),hooks_useProductList=function useProductList(){var _useFetch=function useFetch(url,options){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),data=_useState2[0],setData=_useState2[1],_useState3=(0,react.useState)(!0),_useState4=(0,slicedToArray.Z)(_useState3,2),isLoading=_useState4[0],setIsLoading=_useState4[1],_useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),error=_useState6[0],setError=_useState6[1];return(0,react.useEffect)((function(){var fetchData=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){var response,_data;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,fetch(url,options);case 3:if((response=_context.sent).ok){_context.next=6;break}throw new Error("API 요청에 실패했습니다. status : ".concat(response.status));case 6:return _context.next=8,response.json();case 8:_data=_context.sent,setData(_data),setIsLoading(!1),_context.next=17;break;case 13:_context.prev=13,_context.t0=_context.catch(0),setError(_context.t0),setIsLoading(!0);case 17:case"end":return _context.stop()}}),_callee,null,[[0,13]])})));return function fetchData(){return _ref.apply(this,arguments)}}();fetchData()}),[url,options]),{data:data,isLoading:isLoading,error:error}}(common.z),originData=_useFetch.data,isLoading=_useFetch.isLoading,error=_useFetch.error,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),data=_useState2[0],setData=_useState2[1];return(0,react.useEffect)((function(){if(originData){var productList=originData.map((function(product){return{id:product.id,name:product.name,price:product.price,imageUrl:product.imageUrl}}));setData(productList)}}),[originData]),{data:data,isLoading:isLoading,error:error}},theme=__webpack_require__("./src/styles/theme.ts"),ProductItem=__webpack_require__("./src/components/HomePage/ProductItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n\n  grid-template-columns: repeat(4, 1fr);\n  gap: 80px 46px;\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 50px 46px;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 40px 46px;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(1, 1fr);\n    gap: 30px 46px;\n  }\n"])),theme.Uh.laptopL,theme.Uh.laptop,theme.Uh.tablet),HomePage=function ProductList(){var _useProductList=hooks_useProductList(),data=_useProductList.data,isLoading=_useProductList.isLoading;return(0,jsx_runtime.jsx)(Container,{children:isLoading?"로딩중...":null==data?void 0:data.map((function(product){return(0,jsx_runtime.jsx)(ProductItem.Z,{product:product},product.id)}))})}},"./src/components/common/Header/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return common_Header}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),cartAtom=__webpack_require__("./src/recoil/atoms/cartAtom.ts"),CartPage=__webpack_require__("./src/pages/CartPage/index.tsx"),HomePage=__webpack_require__("./src/pages/HomePage/index.tsx"),Layout=__webpack_require__("./src/components/common/Layout/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PAGE_PATH_HOME="/",PAGE_PATH_CART="cart",assets_images=((0,dist.aj)([{path:PAGE_PATH_HOME,element:(0,jsx_runtime.jsx)(Layout.Z,{children:(0,jsx_runtime.jsx)(HomePage.Z,{})})},{path:PAGE_PATH_CART,element:(0,jsx_runtime.jsx)(Layout.Z,{children:(0,jsx_runtime.jsx)(CartPage.Z,{})})}],{basename:"".concat(".")}),__webpack_require__("./src/assets/images.ts")),theme=__webpack_require__("./src/styles/theme.ts"),Wrapper=styled_components_browser_esm.zo.header(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  position: fixed;\n  top: 0;\n\n  width: 100%;\n  height: 80px;\n\n  padding: 0 20%;\n\n  background: ",";\n\n  z-index: 1;\n\n  @media "," {\n    padding: 0 5%;\n  }\n\n  @media "," {\n    padding: 0 10%;\n  }\n"])),theme.rS.colors.primaryBlack,theme.Uh.mobileS,theme.Uh.laptopL),Container=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]))),LogoTitle=styled_components_browser_esm.zo.h2(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  margin: 12px 0 0 20px;\n\n  font-weight: 900;\n  font-size: 40px;\n\n  color: ",";\n\n  @media "," {\n    display: none;\n  }\n\n  @media "," {\n    margin: 9px 0 0 15px;\n    font-size: 28px;\n  }\n"])),theme.rS.colors.white,theme.Uh.mobileS,theme.Uh.mobileL),Logo=styled_components_browser_esm.zo.img(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  height: 44px;\n\n  @media "," {\n    height: 22px;\n  }\n\n  @media "," {\n    height: 33px;\n  }\n"])),theme.Uh.mobileS,theme.Uh.mobileL),BucketText=styled_components_browser_esm.zo.h3(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  margin-right: 10px;\n\n  font-weight: 500;\n  font-size: 24px;\n\n  color: ",";\n\n  @media "," {\n    margin-right: 6px;\n    font-size: 16px;\n  }\n\n  @media "," {\n    margin-right: 8px;\n    font-size: 20px;\n  }\n"])),theme.rS.colors.white,theme.Uh.mobileS,theme.Uh.mobileL),BucketCount=styled_components_browser_esm.zo.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 26px;\n  height: 26px;\n\n  border-radius: 50%;\n\n  background: ",";\n  color: ",";\n\n  @media "," {\n    width: 20px;\n    height: 20px;\n    font-size: 12px;\n  }\n"])),theme.rS.colors.green,theme.rS.colors.white,theme.Uh.mobileS),StyledLink=(0,styled_components_browser_esm.zo)(dist.rU)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  text-decoration-line: none;\n"]))),common_Header=function Header(){var _useRecoilState=(0,es.FV)(cartAtom.c),cart=(0,slicedToArray.Z)(_useRecoilState,1)[0];return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(StyledLink,{to:PAGE_PATH_HOME,children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Logo,{src:assets_images.Z7,alt:"헤더 로고"}),(0,jsx_runtime.jsx)(LogoTitle,{children:"SHOP"})]})}),(0,jsx_runtime.jsx)(StyledLink,{to:PAGE_PATH_CART,children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(BucketText,{children:"장바구니"}),(0,jsx_runtime.jsx)(BucketCount,{children:cart.length})]})})]})}},"./src/components/common/Layout/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Header/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Layout=function Layout(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_0__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Main,{children:children})]})},Main=styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.main(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  position: relative;\n  top: 80px;\n"])));__webpack_exports__.Z=Layout;try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Layout/index.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/components/common/Layout/index.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./src/pages/HomePage/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_components_HomePage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/HomePage/index.tsx"),_styles_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  display: flex;\n  justify-content: center;\n\n  padding: 61px 20%;\n\n  @media "," {\n    padding: 61px 5%;\n  }\n\n  @media "," {\n    padding: 61px 10%;\n  }\n"])),_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Uh.mobileS,_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Uh.laptopL);__webpack_exports__.Z=function HomePage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_HomePage__WEBPACK_IMPORTED_MODULE_0__.Z,{})})}}}]);