(self.webpackChunkstrapi_medusa=self.webpackChunkstrapi_medusa||[]).push([[5516],{82036:function(e,t,a){var n;e.exports=(n=a(67294),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=187)}({0:function(e,t){e.exports=n},187:function(e,t,a){"use strict";a.r(t);var n=a(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",r({width:"1em",height:"1em",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 01-.14-.343L11.858.058a.2.2 0 01.282 0l9.513 9.4a.2.2 0 01-.14.343H13.57v8.47zM2.2 21.095a.2.2 0 00-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 00.2-.2v-2.424a.2.2 0 00-.2-.2H2.2z",fill:"#212134"}))}}}))},26122:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(23724),r=a(68547),l=a(50613),i=function(e){var t=(0,r.useNotification)();return(0,n.useQuery)("list-installed-plugins",(function(){return(0,l.fetchInstalledPlugins)()}),{onSuccess:function(){e&&e()},onError:function(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};t.default=i},50613:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchInstalledPlugins=void 0;var r=n(a(87757)),l=n(a(48926)),i=a(53777),u=function(){var e=(0,l.default)(r.default.mark((function e(){var t,a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.axiosInstance.get("/admin/plugins");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchInstalledPlugins=u},41853:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(23724),r=a(68547),l=a(12349),i=function(e){var t=(0,r.useNotification)();return(0,n.useQuery)("list-marketplace-plugins",(function(){return(0,l.fetchMarketplacePlugins)()}),{onSuccess:function(){e&&e()},onError:function(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};t.default=i},12349:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchMarketplacePlugins=void 0;var r=n(a(87757)),l=n(a(59713)),i=n(a(48926)),u=n(a(9669));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=function(){var e=(0,i.default)(r.default.mark((function e(){var t,a,n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("".concat("https://market-api.strapi.io","/plugins"));case 2:return t=e.sent,a=t.data,n=s(s({},a),{},{data:a.data.filter((function(e){return"v4"===e.attributes.strapiCompatibility}))}),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchMarketplacePlugins=d},39437:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyPluginGrid=void 0;var r=n(a(67294)),l=n(a(78384)),i=a(5493),u=a(78862),o=(0,l.default)(i.Box).withConfig({displayName:"EmptyPluginGrid__EmptyPluginCard",componentId:"sc-lmx01e-0"})(["background:",";opacity:0.33;"],(function(e){var t=e.theme;return"linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ".concat(t.colors.neutral150," 100%)")}));t.EmptyPluginGrid=function(){return r.default.createElement(u.GridLayout,null,Array(12).fill(null).map((function(e,t){return r.default.createElement(o,{key:"empty-plugin-card-".concat(t),height:"234px",hasRadius:!0})})))}},63564:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyPluginSearch=void 0;var r=n(a(67294)),l=n(a(45697)),i=a(49425),u=a(5493),o=a(67826),s=a(15804),d=n(a(85407)),c=a(39437),f=function(e){var t=e.content;return r.default.createElement(u.Box,{position:"relative"},r.default.createElement(c.EmptyPluginGrid,null),r.default.createElement(u.Box,{position:"absolute",top:11,width:"100%"},r.default.createElement(o.Flex,{alignItems:"center",justifyContent:"center",direction:"column"},r.default.createElement(s.Icon,{as:d.default,color:"",width:"160px",height:"88px"}),r.default.createElement(u.Box,{paddingTop:6},r.default.createElement(i.Typography,{variant:"delta",as:"p",textColor:"neutral600"},t)))))};t.EmptyPluginSearch=f,f.propTypes={content:l.default.string.isRequired}},53366:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=n(a(45697)),i=a(97132),u=a(74855),o=a(68547),s=a(5493),d=a(15804),c=a(49425),f=n(a(84734)),p=n(a(67483)),g=a(19408),m=function(e){var t=e.isInstalled,a=e.isInDevelopmentMode,n=e.commandToCopy,l=(0,o.useNotification)(),m=(0,i.useIntl)().formatMessage,y=(0,o.useTracking)().trackUsage;return t?r.default.createElement(s.Box,{paddingLeft:4},r.default.createElement(d.Icon,{as:f.default,marginRight:2,width:12,height:12,color:"success600"}),r.default.createElement(c.Typography,{variant:"omega",textColor:"success600",fontWeight:"bold"},m({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):a?r.default.createElement(u.CopyToClipboard,{onCopy:function(){y("willInstallPlugin"),l({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})},text:n},r.default.createElement(g.Button,{size:"S",startIcon:r.default.createElement(p.default,null),variant:"secondary"},m({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"}))):null};m.propTypes={isInstalled:l.default.bool.isRequired,isInDevelopmentMode:l.default.bool.isRequired,commandToCopy:l.default.string.isRequired};var y=m;t.default=y},21767:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=n(a(45697)),i=a(97132),u=n(a(78384)),o=a(5493),s=a(9008),d=a(49425),c=a(60985),f=a(67826),p=a(15804),g=a(93355),m=n(a(43257)),y=n(a(23942)),v=a(68547),h=n(a(22139)),b=n(a(53366)),P=(0,u.default)(d.Typography).withConfig({displayName:"PluginCard__EllipsisText",componentId:"sc-1mq536v-0"})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"]),M=function(e){var t=e.plugin,a=e.installedPluginNames,n=e.useYarn,l=e.isInDevelopmentMode,u=t.attributes,M=(0,i.useIntl)().formatMessage,k=(0,v.useTracking)().trackUsage,E=a.includes(u.npmPackageName),O=n?"yarn add ".concat(u.npmPackageName):"npm install ".concat(u.npmPackageName),x=M({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"});return r.default.createElement(f.Flex,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:6,paddingBottom:4,paddingLeft:6,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal"},r.default.createElement(o.Box,null,r.default.createElement(o.Box,{as:"img",src:u.logo.url,alt:"".concat(u.name," logo"),hasRadius:!0,width:11,height:11}),r.default.createElement(o.Box,{paddingTop:4},r.default.createElement(d.Typography,{as:"h3",variant:"delta"},r.default.createElement(f.Flex,{alignItems:"center"},u.name,u.validated&&!u.madeByStrapi&&r.default.createElement(g.Tooltip,{description:M({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},r.default.createElement(f.Flex,null,r.default.createElement(p.Icon,{as:y.default,marginLeft:2,color:"success600"}))),u.madeByStrapi&&r.default.createElement(g.Tooltip,{description:x},r.default.createElement(f.Flex,null,r.default.createElement(o.Box,{as:"img",src:h.default,alt:x,marginLeft:1,width:6,height:"auto"})))))),r.default.createElement(o.Box,{paddingTop:2},r.default.createElement(P,{as:"p",variant:"omega",textColor:"neutral600"},u.description))),r.default.createElement(s.Stack,{horizontal:!0,spacing:2,style:{alignSelf:"flex-end"},paddingTop:6},r.default.createElement(c.LinkButton,{size:"S",href:"https://market.strapi.io/plugins/".concat(u.slug),endIcon:r.default.createElement(m.default,null),"aria-label":M({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:u.name}),variant:"tertiary",onClick:function(){return k("didPluginLearnMore")}},M({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"Learn more"})),r.default.createElement(b.default,{isInstalled:E,isInDevelopmentMode:l,commandToCopy:O})))};M.defaultProps={isInDevelopmentMode:!1},M.propTypes={plugin:l.default.shape({id:l.default.string.isRequired,attributes:l.default.shape({name:l.default.string.isRequired,description:l.default.string.isRequired,slug:l.default.string.isRequired,npmPackageName:l.default.string.isRequired,npmPackageUrl:l.default.string.isRequired,repositoryUrl:l.default.string.isRequired,logo:l.default.object.isRequired,developerName:l.default.string.isRequired,validated:l.default.bool.isRequired,madeByStrapi:l.default.bool.isRequired,strapiCompatibility:l.default.oneOf(["v3","v4"]).isRequired}).isRequired}).isRequired,installedPluginNames:l.default.arrayOf(l.default.string).isRequired,useYarn:l.default.bool.isRequired,isInDevelopmentMode:l.default.bool};var k=M;t.default=k},70569:(e,t,a)=>{"use strict";var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MarketPlacePage=void 0;var l=n(a(63038)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=a(97132),o=a(15482),s=a(23724),d=n(a(63852)),c=a(68547),f=a(34626),p=a(78862),g=a(62031),m=a(21263),y=a(5493),v=a(60985),h=a(84686),b=n(a(82036)),P=n(a(21767)),M=a(63564),k=a(19297),E=n(a(26122)),O=n(a(41853)),x=n(a(13240));function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}var j=function(){var e=(0,u.useIntl)().formatMessage,t=(0,c.useTracking)().trackUsage,a=(0,h.useNotifyAT)().notifyStatus,n=(0,i.useRef)(t),r=(0,c.useNotification)(),x=(0,i.useState)(""),w=(0,l.default)(x,2),j=w[0],I=w[1],_=(0,c.useAppInfos)().autoReload;(0,c.useFocusWhenNavigate)();var S=e({id:"global.marketplace",defaultMessage:"Marketplace"}),T=(0,O.default)((function(){a(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:S}))})),R=T.status,C=T.data,B=(0,E.default)(),q=B.status,N=B.data,L=(0,s.useQuery)("app-information",k.fetchAppInformation,{onError:function(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),D=L.data,A=L.status,G=[R,q,A].includes("loading"),W=[R,q,A].includes("error");if((0,i.useEffect)((function(){n.current("didGoToMarketplace")}),[]),(0,i.useEffect)((function(){_||r({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})}),[r,_]),W)return i.default.createElement(p.Layout,null,i.default.createElement(p.ContentLayout,null,i.default.createElement(y.Box,{paddingTop:8},i.default.createElement(c.AnErrorOccurred,null))));if(G)return i.default.createElement(p.Layout,null,i.default.createElement(g.Main,{"aria-busy":!0},i.default.createElement(c.LoadingIndicatorPage,null)));var H,F,z=(H=C.data,F=j,(0,d.default)(H,F,{keys:[{threshold:d.default.rankings.WORD_STARTS_WITH,key:"attributes.name"},{threshold:d.default.rankings.WORD_STARTS_WITH,key:"attributes.description"}]})),U=N.plugins.map((function(e){return e.packageName}));return i.default.createElement(p.Layout,null,i.default.createElement(g.Main,null,i.default.createElement(o.Helmet,{title:e({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),i.default.createElement(p.HeaderLayout,{title:e({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:e({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:i.default.createElement(v.LinkButton,{startIcon:i.default.createElement(b.default,null),variant:"tertiary",href:"https://market.strapi.io/submit-plugin",onClick:function(){return t("didSubmitPlugin")}},e({id:"admin.pages.MarketPlacePage.submit.plugin.link",defaultMessage:"Submit your plugin"}))}),i.default.createElement(p.ContentLayout,null,i.default.createElement(y.Box,{width:"25%",paddingBottom:4},i.default.createElement(m.Searchbar,{name:"searchbar",onClear:function(){return I("")},value:j,onChange:function(e){return I(e.target.value)},clearLabel:e({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the plugin search"}),placeholder:e({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search for a plugin"})},e({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search for a plugin"}))),j.length>0&&!z.length?i.default.createElement(M.EmptyPluginSearch,{content:e({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:j})}):i.default.createElement(f.Grid,{gap:4},z.map((function(e){return i.default.createElement(f.GridItem,{col:4,s:6,xs:12,style:{height:"100%"},key:e.id},i.default.createElement(P.default,{plugin:e,installedPluginNames:U,useYarn:D.data.useYarn,isInDevelopmentMode:_}))}))))))};t.MarketPlacePage=j;var I=function(){return i.default.createElement(c.CheckPagePermissions,{permissions:x.default.marketplace.main},i.default.createElement(j,null))};t.default=I},19297:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAppInformation=void 0;var r=n(a(87757)),l=n(a(48926)),i=a(53777),u=function(){var e=(0,l.default)(r.default.mark((function e(){var t,a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.axiosInstance.get("/admin/information");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchAppInformation=u},22139:(e,t,a)=>{"use strict";e.exports=a.p+"90f49a385afb000fb1d4.svg"}}]);