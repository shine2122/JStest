
var obj = new Object(); //변수는 객체의 위치를 저장하고 있음, 자료형은 자료의 크기를 결정

var obj01 = {}; //빈 오브젝트 생성 및 활용의 예
obj01.name =  'Dong'; //객체 변수 선언과 정의, 속성 설정
console.log(obj01.name);

var obj02 = new Object();
obj02["name"] = "홍길동";
console.log(obj02.name);

var person = {
    name : "홍길동",
    age : 33,
    address:     //하나의 변수는 아래와 같이 여러 가지 속성을 가질 수 있음
    {
        zipcode: 14500,
        city: "서울"
    }
}