var btnText;

$(document).ready(function(){
    $(".bookmarks").hover(function(){
      $(".bookmarks").animate({'left':"0px"}, 1500)
      $("#btn").text("<<");
    },
    function(){
      $(".bookmarks").animate({'left':"-170px"}, 1500)
      $("#btn").text(">>");
    });
});
