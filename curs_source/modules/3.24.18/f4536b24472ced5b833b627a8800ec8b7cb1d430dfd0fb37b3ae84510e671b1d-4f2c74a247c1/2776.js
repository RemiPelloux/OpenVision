function iO(e,t){let r;try{r=JSON.parse(e)}catch(n){const o=n instanceof Error?n.message:String(n);throw new Error(`cannot decode message ${t} from JSON: ${o}`,{cause:n})}return sO(e,t),r}
