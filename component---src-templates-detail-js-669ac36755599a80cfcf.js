(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7H9b":function(t,e,n){},EujP:function(t,e,n){"use strict";n("m210"),n("4DPX"),n("q8oJ"),n("C9fy"),n("nWfQ"),n("LagC"),n("pS08"),n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("eMsz"),n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==_(t)&&"function"!=typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=f(n("TSYQ")),i=f(n("BGR+")),s=f(n("t23M")),a=n("vgIT"),c=n("RggE"),u=n("mFXC");function f(t){return t&&t.__esModule?t:{default:t}}function l(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var O,w=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":_(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};function E(){return"undefined"!=typeof window?window:null}!function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"}(O||(O={}));var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(l,t);var e,n,a,c,f=(e=l,function(){var t,n=g(e);if(m()){var r=g(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return b(this,t)});function l(){var t;return d(this,l),(t=f.apply(this,arguments)).state={status:O.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var e=t.props.offsetBottom,n=t.props.offsetTop;return void 0===e&&void 0===n&&(n=0),n},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(e){t.placeholderNode=e},t.saveFixedNode=function(e){t.fixedNode=e},t.measure=function(){var e=t.state,n=e.status,r=e.lastAffix,o=t.props.onChange,i=t.getTargetFunc();if(n===O.Prepare&&t.fixedNode&&t.placeholderNode&&i){var s=t.getOffsetTop(),a=t.getOffsetBottom(),c=i();if(c){var f={status:O.None},l=(0,u.getTargetRect)(c),h=(0,u.getTargetRect)(t.placeholderNode),p=(0,u.getFixedTop)(h,l,s),d=(0,u.getFixedBottom)(h,l,a);void 0!==p?(f.affixStyle={position:"fixed",top:p,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}):void 0!==d&&(f.affixStyle={position:"fixed",bottom:d,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}),f.lastAffix=!!f.affixStyle,o&&r!==f.lastAffix&&o(f.lastAffix),t.setState(f)}}},t.prepareMeasure=function(){t.setState({status:O.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t.render=function(){var e=t.context.getPrefixCls,n=t.state,a=n.affixStyle,c=n.placeholderStyle,u=t.props,f=u.prefixCls,l=u.children,d=(0,o.default)(p({},e("affix",f),a)),v=(0,i.default)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return r.createElement(s.default,{onResize:function(){t.updatePosition()}},r.createElement("div",h({},v,{ref:t.savePlaceholderNode}),a&&r.createElement("div",{style:c,"aria-hidden":"true"}),r.createElement("div",{className:d,ref:t.saveFixedNode,style:a},r.createElement(s.default,{onResize:function(){t.updatePosition()}},l))))},t}return n=l,(a=[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,e=this.props.target;return void 0!==e?e:t||E}},{key:"componentDidMount",value:function(){var t=this,e=this.getTargetFunc();e&&(this.timeout=setTimeout((function(){(0,u.addObserveTarget)(e(),t),t.updatePosition()})))}},{key:"componentDidUpdate",value:function(t){var e=this.state.prevTarget,n=this.getTargetFunc(),r=null;n&&(r=n()||null),e!==r&&((0,u.removeObserveTarget)(this),r&&((0,u.addObserveTarget)(r,this),this.updatePosition()),this.setState({prevTarget:r})),t.offsetTop===this.props.offsetTop&&t.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),(0,u.removeObserveTarget)(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),e=this.state.affixStyle;if(t&&e){var n=this.getOffsetTop(),r=this.getOffsetBottom(),o=t();if(o&&this.placeholderNode){var i=(0,u.getTargetRect)(o),s=(0,u.getTargetRect)(this.placeholderNode),a=(0,u.getFixedTop)(s,i,n),c=(0,u.getFixedBottom)(s,i,r);if(void 0!==a&&e.top===a||void 0!==c&&e.bottom===c)return}}this.prepareMeasure()}}])&&v(n.prototype,a),c&&v(n,c),l}(r.Component);T.contextType=a.ConfigContext,w([(0,c.throttleByAnimationFrameDecorator)()],T.prototype,"updatePosition",null),w([(0,c.throttleByAnimationFrameDecorator)()],T.prototype,"lazyUpdatePosition",null);var P=T;e.default=P},bUaZ:function(t,e,n){"use strict";n("VEUW"),n("7H9b")},bdgK:function(t,e,n){"use strict";(function(t){n("eMsz"),n("AqHK"),n("pS08"),n("U6Bt"),n("Ggvi"),n("OeI1"),n("sc67"),n("1dPr"),n("n7j8"),n("JHok"),n("R48M"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&c()}function a(){s(i)}function c(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(a,e);o=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},h=m(0,0,0,0);function p(t){return parseFloat(t)||0}function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=l(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=p(i)}return e}(r),i=o.left+o.right,s=o.top+o.bottom,a=p(r.width),c=p(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==e&&(a-=d(r,"left","right")+i),Math.round(c+s)!==n&&(c-=d(r,"top","bottom")+s)),!function(t){return t===l(t).document.documentElement}(t)){var u=Math.round(a+i)-e,f=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(f)&&(c-=f)}return m(o.left,o.top,a,c)}var y="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function b(t){return o?y(t)?function(t){var e=t.getBBox();return m(0,0,e.width,e.height)}(t):v(t):h}function m(t,e,n,r){return{x:t,y:e,width:n,height:r}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=b(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n,r,o,i,s,a,c,u=(r=(n=e).x,o=n.y,i=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),f(c,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),c);f(this,{target:t,contentRect:u})},O=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new r,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new O(e,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var T=void 0!==i.ResizeObserver?i.ResizeObserver:E;e.a=T}).call(this,n("yLpj"))},iTjv:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c})),n.d(e,"pageQuery",(function(){return u}));n("bUaZ");var r=n("EujP"),o=n.n(r),i=n("q1tI"),s=n.n(i),a=n("BE/f");function c(t){var e=t.data.markdownRemark,n=e.frontmatter,r=e.html,i=e.timeToRead,c=e.tableOfContents,u=n.title,f=n.featuredImage,l=n.date;return s.a.createElement(a.default,{featuredImage:f,title:u},s.a.createElement("div",{className:"blog-post-title"},s.a.createElement("h2",null,u),s.a.createElement("div",null,"发布时间：",l),s.a.createElement("div",null,"预计阅读需要 ",i," 分钟")),s.a.createElement("div",{className:"blog-wrap"},s.a.createElement(o.a,{offsetTop:100},s.a.createElement("div",{className:"catalog",dangerouslySetInnerHTML:{__html:'<h5 style="margin-left: 10px">目录</h5>'+c}})),s.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:r}})))}var u="1825268500"},mFXC:function(t,e,n){"use strict";n("OeI1"),n("wZFJ"),n("JHok"),n("v9g0"),n("R48M"),Object.defineProperty(e,"__esModule",{value:!0}),e.getTargetRect=function(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}},e.getFixedTop=function(t,e,n){if(void 0!==n&&e.top>t.top-n)return n+e.top;return},e.getFixedBottom=function(t,e,n){if(void 0!==n&&e.bottom<t.bottom+n){var r=window.innerHeight-e.bottom;return n+r}return},e.getObserverEntities=function(){return s},e.addObserveTarget=function(t,e){if(!t)return;var n=s.find((function(e){return e.target===t}));n?n.affixList.push(e):(n={target:t,affixList:[e],eventHandlers:{}},s.push(n),i.forEach((function(e){n.eventHandlers[e]=(0,o.default)(t,e,(function(){n.affixList.forEach((function(t){t.lazyUpdatePosition()}))}))})))},e.removeObserveTarget=function(t){var e=s.find((function(e){var n=e.affixList.some((function(e){return e===t}));return n&&(e.affixList=e.affixList.filter((function(e){return e!==t}))),n}));e&&0===e.affixList.length&&(s=s.filter((function(t){return t!==e})),i.forEach((function(t){var n=e.eventHandlers[t];n&&n.remove&&n.remove()})))};var r,o=(r=n("rsGM"))&&r.__esModule?r:{default:r};var i=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],s=[]},t23M:function(t,e,n){"use strict";n.r(e);n("AqHK"),n("pS08"),n("LagC"),n("R48M"),n("+ar0"),n("xtjI"),n("JHok"),n("OeI1"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("m210"),n("4DPX");var r=n("q1tI"),o=n("i8i4"),i=n.n(o);var s=n("Zm9Q"),a=n("Kwbf");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){"function"==typeof t?t(e):"object"===c(t)&&t&&"current"in t&&(t.current=e)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){e.forEach((function(e){u(e,t)}))}}var l=n("bdgK");function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(){var t;return y(this,e),(t=m(this,g(e).apply(this,arguments))).resizeObserver=null,t.childNode=null,t.currentElement=null,t.state={width:0,height:0},t.onResize=function(e){var n=t.props.onResize,r=e[0].target,o=r.getBoundingClientRect(),i=o.width,s=o.height,a=r.offsetWidth,c=r.offsetHeight,u=Math.floor(i),f=Math.floor(s);if(t.state.width!==u||t.state.height!==f){var l={width:u,height:f};t.setState(l),n&&n(d({},l,{offsetWidth:a,offsetHeight:c}))}},t.setChildNode=function(e){t.childNode=e},t}var n,o,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var t,e=(t=this.childNode||this)instanceof HTMLElement?t:i.a.findDOMNode(t);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new l.a(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var t=this.props.children,e=Object(s.a)(t);if(e.length>1)Object(a.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===e.length)return Object(a.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n,o=e[0];if(r.isValidElement(o)&&(!(n=o).type||!n.type.prototype||n.type.prototype.render)&&("function"!=typeof n||!n.prototype||n.prototype.render)){var i=o.ref;e[0]=r.cloneElement(o,{ref:f(i,this.setChildNode)})}return 1===e.length?e[0]:e.map((function(t,e){return!r.isValidElement(t)||"key"in t&&null!==t.key?t:r.cloneElement(t,{key:"".concat("rc-observer-key","-").concat(e)})}))}}])&&b(n.prototype,o),c&&b(n,c),e}(r.Component);O.displayName="ResizeObserver";e.default=O}}]);
//# sourceMappingURL=component---src-templates-detail-js-669ac36755599a80cfcf.js.map