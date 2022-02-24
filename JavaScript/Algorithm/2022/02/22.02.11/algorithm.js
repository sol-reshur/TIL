// 001 선언과 할당 - 'name'이라는 변수를 선언하고, 자신의 이름을 할당하세요.
let name = "김다솔";
console.log(name);

// 002 재할당 - 주어진 변수 'name'에 "율무"를 재할당 하세요.
let name = "유자";
let name = "율무";
console.log(name); // 율무

// 003 배열의 선언과 할당 - 주어진 classmate에 "율무","유자","보리"를 담아주세요.
let classmate = ["율무", "유자", "보리"];
console.log(classmate); // (3) ['율무', '유자', '보리']

// 004 배열의 기능 - 주어진 classmate 배열에서 마지막 요소를 꺼내 newClassmate에 넣어주세요.
let classmate = ["율무", "유자", "보리"];
let newClassmate = [];
newClassmate.push(classmate.pop(classmate.length - 1));
console.log(newClassmate); // ['보리']

/*  005 배열의 기능 - 학생의 이름이 담긴 students 배열이 있습니다.
   배열에서 2번째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요. */
let students = ["보리", "탱자", "율무", "수수"];
let newStudents = [];
newStudents.push(students.slice(0, 3));
console.log(newStudents); // 0: (3) ['보리', '탱자', '율무']

/* 005번의 slice는 students.slice(index.index+1)로 작성한다.
그 이유는 slice의 시작점은 요소의 첫번째인 0부터 시작하며, 종료지점은 종료위치의 index를 포함하지않으므로,
원하는 부분을 넣기위해선 종료지점의 index그 다음 지점을 지정해주어야 한다.
만약 종료지점을 설정하지 않을경우 배열의 끝까지를 추출한다.
쉽게 생각해서 slice(시작점의 index,종료점의 length)라고 생각하면 될것같다.



참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice */
