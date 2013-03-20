$(function(){

var form = $('form button');

form.ajax({
	type: "POST",
	url: "[https://accounts.google.com/o/oauth2/token]", // your POST target goes here
	dataType: "json",
	data: { [POST /o/oauth2/token HTTP/1.1
		Host: accounts.google.com
		Content-Type: application/x-www-form-urlencoded
		code=4/eYE0fVwwzwJo2twBg4kvFwkzTf6o.0q2cekhix3MXshQV0ieZDAo8j1T_egI&
		client_id=1048828436085.apps.googleusercontent.com&
		client_secret=L9ptxKkcDF72exFZTxYal_RR&
		redirect_uri=localhost/oauth2callback&
		grant_type=authorization_code
		] }, // message to send goes here

		// success: function (data){
		// 	var obj = $.parseJSON(data);
		// }
	});

});