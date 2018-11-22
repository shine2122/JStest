function testFunc(val)
{
    if (val > 0)
    {
        console.log("val = %d", val);
        testFunc(--val); 
        // val--로 하면 무한반복하며 val = 10이 연속 출력됨
    }
}
testFunc(10);

var method = function(val)
{
    if(val > 0)
    {
        console.log("val = %d", val);
        arguments.callee(--val);//arguments.callee는 재귀함수
    }
}
method(10);

//함수 내에 내부 함수 정의
function testFunc()
    {
        var a =1;
        function innerMethod()
        {
            return a + 1;
        }
        return innerMethod();
    } 

var a = testFunc(5);
console.log(a);

//함수를 리턴함, 함수 내 함수 정의와 비교
//closer라고 부름, 함수 외부의 변수도 같이 반환함
function makeAdder(a)
{
    return function(b)
    {
        return a + b;
    }
}

x = makeAdder(5);
y = makeAdder(20);

console.log(x(6));
console.log(y(7));