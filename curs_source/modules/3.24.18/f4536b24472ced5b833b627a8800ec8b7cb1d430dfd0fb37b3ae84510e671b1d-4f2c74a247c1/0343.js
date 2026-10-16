function oS({paymentMethodId:e,className:t}){const{t:r}=Be(),{attempts:n}=Nt(),o=n[e];return o?.status!=="failed"?null:qt("p",{role:"alert",className:t,children:mp(o.failure,r)})}
