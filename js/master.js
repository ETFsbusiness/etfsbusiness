var $menu_check = 0;

function adjinganor_land(){
  $(".properties").hide();
  $(".adjinganor-hub").fadeIn();
}

if ($(".adjinganor-hub").show()) {
  $(".properties-btn").css("text-decoration","none");
  $(".adjinganor-btn").css("text-decoration","underline");
}
else if ($(".dawenya-hub").show()) {
  $(".properties-btn").css("text-decoration","none");
  $(".dawenya-btn").css("text-decoration","underline");
}
else if ($(".c25-hub").show()) {
  $(".properties-btn").css("text-decoration","none");
  $(".c25-btn").css("text-decoration","underline");
}

$(".menu-close").hide();
$(".menu-display").hide();
function menu_display(){
    $(".menu-icon").hide();
    $(".menu-close").show();
    $(".informationhub").css("width", "67%");
    $(".dashboard").css("width", "100%");


}
function menu_close(){
  $(".menu-icon").show();
  $(".menu-close").hide();
  $(".informationhub").css("width", "99%");
  $(".dashboard").css("width", "0%");
}
