//List Items (puppies)
//$('li').on('click', function() {
//	$(this).text("Clicked!").delay(800).fadeOut(400);
//});

$('.loc').hover(,/strong>
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> the Adoption House");
});

//Grab info frmo form

$('#add-pet').on('click', function() {
	var $name = $('#pet-name').val();
	var $species = $('#pet-species').val();
	var $notes = $('#pet-notes').val();

	// Assemble HTML of our new element with above variables
	var $newPet = $(
		'<section class ="six columns"><div class="card"><p><strong>Name:</strong>' + $name + ' </p> <p> <strong> Species: </strong> ' + $species + '</p>
		<p> <strong> Notes: </strong> ' + $notes + '</p> <span class= "close">&times;</span></div></section>'
	);

	//Attach to markup 
	$('#posted-pets').append($newPet);
});	

//Make X rm section 
$('.close').on('click', function() {
	$(this).parent().remove();
//	
//Reset form 
$name.val("");
$species.val("Dog");
$notes.val("");

//Img fade in - elements must be hidden in the first place
$('img').css('display', 'none').fadeIn(1600);

$('.card').on('click', function() {
	$(this).toggleClass('selected');
});

//rm feature
$('div').on('click', function() {
	$('#one').empty();
	$('#two').remove();
