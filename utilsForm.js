function checkCheckBox() {
	if (document.getElementById("checkbox").checked){
		document.getElementById("middleName").disabled = false
		return true
	}
	else {
		document.getElementById("middleName").disabled = true
		 return false
	}

}

function sendOrder(){
	name = document.getElementById("name").value
	middleName = document.getElementById("middleName").value
	lastName = document.getElementById("lastName").value
	date = document.getElementById("date").value
	time = document.getElementById("time").value
	typeProblem = document.getElementById("typeProblem").value
	comment = document.getElementById("comment").value


	if (checkForm(name, middleName, lastName, date, time, typeProblem, comment)){
		//Отправка post
		timeProblem = formatDateTime(date, time)
		var json = JSON.stringify({
	  			name: name,
	 			middleName: middleName,
	 			lastName: lastName,
	 			timeProblem: timeProblem,
	 			typeProblem: typeProblem,
	 			comment: comment
	 		})
		console.log(json)

		var xhr = new XMLHttpRequest();

		xhr.open("POST", 'http://localhost:8080/orders', true)
		xhr.setRequestHeader('Content-type', 'application/json');
		//.readyState == 4
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 201) {
				document.getElementById('info').innerHTML = "Заявка отправлена"
				document.getElementById('info').style.color="green"
			} else {
				document.getElementById('info').innerHTML = "Произошла ошибка. Заявка не отправлена"
				document.getElementById('info').style.color="red"
			}
		}
		xhr.send(json);

	}

}

//30.07.1994 14:02
function formatDateTime(d, t){
	var date = new Date(d)
	month = date.getMonth()+1
	year = date.getFullYear()
	day = date.getDate()

	formatedDate = [day, month, year].join(".")

	return formatedDate + " " + t


}

function checkForm(name, middleName, lastName, date, time, typeProblem, comment){
	textError = ""
	if (name == "") {textError += "Имя, "}
	if (middleName == "" && checkCheckBox()) {textError += "Отчество, "}
	if (lastName == "") {textError += "Фамилия, "}
	if (date == "") {textError += "Дата, "}
	if (time == "") {textError += "Время, "}
	if (comment == "") {textError += "Комментарий"}

	if (textError != ""){
		document.getElementById('info').innerHTML="ОШИБКА: Не введено " + textError
		document.getElementById('info').style.color="red"
		return false
	}

	return true

}