function sb(e,t){const r=new Uint8Array(t.length+5);r.set(t,5);const n=new DataView(r.buffer,r.byteOffset,r.byteLength);return n.setUint8(0,e),n.setUint32(1,t.length),r}
