A simple Euclidean Rhythm Generator class written in javascript. JS adaption of Bjorklund's algorithm
(https://github.com/brianhouse/bjorklund)

=Usage

var ERGenerator = new ERGenerator();
print(ERGenerator.generate(8,3,0)); // 1,0,0,1,0,0,1,0
print(ERGenerator.generate(8,3,1)); // 0,1,0,0,1,0,0,1
print(ERGenerator.generate(16,5,3)); // 0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1
print(ERGenerator.generate(3,8,1)); // error: undefined

