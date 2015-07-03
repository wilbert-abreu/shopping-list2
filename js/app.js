$(function(){

var selected = [];	
	
$('#shopping-list-form').on("keydown", function(event){
	keypress = event.keyCode;
	
	if (keypress = 13) {
		selected.push($(this).attr('name'));
	}
});
	
});




grab 13 value compare with if 
	
	push value of check box into array of items
	
prepare for add button 



