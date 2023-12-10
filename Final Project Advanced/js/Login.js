// this is the arrays that store account information

var Username = ["admin"];
var Password = ["admin"];

// this function is what validates if someone can log in or not

function getInfo(){
	var username = document.getElementById("Login_Username").value;
	var password = document.getElementById("Login_Password").value;

	for (var i = 0 ; i<Username.length ; i++)
	{
		if (username == Username[i] && password == Password[i])
		{
			window.location.href = "FinalProject.html";
		}
	}
	console.log("login failed")
}

// this function allows users to create an account

function createAccount(){
	var username = document.getElementById("Login_Username").value;
	var password = document.getElementById("Login_Password").value;

	Username.push(username);
	Password.push(password);

	console.log("account created")
}