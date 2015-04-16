/**
 * SvgWrap 1.0.0
 * @copyright Gilbert Sinnott 
 * @license MIT License (see LICENSE.txt)
 */
function SvgWrap(e,t){var i=this;this.getArray=function(e){for(var t=[],i=0;i<e.length;i++)t[i]=e[i];return t},this.isDefinition=function(e){return"linearGradient"===e.nodeName||"radialGradient"===e.nodeName||"defs"===e.nodeName?!0:!1},this.extend=function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},this.options={width:"100%",height:"",responsive:!0,levels:0},t&&this.extend(this.options,t),this.levels=this.options.levels?this.options.levels:999999,this.SvgWrapElement=function(e){var t=this;this.svg=e.cloneNode(),this.svg.innerHTML="",this.constructDiv=function(e,s){var n=document.createElement("div");return n.id=i.isDefinition(e)?"":e.id,n.classList.add("svg-wrapper"),n.classList.add("svg-level-"+s),n.classList.add(e.nodeName),e.getAttribute("class")&&n.classList.add(e.getAttribute("class")),n.style.position="absolute",n.style.height=0,n.style.width="100%",n.style.top=0,n.style.left=0,n.style.paddingTop=100/t.size.w*t.size.h+"%",n},this.appendAllChildren=function(e,s,n){n+=1,e.forEach(function(e){if(3!==e.nodeType){var l=t.constructDiv(e,n),a=t.svg.cloneNode();if(window.svg=a,a.setAttribute("viewBox","0 0 "+a.width.baseVal.value+" "+a.height.baseVal.value),a.setAttribute("width",""),a.setAttribute("height",""),a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.appendChild(e),l.appendChild(a),s.appendChild(l),!i.isDefinition(e)){e.setAttribute("id","");var h=e.childNodes;h&&n<i.levels&&t.appendAllChildren(i.getArray(h),l,n)}}})},this.size={w:e.viewBox.baseVal.width||e.width.baseVal.value,h:e.viewBox.baseVal.height||e.height.baseVal.value},this.replacement=this.constructDiv(e,0),this.replacement.style.position="relative",this.replacement.style.height=i.options.height,this.replacement.style.width=i.options.width,i.options.responsive||(this.replacement.style.width=this.size.w+"px",this.replacement.style.height=this.size.h+"px",this.replacement.style.paddingTop="");var s=e.childNodes;s&&this.appendAllChildren(i.getArray(s),this.replacement,0),e.setAttribute("id",""),e.setAttribute("class",""),e.parentNode.replaceChild(this.replacement,e)};var s=[];return this.getArray(document.querySelectorAll(e)).forEach(function(e){var t=new i.SvgWrapElement(e);s.push(t.replacement)}),s}