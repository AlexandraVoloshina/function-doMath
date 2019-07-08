function doMath() {
	var x = +prompt("Введите первое число");
	var znak = prompt("Введите математическое действие");
	var y = +prompt("Введите второе число");

	switch(znak){
	case "+":
		return alert(x + y);
		break;
	case "-":
		return alert(x - y);
		break;
	case "*":
		return alert(x * y);
		break;
	case "/":
		return alert(x / y);
		break;
	case "%":
		return alert(x % y);
		break;
	default:
		return alert("Неверное значение.");
	}

}

doMath();