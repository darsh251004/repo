function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function myFlip() {
  var upLetter = "";
  var allcard = document.getElementById("allCard");
  var front = document.getElementById("front");
  var myimgs = document.getElementsByClassName("myimg");
  var strImg = "";
  var letters = "அஆஇஈஉஊஎஏஐஒஓஔ";
  var letterSplit = letters.split("");
  for (let i = 0; i < 12; i++) {
    upLetter = document.createElement("span");
    upLetter.innerHTML = letterSplit[i] + " ";
    document.getElementById("rowLetter").appendChild(upLetter);
  }
  var topColor = document.getElementById("rowLetter").children;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 12; i++) {
      front.innerHTML = letterSplit[i];
      topColor[i].classList.add("cardJump");
      await sleep(1000);
      allcard.style.transform = "rotateY(180deg)";
      strImg = "{{ url_for('static', filename='img/" + (i + 1) + ".jpeg') }}";
      console.log(strImg);
      for (let j = 0; j < myimgs.length; j++) {
        myimgs[j].src = strImg;
      }
      await sleep(1000);
      topColor[i].classList.remove("cardJump");
      allcard.style.transform = "rotateY(360deg)";
    }
  }
}
