var btnText;

$(document).ready(function(){
    $(".bookmarks").hover(function(){
      $(".bookmarks").animate({'left':"0px"}, 500)
      $("#btn").text("<<");
    },
    function(){
      $(".bookmarks").animate({'left':"-170px"}, 500)
      $("#btn").text(">>");
    });
});
