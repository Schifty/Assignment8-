<?php 
//function for creating a custom menu for our plugin in the setttings page
function custom_registration_admin() {
	//**PARAMETERS**//
	// first parameter is the name of basic title,
	// second parameter is the name that appears in the settings menu,
	// third option is the capability-manags options means the user can change these options,
	// fourth parameter is the location of the page __file__,
	// last one is the function that processes the option page actions	
	add_options_page('CustomRegistration', 'Custom Registration', 'manage_options', __file__, 'custom_registration_process');
}
// hook to add menu to settings in dashboard
add_action('admin_menu', 'custom_registration_admin');

//fnction to process our form when submitted
function custom_registration_process(){
	
}
//form for users to selet options for frameworks
?>



<h1>Choose Your Framework</h1>
<form name="registration_options" action="" method="post">
<label for="html5">HTML5</label>
<input type="radio" name="html5" id="html5" value="html5" checked>
<br>
<label for="bootstrap">Bootstrap</label>
<input type="radio" name="bootstrap" id="bootstrap" value="bootstrap">
<br>
<label for="foundation">Foundation</label>
<input type="radio" name="foundation" id="foundation" value="foundation">

<input type="submit" name="submit" value="submit">
</form> 




