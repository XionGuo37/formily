(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{245:function(e,t,n){var r={"./bash":159,"./bash.js":159,"./css":160,"./css.js":160,"./htmlbars":161,"./htmlbars.js":161,"./javascript":162,"./javascript.js":162,"./scss":163,"./scss.js":163,"./typescript":164,"./typescript.js":164};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=245},85:function(e,t,n){"use strict";var r=n(223),a=(n(224),n(225)),o=(n(226),function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"connect",className:"react-demo-h1"},"connect"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"包装字段组件，让字段组件只需要支持value/defaultValue/onChange属性即可快速接入表单"),r.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),r.createElement(a,{code:"type connect({\n  valueName : String, //控制表单组件\n  eventName : String, //事件名称\n  getProps(outputProps : Object,fieldProps : FieldRenderProps) : Object //字段组件props transformer\n  getComponent( //字段组件component transformer\n    target : ReactComponent , \n    outputProps : Object,\n    fieldProps : FieldRenderProps\n  ) : ReactComponent\n})(Target : ReactComponent)\n",justCode:!0,lang:"typescript"}),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(a,{code:"import {connect} from '@alife/rs-uform'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(a,{code:"import {registerFormField,connect} from '@alife/rs-uform'\n\nregisterFormField(\n  'string',\n  connect()(props => <input {...props} value={props.value || ''} />)\n)\n",justCode:!0,lang:"javascript"}))});o.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=o}}]);
//# sourceMappingURL=bundle.38.js.map