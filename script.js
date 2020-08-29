let accobj = {};
let i = 1;

while(true){
	let key = `#acc${i}`
	key = document.querySelector(key);
	if (key==null) {break}
	accobj[String(i)] = key;
	i++;
}

clickaccfun = function (event){
this.classList.toggle("active");
	}

for(let j = 1;j<i;j++){
	accobj[String(j)].onclick = clickaccfun;
}


