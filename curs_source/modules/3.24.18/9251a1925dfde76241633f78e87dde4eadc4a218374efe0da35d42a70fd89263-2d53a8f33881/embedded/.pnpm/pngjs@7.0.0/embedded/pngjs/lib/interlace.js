var __wakaru_require_interlace_cache;
export function require_interlace() {
if (__wakaru_require_interlace_cache) return __wakaru_require_interlace_cache;
var exports2 = {};
__wakaru_require_interlace_cache = exports2;
"use strict";
var imagePasses = [
    {
        x: [
            0
        ],
        y: [
            0
        ]
    },
    {
        x: [
            4
        ],
        y: [
            0
        ]
    },
    {
        x: [
            0,
            4
        ],
        y: [
            4
        ]
    },
    {
        x: [
            2,
            6
        ],
        y: [
            0,
            4
        ]
    },
    {
        x: [
            0,
            2,
            4,
            6
        ],
        y: [
            2,
            6
        ]
    },
    {
        x: [
            1,
            3,
            5,
            7
        ],
        y: [
            0,
            2,
            4,
            6
        ]
    },
    {
        x: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        y: [
            1,
            3,
            5,
            7
        ]
    }
];
exports2.getImagePasses = function(width, height) {
    let images = [];
    let xLeftOver = width % 8;
    let yLeftOver = height % 8;
    let xRepeats = (width - xLeftOver) / 8;
    let yRepeats = (height - yLeftOver) / 8;
    for(let i = 0; i < imagePasses.length; i++){
        let pass = imagePasses[i];
        let passWidth = xRepeats * pass.x.length;
        let passHeight = yRepeats * pass.y.length;
        for(let j2 = 0; j2 < pass.x.length; j2++){
            if (pass.x[j2] < xLeftOver) {
                passWidth++;
            } else {
                break;
            }
        }
        for(let j2 = 0; j2 < pass.y.length; j2++){
            if (pass.y[j2] < yLeftOver) {
                passHeight++;
            } else {
                break;
            }
        }
        if (passWidth > 0 && passHeight > 0) {
            images.push({
                width: passWidth,
                height: passHeight,
                index: i
            });
        }
    }
    return images;
};
exports2.getInterlaceIterator = function(width) {
    return function(x, y, pass) {
        let outerXLeftOver = x % imagePasses[pass].x.length;
        let outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
        let outerYLeftOver = y % imagePasses[pass].y.length;
        let outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
        return outerX * 4 + outerY * width * 4;
    };
};

return exports2;
}
