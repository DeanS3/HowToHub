$(function(){
// 	$.ajax({
//    cache:     'true',
//    async:     'false',
//    type:      'GET',
//    url:       'http://www.reddit.com/r/diy.json', // Point to your url
//    dataType:  'jsonp',
//    timeout:   1750,   
//    success: function (info) {
//    		$('#vidList').empty();
//    		$('#ititemplate').tmpl(info).appendTo('#vidList li');   
//             }                                  //
// }).done(function()$(this).something("done"));   
	// $.ajax({
	// 	type: "POST",
	// 	url: "https://accounts.google.com/o/oauth2/token/code=4/ux5gNj-_mIu4DOD_gNZdjX9EtOFf&
	// 	+client_id=1048828436085.apps.googleusercontent.com&client_secret=L9ptxKkcDF72exFZTxYal_RR&
	// 	+redirect_uri=urn:ietf:wg:oauth:2.0:oob&grant_type=authorization_code",
	// 	Host: 'accounts.google.com',
	// 	ContentType: 'application/x-www-form-urlencoded',
	// });
	$.getJSON('http://www.reddit.com/r/diy.json', { get_param: 'value' }, function(data) {
    $.each(data, function(index, element) {
        $('body').append($('<div>', {
            text: element.name
        }));
    });
});
    // };
// });
});