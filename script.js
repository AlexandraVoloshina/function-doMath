var x = +prompt("Введите первое число");
var znak = prompt("Введите математическое действие");
var y = +prompt("Введите второе число");

function doMath(x, znak, y) {
	switch(znak){
	case "+":
		alert(x + y);
		break;
	case "-":
		alert(x - y);
		break;
	case "*":
		alert(x * y);
		break;
	case "/":
		alert(x / y);
		break;
	case "%":
		alert(x % y);
		break;
	default:
		alert("Неверное значение.");
	}

}

doMath(x, znak, y);

