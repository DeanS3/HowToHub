$(function(){

// This page is being used to get info from Youtube and parse the data into the sidebar
// on the user.html page.

var vids = $('#vidList')//Variable set up 

// Pulls info from Youtube and puts it in data object
$.get('https://gdata.youtube.com/feeds/api/videos?q=DIY&orderby=published&start-index=1&max-results=10&prettyprint=true&v=2', function(data) {
$('.result').html(data);
alert('Load was performed.');

// Parsing and displaying parsed information by appending it to the variable from above
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
// Getting more information(titles) to display along with the above iformation
$.get('https://accounts.google.com/o/oauth2/approval?as=-33b6894774fe2296&hl=en&pageId=none&xsrfsign=APsBz4gAAAAAUU0Q5Rq7KdxHveVFErSLrdhAmVz2R6pl', function(data){
$('results').html(data).find('title')
console.log($('results').html(data).find('title')
)
});

$.post('https://accounts.google.com/o/oauth2/token', function(data) {
$('.result').html(data);
});

});