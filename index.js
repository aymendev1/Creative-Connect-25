function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("body").addClass("fixed");	
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  $("body").removeClass("fixed");	
}