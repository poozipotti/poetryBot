//the full poem
let poem = '';
//how much of the poem has been displayed
let currentPoem = '';
//how long to wait until next character is dsiplayed
let poemIndex = 0;
let displaySpeed = 40;
let displaySpaceModifer = 1.1;
let displayLineModifer = 3;
function setPoemText(poemText){
	console.log('poem received ')	
	poem = JSON.parse(poemText).poem;
	currentPoem = '';
	progress = poem.length;
	poemIndex = 0;
	displayPoemText();
}

function displayPoemText(){
	currentPoem += poem[poemIndex];
	if(poemIndex<poem.length){
		if(currentPoem[currentPoem.length-1] == ' '){
			setTimeout(displayPoemText, displaySpeed*displaySpaceModifer);
		}else if(currentPoem[currentPoem.length-1] == '.'){
			currentPoem+=' <br> ';
			setTimeout(displayPoemText, displaySpeed*displayLineModifer);


		}else{
			setTimeout(displayPoemText, displaySpeed);
		}
		poemIndex++;
		$("#poem").html(currentPoem);
	}

}