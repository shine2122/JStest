//함수 객체, c# 클래스 처럼 사용
function Person(first, last)
{
    this.first = first;
    this.last = last;
    this.fullName = function()
    {
        return this.first + " " + this.last;
    }
    this.fullNameReversed = function()
    {
        return this.last + ' , ' + this.first;
    }
     
}

var _person = new Person('홍', '길동' );
console.log(_person.fullName());
console.log(_person.fullNameReversed());

//함수 정의한 후 다시 외부에서 내부 함수정의 가능
function Person2(first, last){
    this.first = first;
    this.last = last;
}

Person2.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}

Person2.prototype.fullNameReversed = function() {
    return this.last + ' ' + this.first;
}

var _person2 = new Person2( "김", "철수");
console.log(_person2.fullName());
console.log(_person2.fullNameReversed());

class Person3 {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullName()
    {
        return this.first + ' ' + this.last;
    }
}

var _person3 = new Person3( "박", "금자");
console.log(_person3.fullName());