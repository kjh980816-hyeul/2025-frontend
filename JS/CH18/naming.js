/*
식별자(변수명, 상수명, 함수명 등등, ~~명) 명명 규칙
- 숫자로 시작하면 안된다.
- 특수기호는 _, $만 사용가능 (책에선 &로 되어 있지만 오타임)
- 예약어 사용 금지(특정 단어는 역할이 있음) ex) let const;(불가능)
- 스페이스(공백) 사용 불가 ex) let av cd;(불가능)
- 한글 사용가능 하지만 영어, 숫자, 특수기호 사용 권장

명명 기법
- 카멜 케이스 (Camel Case)
- 파스칼 케이스 (Pascal Case)
- 스네이크 케이스(사용량 적음) (Snake Case)

- 케밥 케이스 (Kebap Case) - css에서 주로 쓰는 기법, 프로그래밍 언어에서는 사용 불가

단어 여러개를 합쳐서 식별자를 만들 때 사용하는 기법
만약 my, name, is, hong 단어를 합쳐서 식별자를 만들 때
Camel Case: myNameIsHong
Pascal case: MyNameIsHong
Snake Case: my_name_is_hong
Kebap Case: my-name-is-hong
*/