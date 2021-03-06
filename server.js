// 클라이언트가 데이터 요청이 오면 그걸 전달하는 역할이 API 서버의 역할임!!
const express = require("express");
const cors = require("cors");
const app = express();      //함수 express()를 실행한 결과 값이 app에 들어감
const port = 3000;          //포트번호

//json형식의 데이터를 처리할 수 있게 설정
app.use(express.json());
//브라우저 cors이슈를 막기위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());

//요청처리
//app.메서드(url, 함수)
                //callback함수
//✔get전송방식
app.get('/products',async (req,res)=>{              //get으로 요청을 하고 url이 /products이면 함수안에꺼를 요청해줘!!
    const result = {                                //result는 객체임! - 배열X / 객체안에 products라는 배열을 담고 있는거
        products: [                                 //products는 배열안에 객체들을 담고 있음!
            {                                       //실제 데이터베이스는 데이터베이스에 담고있지! 이렇게 바로 적어주지않음 -> 내일 설치할거임!!!
                id:1,
                name:"거실조명",
                price: 50000,
                imgsrc: "images/products/product1.jpg",
                seller: "green",
            },
            {
                id:2,
                name:"캠핑조명",
                price: 50000,
                imgsrc: "images/products/product2.jpg",
                seller: "blue",
            },
            {
                id:3,
                name:"아동조명",
                price: 50000,
                imgsrc: "images/products/product3.jpg",
                seller: "pink",
            },
            {
                id:4,
                name:"거실조명",
                price: 50000,
                imgsrc: "images/products/product4.jpg",
                seller: "yellow",
            },
            {
                id:5,
                name:"거실조명",
                price: 50000,
                imgsrc: "images/products/product1.jpg",
                seller: "green",
            },
            {
                id:6,
                name:"캠핑조명",
                price: 50000,
                imgsrc: "images/products/product2.jpg",
                seller: "blue",
            },
            {
                id:7,
                name:"아동조명",
                price: 50000,
                imgsrc: "images/products/product3.jpg",
                seller: "pink",
            },
            {
                id:8,
                name:"거실조명",
                price: 50000,
                imgsrc: "images/products/product4.jpg",
                seller: "yellow",
            },
        ]
    }
    // res.send('업로드된 상품들 입니다.');             //send는 보내주는거!
    res.send(result);
})

//✔post 전송방식
app.post('/green',async (req,res)=>{                //비동기 promise! -> async써서 간편하게!
    console.log(req);
    res.send('그린 게시판에 게시글이 등록되었습니다.');
});

//실행
app.listen(port, ()=>{
    console.log('쇼핑몰 서버가 동작 중입니다.');
})

// 🎈get 방식🎈
// 1. 터미널에 node server.js ! (js자바스크립트를 실행한다는 의미)
// PS D:\01-STUDY\react\lamp-shopping-server> node server.js
// 쇼핑몰 서버가 동작 중입니다.
// 하고나서 주소창에 localhost:3000/products 하면           //포트번호 여긴 3000번
// 업로드된 상품들 입니다.              //가 나옴(res.send('업로드된 상품들 입니다.'))

// 2. res.send(result); 해주고
// 터미널에 다시 node server.js !
// PS D:\01-STUDY\react\lamp-shopping-server> node server.js
// 쇼핑몰 서버가 동작 중입니다.
// 하고나서 주소창에 localhost:3000/products 하면
// {"products":[{"id":1,"name":"거실조명","price":50000},{"id":2,"name":"아동조명","price":50000}]}

// 🧡크롬 확장프로그램에서, JSONVue 다운하면 보기편하게 나옴!🧡
// {
//     products: [
//      {
//          id: 1,
//          name: "거실조명",
//          price: 50000
//      },
//      {
//          id: 2,
//          name: "아동조명",
//          price: 50000
//      }
//     ]
// }

// 🎈post방식🎈 - get보다 조금 까다로움(form만들어줘야하는데 - 이렇게 안하고 postman 다운받아서 편하게?쓰기!)
// 💛postman 이라는 걸 다운받음!!!💛    https://www.postman.com/ - 회원가입함
// postman을 열고 create New ->  HTTP REQUEST를 클릭        (메모장 참고-6.30(green-lamp-client만들기2))
// 터미널에서 다시 node server.js 해주고 postman에서 
// POST방식 -  localhost:3000/green     send를 클릭! 하면
// postman 거기 밑에 '그린 게시판에 게시글이 등록되었습니다.' 라고 뜸
// 터미널을 보면,
// url: '/green',
// method: 'POST',              //이라고 적혀있음!!

// +) postman에서 params   -body 클릭! - raw 클릭 - JSON형식 선택(사진참고 06.30)
// {
//     "name":"민영",                    //javascript와 달리 JSON은 key값을 "쌍따옴표" 안에 담아줘야함!!!
//     "age":33
// }                                    //칸 안에 라고 적어주자!   ----> 하고 send보내기!!!
// * post로 전송하면 body에 담김 *
// * JSON은 키에도 ""쌍따옴표로 감싸줘야함! *
// 그리고 나서 터미널을 다시보면, body안에 값들이 담김!!!!
//  body: { name: '민영', age: 33 },


// 💞lamp-shopping-client react폴더와 같이보자!!!💞   --> src폴더 - main폴더 - index.js랑 연동!