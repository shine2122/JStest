function test(num) {
    if (num == 0) {
    return num;
    }
    else {
    return num + arguments.callee(num-1);
    }
 }