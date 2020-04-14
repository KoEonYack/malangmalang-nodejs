# 9강

- Post 요청
 - 메시지 바드로 요청 정보 전달 

```
<form method='post' action='/upload'>
</form>
```

action에 요청 경로가 들어간다. 

- form 테그 내부에는 input 테그를 이용해서 어떤 형태의 데이터를 입력 받을지 결정 할 수 있다. 
- <input type=[타입] name=[데이터 이름]>
데이터 이름을 가지고 서버에서 분석 해 낼 수 있다. 

- 폼 인코딩 
    - 폼 바디에 요청 정보 작성 
    - 요청 바디에 input 테그 내용이 기독된다. 
    - 기록되는 방식은 주로 `application/x-www-form-urlencoded` 혹은 `multipart/form-data`를 사용한다. 


- form-urlencoded 방식
 - 이름=값 방식으로 작성. 즉 쿼리 문자열 형식이다. 

- multipart 방식
    - 파일, 글자 등 여러 데이터를 전송

```
<form method="post" action="upload" enctype="multipart/form-data">
</form>
```

- POST 요청 처리 
