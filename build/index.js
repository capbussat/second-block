(()=>{"use strict";var e,o={227:()=>{const e=window.wp.blocks,o=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),n=JSON.parse('{"u2":"create-block/second-block"}');(0,e.registerBlockType)(n.u2,{edit:function(e){return console.log(e),(0,o.createElement)("div",(0,r.useBlockProps)(),(0,o.createElement)(r.InnerBlocks,{allowedBlocks:["core/image","core/paragraph","core/columns","core/heading","wp-gb/inner-blocks"]}))},save:function(e){return console.log(e),(0,o.createElement)("div",r.useBlockProps.save(),(0,o.createElement)("div",null,(0,o.createElement)(r.InnerBlocks.Content,null)))}})}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var c=r[e]={exports:{}};return o[e](c,c.exports,n),c.exports}n.m=o,e=[],n.O=(o,r,l,c)=>{if(!r){var t=1/0;for(p=0;p<e.length;p++){r=e[p][0],l=e[p][1],c=e[p][2];for(var s=!0,a=0;a<r.length;a++)(!1&c||t>=c)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(s=!1,c<t&&(t=c));if(s){e.splice(p--,1);var i=l();void 0!==i&&(o=i)}}return o}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[r,l,c]},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={826:0,431:0};n.O.j=o=>0===e[o];var o=(o,r)=>{var l,c,t=r[0],s=r[1],a=r[2],i=0;if(t.some((o=>0!==e[o]))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(a)var p=a(n)}for(o&&o(r);i<t.length;i++)c=t[i],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(p)},r=self.webpackChunksecond_block=self.webpackChunksecond_block||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var l=n.O(void 0,[431],(()=>n(227)));l=n.O(l)})();