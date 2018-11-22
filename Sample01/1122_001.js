
var fs = require('fs'); 
//파일 읽기
 //읽고자 하는 파일, 인코딩 형식, data를 가져오는 함수
 var data = fs.readFile('../README.md', 'utf-8', function(err, data)
 {
     console.log('DATA = ' + data)
 }
 );

 //파일 쓰기
 fs.writeFile('./output.txt', "Hello World", function(err)
 {
     //에러가 발생하면 err 출력
     if(err){
         console.log('Error : ' + err);
     }
     //에러가 없으면
     console.log("쓰기완료");
 });

