var customAlphabet;
export { customAlphabet };
var __wakaru_init_non_secure_initialized = false;
export function init_non_secure() {
if (__wakaru_init_non_secure_initialized) return;
__wakaru_init_non_secure_initialized = true;
customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i = size | 0;
        while(i-- > 0){
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};

}
