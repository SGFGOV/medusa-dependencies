(self.webpackChunkstrapi_medusa=self.webpackChunkstrapi_medusa||[]).push([[5509],{64020:(e,t,n)=>{!function(e){"use strict";function t(e){e.state.markedSelection&&e.operation((function(){f(e)}))}function n(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation((function(){a(e)}))}e.defineOption("styleSelectedText",!1,(function(r,o,i){var l=i&&i!=e.Init;o&&!l?(r.state.markedSelection=[],r.state.markedSelectionStyle="string"==typeof o?o:"CodeMirror-selectedtext",c(r),r.on("cursorActivity",t),r.on("change",n)):!o&&l&&(r.off("cursorActivity",t),r.off("change",n),a(r),r.state.markedSelection=r.state.markedSelectionStyle=null)}));var r=8,o=e.Pos,i=e.cmpPos;function l(e,t,n,l){if(0!=i(t,n))for(var a=e.state.markedSelection,c=e.state.markedSelectionStyle,f=t.line;;){var s=f==t.line?t:o(f,0),u=f+r,m=u>=n.line,d=m?n:o(u,0),S=e.markText(s,d,{className:c});if(null==l?a.push(S):a.splice(l++,0,S),m)break;f=u}}function a(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function c(e){a(e);for(var t=e.listSelections(),n=0;n<t.length;n++)l(e,t[n].from(),t[n].to())}function f(e){if(!e.somethingSelected())return a(e);if(e.listSelections().length>1)return c(e);var t=e.getCursor("start"),n=e.getCursor("end"),o=e.state.markedSelection;if(!o.length)return l(e,t,n);var f=o[0].find(),s=o[o.length-1].find();if(!f||!s||n.line-t.line<=r||i(t,s.to)>=0||i(n,f.from)<=0)return c(e);for(;i(t,f.from)>0;)o.shift().clear(),f=o[0].find();for(i(t,f.from)<0&&(f.to.line-t.line<r?(o.shift().clear(),l(e,t,f.to,0)):l(e,t,f.from,0));i(n,s.to)<0;)o.pop().clear(),s=o[o.length-1].find();i(n,s.to)>0&&(n.line-s.from.line<r?(o.pop().clear(),l(e,s.from,n)):l(e,s.to,n))}}(n(4631))}}]);