function fv(e){if(typeof e=="string")e=Number(e);else if(typeof e!="number")throw new Error("invalid uint32: "+typeof e);if(!Number.isInteger(e)||e>V_||e<0)throw new Error("invalid uint32: "+e)}
