//함수 선언
function add(x, y)
{
    var total = x + y;
    return total;
}

var result = add(2,3);
console.log(result);

//아래와 같이 매개변수 선언 없이도 함수 활용 가능
//자동으로 배열형식으로 활용
function add2()
{
    var sum = 0;
    for ( var i = 0, j = arguments.length; i < j ; i++)
        {
            sum += arguments[i];
        } 
        return sum;
}
console.log(add2(2,3,4,5,6));

//익명 함수, 함수를 변수에 할당***
var avg = function()
{
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j ; i++)
    {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log(avg(3,4,5,6));

//함수를 변수에 할당하고, 변수를 이용해서 함수 안의 함수를 활용 가능
function makePerson(first, last) {
    return {
        first : first,
        last : last,
        fullName : function () {
            return this.first + ' ' + this.last;//this는 이 개체를 의미
        },
        fullNamereversed :  function()
        {
            return this.last + ', ' + this.first;
        }
    }
}

var person = makePerson("Dong", "Kim");
console.log(person.fullName());
console.log(person.fullNamereversed());

var  func = person.fullName;
console.log(func());