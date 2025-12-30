'use strict'

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
		console.log("  actual: ", actual);
    console.log("expected: ", expected);
    console.log("Test Passed.");
  } else {
    console.error("Test Failed.");
    console.log("  actual: ", actual);
    console.log("expected: ", expected);
    console.trace();
  }
}

// 配列
// 練習問題
// 1
const  students = ["Tanaka","Suzuki","Takahashi"];
console.log(students[1]);// (予想)Suzuki

// 2
console.log(students[9]);// (予想)undefined

// 配列　振り返り
// 配列とは、複数の値を一つの変数に格納することができるもの。
// 変数を定義し、`[]`の中に値を入れる。値どうしの区切りは`,`を使う。
// インデックスとは、配列の各要素に順番に振られた番号で、0から始まる。
// 配列の値を取り出すには、「変数名[インデックス]」を使う。
// 配列の値を更新するときは、配列のインデックスを指定(例：array[2])して、そこに新しい値を代入する。
// 配列に値を追加するには、メソッド`push()`を使う。
// 配列の定数は、新しく配列を代入することはできないが、新しい配列の値を追加・更新することはできる。


// オブジェクト
// 練習問題
// 1　=> オブジェクト
const student = {
    id       : "A001",
    name     : "Tanaka",
    age      : 20,
    birthday : "2002/4/2"
};

// 2 => 配列
const student2 = [
    "A001",
    "Tanaka",
    20,
    "2002/4/2"
];

// オブジェクト　振り返り
// オブジェクトは、複数の値を一つにまとめて変数に格納するためのもの。キーとバリューが対になったものがプロパティ。
// オブジェクトの値を使うには、`(変数名).key`または`(変数名)[key]`という書き方で、バリューにアクセスすることができる。
// キーとは、バリューを取り出すための名前
// バリューとは、プロパティの値
// プロパティは、キーとバリューが一組になったもの。

// 練習問題
// 1
const numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers[0]);

// 2
const person = {
    name    : "Yuya Ashimine",
    age     : 30,
    address : "Naha City"
};
console.log(`名前は${person.name}、年齢は${person.age}、居住地は${person.address}です`);

// 3

// 3-1
const information = {
    name      : "EvE Cafe",
    location  : "東京",
    closed    : "水曜日",
    recommend : "コーヒーとパンケーキセット",
    isTakeout : true, // 追加
};

// 3-2
console.log(information.recommend);

// 3-3
information.closed = "金曜日";
console.log(information.closed);
console.log(information);

// 3-4
const staff = [ "Takumi", "Yuta", "Nao" ];
const charactorCount = [];
for (let i of staff ) {
    charactorCount.push(i.length);
}
console.log(charactorCount);
