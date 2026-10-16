function iR({children:e,isPresent:t,anchorX:r,anchorY:n,root:o,pop:i}){const s=vL(),c=hy(null),l=hy({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:m}=bL(lm),u=i!==!1?e.props?.ref??e?.ref:void 0,d=aR(c,u);return yL(()=>{const{width:p,height:h,top:f,left:v,right:x,bottom:g,direction:y}=l.current;if(t||i===!1||!c.current||!p||!h)return;const w=y==="rtl",b=r==="left"?w?`right: ${x}`:`left: ${v}`:w?`left: ${v}`:`right: ${x}`,T=n==="bottom"?`bottom: ${g}`:`top: ${f}`;c.current.dataset.motionPopId=s;const R=document.createElement("style");m&&(R.nonce=m);const E=o??document.head;return E.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${b}px !important;
            ${T}px !important;
          }
        `),()=>{c.current?.removeAttribute("data-motion-pop-id"),E.contains(R)&&E.removeChild(R)}},[t]),gL(jj,{isPresent:t,childRef:c,sizeRef:l,pop:i,children:i===!1?e:fy.cloneElement(e,{ref:d})})}
