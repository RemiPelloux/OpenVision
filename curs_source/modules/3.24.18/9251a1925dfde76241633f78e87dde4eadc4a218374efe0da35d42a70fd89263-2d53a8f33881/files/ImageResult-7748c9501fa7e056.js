var ImageResult;
export { ImageResult };
var __wakaru_init_ImageResult_initialized = false;
export function init_ImageResult() {
if (__wakaru_init_ImageResult_initialized) return;
__wakaru_init_ImageResult_initialized = true;
ImageResult = class {
    pages = [];
    total = 0;
    getPageImage(num, name17) {
        for (const pageData of this.pages){
            if (pageData.pageNumber === num) {
                for (const img of pageData.images){
                    if (img.name === name17) {
                        return img;
                    }
                }
            }
        }
        return null;
    }
    constructor(total){
        this.total = total;
    }
};

}
