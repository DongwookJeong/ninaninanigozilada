let muhanDojun = [];
for (let i = 0; i < muhanDojun.length; i++) {
  if (muhanDojun[i] === "유재석") {
    console.log(i + 1 + "번째에 있습니다.");
    muhanDojun[i] = "정준하 미남";
  } else {
    console.log("이 데이터에는 유재석이 없습니다.");
  }
}
console.log(muhanDojun);
