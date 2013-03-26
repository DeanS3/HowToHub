$(function(){

var vids = $('#vidList')


$.get('https://gdata.youtube.com/feeds/api/videos?q=DIY&orderby=published&start-index=1&max-results=10&prettyprint=true&v=2', function(data) {
$('.result').html(data);
alert('Load was performed.');
// console.log(data);


$(data).find("entry").each(function()
{
  $(vids).append($(this).find("Title").text() + "<br />");

  $(this).find("author name").each(function()
  {
    $(vids).append($(this).text() + "<br />");
  });


  $(data).append("<br />");
});

});

$.get('https://accounts.google.com/o/oauth2/approval?as=-33b6894774fe2296&hl=en&pageId=none&xsrfsign=APsBz4gAAAAAUU0Q5Rq7KdxHveVFErSLrdhAmVz2R6pl', function(data){
$('results').html(data).find('title')
console.log($('results').html(data).find('title')
)
});

$.post('https://accounts.google.com/o/oauth2/token', function(data) {
$('.result').html(data);
});
// var xml = "https://gdata.youtube.com/feeds/api/videos?q=DIY&orderby=published&start-index=1&max-results=10&v=2",
//  var xmlDoc = $.parseXML(data),
//  $xml = $( xmlDoc ),
// $title = $xml.find( "link" );
// console.log('link');
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
	// 	client_id=1048828436085.apps.googleusercontent.com&client_secret=L9ptxKkcDF72exFZTxYal_RR&
	// 	redirect_uri=urn:ietf:wg:oauth:2.0:oob&grant_type=authorization_code",
	// 	Host: 'accounts.google.com',
	// 	ContentType: 'application/x-www-form-urlencoded',
	// });
// 	$.getJSON('http://www.reddit.com/r/diy.json', { get_param: 'value' }, function(data) {
//     $.each(data, function(index, element) {
//         $('body').append($('<div>', {
//             text: element.name
//         }));
//     });
// });
    // };
// });
});