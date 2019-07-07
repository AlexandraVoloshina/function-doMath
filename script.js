function doMath() {
	var x = +prompt("Введите первое число");
	var znak = prompt("Введите математическое действие");
	var y = +prompt("Введите второе число");

	if (znak==="+"){
		return alert(x + y);
	} else if(znak==="-") {
			return alert(x - y);
		} else if(znak==="*") {
			return alert(x * y);
			}	else if(znak==="/") {
				return alert(x / y);
				}	else if(znak==="%") {
					return alert(x % y);
					} else return alert("Неверное значение.");
}

doMath();


