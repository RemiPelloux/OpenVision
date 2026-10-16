let i = [
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
exports.getImagePasses = function(t, e) {
    let r = [], n = t % 8, s = e % 8, h = (t - n) / 8, o = (e - s) / 8;
    for(let t = 0; t < i.length; t++){
        let e = i[t], a = h * e.x.length, l = o * e.y.length;
        for(let t = 0; t < e.x.length && e.x[t] < n; t++)a++;
        for(let t = 0; t < e.y.length && e.y[t] < s; t++)l++;
        a > 0 && l > 0 && r.push({
            width: a,
            height: l,
            index: t
        });
    }
    return r;
}, exports.getInterlaceIterator = function(t) {
    return function(e, r, n) {
        let s = e % i[n].x.length, h = (e - s) / i[n].x.length * 8 + i[n].x[s], o = r % i[n].y.length;
        return 4 * h + ((r - o) / i[n].y.length * 8 + i[n].y[o]) * t * 4;
    };
};
