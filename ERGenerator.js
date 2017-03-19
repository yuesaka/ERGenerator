/*
Euclidean Rhythm Generator Class

example: 

var ERGenerator = new ERGenerator();
print(ERGenerator.generate(8,3,0)); // 1,0,0,1,0,0,1,0
print(ERGenerator.generate(8,3,1)); // 0,1,0,0,1,0,0,1
print(ERGenerator.generate(16,5,3)); // 0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1
print(ERGenerator.generate(3,8,1)); // error: undefined

*/
function ERGenerator() {}

ERGenerator.prototype.generate = function(steps, pulses, rotation) {
    if (pulses > steps) {
        print("error: pulse larger than steps");
        return;   
    }
    var pattern = new Array();  
    var counts = new Array();
    var remainders = new Array();
    divisor = steps - pulses;
    remainders.push(pulses);
    level = 0;
    while (true) {
        counts.push(parseInt(divisor / remainders[level]));
        remainders.push(divisor % remainders[level]);
        divisor = remainders[level];
        level = level + 1;
        if (remainders[level] <= 1) {
            break;
        }
    }
    counts.push(divisor);
    build(level, pattern, counts, remainders);

    // rotate so it starts with a "1".
    i = pattern.indexOf(1);
    result = new Array();
    for (var j = i; j < pattern.length; j++) {
        result.push(pattern[j]);
    }
    for (var k = 0; k < i; k++) {
        result.push(pattern[k]);
    }
    rotate(result, rotation);
    return result;	
};

function build(level, pattern, counts, remainders) {
    if (level == -1) {
        pattern.push(0);
    } else if (level == -2) {
        pattern.push(1);        
    } else {
        for (var i = 0; i < counts[level]; i++) {
            build(level - 1, pattern, counts, remainders);
        }
        if (remainders[level] != 0) {
            build(level - 2, pattern, counts, remainders);
        }
    }
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/rotate [rev. #2]
function rotate(a, p){
    for(var l = a.length, p = (Math.abs(p) >= l && (p %= l), p < 0 && (p += l), p), i, x; p; p = (Math.ceil(l / p) - 1) * p - l + (l = p))
        for(i = l; i > p; x = a[--i], a[i] = a[i - p], a[i - p] = x);
    return a;
};

var ERGenerator = new ERGenerator();
print(ERGenerator.generate(8,3,0));
print(ERGenerator.generate(16,5,3));
