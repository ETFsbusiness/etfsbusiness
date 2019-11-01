setTimeout(
  function(){
    $(".brand").fadeIn('slow');
  }
, 3000);
setTimeout(
  function(){
    $(".login-input-box").fadeIn('slow');
  }
, 5000);

$(".login-loader").hide();
function loginValidate(){
  var $code = $(".login-input").val();

  if($code == ""){
    alert("Denied access");
  }
  else if ($code == "zaabetuaful" || $code == "zaabetuaful " || $code == "ZAABETUAFUL" || $code == "ZAABETUAFUL ") {
    $(".login-loader").show();
    setTimeout(
      function(){
        $(".login-box").hide();
        $(".admin-account").slideDown();
      }, 3000
    )
  }
  else{
    alert("Denied access");
  }
}
