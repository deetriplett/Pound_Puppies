//List Items (puppies)
$('li').on('click', function() {
	$(this).text("Clicked!").delay(800).fadeOut(400);
});

$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});
