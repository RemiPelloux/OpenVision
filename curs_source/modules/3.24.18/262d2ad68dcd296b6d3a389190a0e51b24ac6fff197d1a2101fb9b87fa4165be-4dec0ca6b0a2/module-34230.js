module.exports = {
    nanoid: (e = 21)=>{
        let t = "", r = 0 | e;
        for(; r-- > 0;)t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
        return t;
    },
    customAlphabet: (e, t = 21)=>(r = t)=>{
            let n = "", o = 0 | r;
            for(; o-- > 0;)n += e[Math.random() * e.length | 0];
            return n;
        }
};
