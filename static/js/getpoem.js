$(document).ready(function(){
    $("canvas").click(()=>{getPoem()});
	greetUser();
});


function getPoem(){
	console.log("retreiving poem");
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	setPoemText(this.responseText);
	    }else{
	    	console.log("error getting a poem");
	    	console.log(this.status);
	    }
	};
	xhttp.open("GET", "../poems.txt", true);
	xhttp.send();
}

function greetUser(){
	greeting = {
		poem:'Hi! I\'m a poetry robot. Hopefully soon i\'ll be a little smarter, but for now, click anywhere and i\'ll tell you a poem.'
	};
	 setPoemText(JSON.stringify(greeting));

}

