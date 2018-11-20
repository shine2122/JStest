// var name = 'Dong';

// if (name == 'dong')
// {
//     console.log("My name is dong.");
// }
// else if (name == 'Dong')
// {
//     console.log("My name is Dong.");
// }

//for 문
for (var i = 0; i<5 ; i++)
{
    console.log("i = %d", i);
}
// while 문 , 현재 100보다 작은 경우는 없기 때문에 결과 출력되지 않음
let time1 = 100
while (time1 > 100)
    {
        console.lgot("Result: %d", time);
        time1--;
    }

// do~ while~ 문, 한번 실행 후 while문 조건 확인
let time2 = 100;
do 
{
    console.log("Result: %d", time2);
    time2--;
}
while (time2 > 100)

//switch 문
let action = "eat";
switch (action) {
    case 'draw':
        console.log('draw');
        break;
    case 'eat':
        console.log('eat');
        break;
    default:
        console.log('nothing');
}