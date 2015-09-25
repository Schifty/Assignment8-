<?php
/**
* Plugin Name: Custom Registrtion
* Plugin URI:https://github.com/Schifty
* Description:  this is  a function to have a custom registration paeg for users
* Version: 1.0
* Author:Anthony Schifferns
* Author URI: http://www.aswebdeveloper.com/
**/





/*****************************************                           NEEDED FUNCTIONS                   *****************************************************************************/


/////////////////////////////////////////////////////lod frameworks css scripts//////////////////////////////////////////////////////

function demowp_load_css(){
	
		
		//check to see the option and value already exist
		$existing=get_option("frameworkgroup");
		
		
		//echo $dir2; exit;
		
	//if the framework is bootstrap load the bootstrap css
	if($existing=="bootstrap"){//function to load the custom stylesheet which is differnet  from style.css
	wp_enqueue_style( 'bootstrap-demo', plugins_url('/css/bootstrap-form.css',__FILE__));
	}	
		
		
	//if the framework is html5 load the html5 css
	else if($existing=="html5"){//function to load the custom stylesheet which is differnet  from style.css
	wp_enqueue_style( 'html5-demo', plugins_url('/css/html5-form.css',__FILE__));
	}

	
	
	//if the framework is foundtion load the foundation css
	else if($existing=="foundation"){//function to load the custom stylesheet which is differnet  from style.css
	wp_enqueue_style( 'foundation-demo',plugins_url('/css/foundation-form.css',__FILE__));
	}
	
	
}
add_action('wp_enqueue_scripts','demowp_load_css');






//////////////////////////////////////add admin settings  for our plugin//////////////////////////////////////////////////////

require_once(dirname(__file__) . "/admin/admin_options.php");




////////////////////////////////////////////////////////////////////////bootstrap framework////////////////////////////////////////////////////////////////////////////////////////
//get the form
function show_registration_form_bootstrap($error="") {?>

<style>
.panel-heading{background-color: #1abc9c;}
</style> 
<?php 
if(!empty($error)){
		//shows the alert box with errors from the form
?>
		<div class="alert alert-danger">
		  <strong>Error!</strong><br> <?php echo $error; ?>
		</div><!--ends strong alert box-->
<?php
}//ends if not empty error
?>

<div class="col-md-12">
	<div class="panel panel-default">
		<div class="panel-heading" ><h5>Required   <i style="color: red;" class="fa fa-asterisk"></i></h5></div><!--ends panel heading-->
		<div class="panel-body">
		
			<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post">
			
			<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label for="username"><i class="fa fa-user"></i>  Username <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="text" name="username" value="<?php  if(isset($_POST['username'])) echo $_POST['username'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
		  
			<div class="col-md-4">
				<div class="form-group">
					<label for="password"><i class="fa fa-user-secret"></i>  Password <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="password" name="password" value="<?php  if(isset($_POST['password'])) echo $_POST['password'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
			
			<div class="col-md-4">
				<div class="form-group">
					<label for="password"><i class="fa fa-user-secret"></i>  Password Match <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="password" name="password2" value="<?php  if(isset($_POST['password2'])) echo $_POST['password2'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
		  
			<div class="col-md-4">
				<div class="form-group">
					<label for="email"><i class="fa fa-envelope"></i> Email<i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="text" name="email" value="<?php  if(isset($_POST['email'])) echo $_POST['email'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
			
			
		
		<?php $hide_website = get_option("hidewebsite"); 
		//echo $hide_website; exit;
		if($hide_website=="no"){
			
		echo '<div class="col-md-8">
			<div class="form-group">
			<label for="website"><i class="fa fa-globe"></i>  Website</label>
			<input style="width: 95%;" type="text" name="website" placeholder="http://www.example.com" value="';
			if(isset($_POST['website'])) echo $_POST['website'];
		echo '">
			</div><!--ends form group-->
		  </div><!--ends col-->';
		}else if($hide_website=="yes"){echo "";};
		
			
		$hide_fname = get_option("hidefname"); 
		//echo $hide_lname; exit;
		if($hide_fname=="no"){
			
		echo '<div class="col-md-4">
			<div class="form-group">
			<label for="fname"><i class="fa fa-user"></i>  First Name</label>
			<input type="text" name="fname" value="';
			if(isset($_POST['fname'])) echo $_POST['fname'];
		echo '">
			</div><!--ends form group-->
		  </div><!--ends col-->';
		}else if($hide_fname=="yes"){echo "";};
		  
		$hide_lname = get_option("hidelname"); 
		//echo $hide_lname; exit;
		if($hide_lname=="no"){
			
		echo '<div class="col-md-4">
			<div class="form-group">
			<label for="lname"><i class="fa fa-user"></i>  Last Name</label>
			<input type="text" name="lname" value="';
			if(isset($_POST['lname'])) echo $_POST['lname'];
		echo '">
			</div><!--ends form group-->
		  </div><!--ends col-->';
		}else if($hide_lname=="yes"){echo "";};
		  
		 $hide_nic = get_option("hidenic"); 
		//echo $hide_nic; exit;
		if($hide_nic=="no"){
			
		echo '<div class="col-md-4">
			<div class="form-group">
			<label for="nickname"><i class="fa fa-black-tie"></i>  Nickname</label>
			<input type="text" name="nickname" value="';
			if(isset($_POST['nickname'])) echo $_POST['nickname'];
		echo '">
			</div><!--ends form group-->
		  </div><!--ends col-->
		  
		</div> <!--ends row-->';}
		else if($hide_nic=="yes"){echo "";};	
		
	   $hide_bio = get_option("hidebio"); 
		//echo $hide_bio; exit;
		if($hide_bio=="no"){
			
		echo '<div class="row">
		  <div class="col-md-12">
			<div class="form-group">
			<label for="bio"><i class="fa fa-info-circle"></i>  About / Bio</label>
			<textarea name="bio">';
			if(isset($_POST["bio"])) echo $_POST["bio"];
		echo '</textarea></div><!--ends form group-->
			</div><!--ends col-->
		</div> <!--ends row-->';    
		}
		
		else if($hide_bio=="yes"){echo "";};?>	
			
		<input type="submit" name="submit" value="Register"/>
		</form>
			
		
		
		
		
		
		</div><!--ends panel content-->
	</div><!--ends panel panel-default-->
</div><!--ends col-12-->
	

<?php
}//// ends show custom registration form


















/////////////////////////////////////////////////////////////////////////////////foundation frmeworks/////////////////////////////////////////////////////////////////////////////////


//get the form
function show_registration_form_foundation($error="") {?>


<?php 
if(!empty($error)){
		//shows the alert box with errors from the form
?>		
	<div style="margin-top: 110px" data-alert class="alert-box alert radius">
	   <strong>Error!</strong><br> <?php echo $error; ?>
	  <a href="#" class="close">&times;</a>
	</div>

<?php
}//ends if not empty error
?>

<div  style="margin-top: 110px;" class="large-10 large-centered columns">
	<div class="panel">
		<div style="background-color: #1abc9c; background-color: #1abc9c; border: 4px groove #CCC; border-radius: 6px; padding-top: 1%;" class="panel-heading"><h6 style="text-align: center;">Required   <i style="color: red;" class="fa fa-asterisk"></i></h6></div><!--ends panel heading-->
		<div class="panel-body">
		
			<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post">
			
			<div class="row">
			<div class="small-6 medium-4 columns">
				<div class="form-group">
					<label for="username"><i class="fa fa-user"></i>  Username <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="text" name="username" value="<?php  if(isset($_POST['username'])) echo $_POST['username'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
		  
			<div class="small-6 medium-4 columns">
				<div class="form-group">
					<label for="password"><i class="fa fa-user-secret"></i>  Password <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="password" name="password" value="<?php  if(isset($_POST['password'])) echo $_POST['password'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
			
			<div class="small-6 medium-4 columns">
				<div class="form-group">
					<label for="password"><i class="fa fa-user-secret"></i>  Password 2 <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="password" name="password2" value="<?php  if(isset($_POST['password2'])) echo $_POST['password2'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
		  
			<div class="small-6 medium-4 columns">
				<div class="form-group">
					<label for="email"><i class="fa fa-envelope"></i> Email<i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="text" name="email" value="<?php  if(isset($_POST['email'])) echo $_POST['email'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
			
			
			<div class="small-12 medium-6 columns">
				<div class="form-group">
					<label for="website"><i class="fa fa-globe"></i>  Website</label>
					<input style="width: 95%;" type="text" name="website" placeholder="http://www.example.com"					value="<?php  if(isset($_POST['website'])) echo $_POST['website'];?>">
				</div><!--ends form group-->
			</div><!--ends col-->
		  
		</div><!--ends row-->
			
		<div class="row">
		  <div class="small-6 medium-4 columns">
			<div class="form-group">
			<label for="firstname"><i class="fa fa-user"></i>  First Name</label>
			<input type="text" name="fname" value="<?php  if(isset($_POST['fname'])) echo $_POST['fname'];?>">
			</div><!--ends form group-->
		  </div><!--ends col-->
		  
		 <div class="small-6 medium-4 columns">
			<div class="form-group">
			<label for="website"><i class="fa fa-user"></i>  Last Name</label>
			<input type="text" name="lname" value="<?php  if(isset($_POST['lname'])) echo $_POST['lname'];?>">
			</div><!--ends form group-->
		  </div><!--ends col-->
		  
		 <div class="small-6 medium-4 columns">
			<div class="form-group">
			<label for="nickname"><i  class="fa fa-black-tie"></i>  Nickname</label>
			<input type="text" name="nickname" value="<?php  if(isset($_POST['nickname'])) echo $_POST['nickname'];?>">
			</div><!--ends form group-->
		  </div><!--ends col-->
		  
		</div> <!--ends row-->    
			
		<div class="row">
		  <div class="small-12 columns">
			<div class="form-group">
			<label for="bio"><i  class="fa fa-info-circle"></i>  About / Bio</label>
			<textarea name="bio"><?php  if(isset($_POST['bio'])) echo $_POST['bio'];?></textarea>
			</div><!--ends form group-->
			</div><!--ends col-->
		</div> <!--ends row-->    
			 
			
		<p style="text-align: center;"><input type="submit" name="submit" value="Register"/></p>
		</form>
			
		
		
		
		
		
		</div><!--ends panel content-->
	</div><!--ends panel panel-default-->
</div><!--ends col-12-->
	

<?php
}//// ends show custom registration form


























////////////////////////////////////////////////////////////////////////////html5 frameworks////////////////////////////////////////////////////////////////////////////////////////


//get the form
function show_registration_form_html5($error="") {?>


<?php 
if(!empty($error)){
		//shows the alert box with errors from the form
?>
	<script>
	function myFunction() {
		alert(" <strong>Error!</strong><br> <?php echo $error; ?>");
	}
	</script>




		<div class="alert alert-danger">
		 
		</div><!--ends strong alert box-->
<?php
}//ends if not empty error
?>


	<div style="background-color: white; border: 4px groove #ccc; border-radius: 6px;">
		<div style="padding:4px; background-color: #1abc9c; border-bottom: 2px groove #CCC; text-align: center; margin-bottom: 8px;"><h2>Required   <i style="color: red;" class="fa fa-asterisk"></i></h2></div><!--ends panel heading-->
		<div>
		
			<form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post">
			
			
		
				<div>
					<label for="username"><i style="color: #1abc9c;" class="fa fa-user"></i>  Username <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="text" name="username" value="<?php  if(isset($_POST['username'])) echo $_POST['username'];?>">
				</div><!--ends form group-->
			
		  
		
				<div>
					<label for="password"><i style="color: #1abc9c;" class="fa fa-user-secret"></i>  Password <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="password" name="password" value="<?php  if(isset($_POST['password'])) echo $_POST['password'];?>">
				</div><!--ends form group-->
			
			
		
				<div>
					<label for="password"><i style="color: #1abc9c;" class="fa fa-user-secret"></i>  Password Match <i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="password" name="password2" value="<?php  if(isset($_POST['password2'])) echo $_POST['password2'];?>">
				</div><!--ends form group-->
			
		  
			
				<div>
					<label for="email"><i style="color: #1abc9c;" class="fa fa-envelope"></i> Email<i style="color: red;" class="fa fa-asterisk"></i></label>
					<input type="text" name="email" value="<?php  if(isset($_POST['email'])) echo $_POST['email'];?>">
				</div><!--ends form group-->
			
			
				<?php
			    $hide_fname = get_option("hidefname"); 
				//echo $hide_fname; exit;
				if($hide_fname=="no"){
					
				echo '<div>
					<label for="fname"><i style="color: #1abc9c;" class="fa fa-user"></i>  First Name</label>
					<input type="text" name="fname" value="';
					if(isset($_POST['fname'])) echo $_POST['fname'];
				echo '">
					</div><!--ends form group-->';
				}else if($hide_fname=="yes"){echo "";};
				
			 
				
				$hide_lname = get_option("hidelname"); 
				//echo $hide_lname; exit;
				if($hide_lname=="no"){
					
				echo '<div>
					<label for="lname"><i style="color: #1abc9c;" class="fa fa-user"></i>  Last Name</label>
					<input type="text" name="lname" value="';
					if(isset($_POST['lname'])) echo $_POST['lname'];
				echo '">
					</div><!--ends form group-->';
				}else if($hide_lname=="yes"){echo "";};
				
				
				$hide_nic = get_option("hidenic"); 
				//echo $hide_nic; exit;
				if($hide_nic=="no"){
					
				echo '<div>
					<label for="nickname"><i style="color: #1abc9c;" class="fa fa-black-tie"></i>  Nickname</label>
					<input type="text" name="nickname" value="';
					if(isset($_POST['nickname'])) echo $_POST['nickname'];
				echo '">
					</div><!--ends form group-->';}
				else if($hide_nic=="yes"){echo "";};
			 
				
				 $hide_website = get_option("hidewebsite"); 
				//echo $hide_website; exit;
				if($hide_website=="no"){
					
				echo '<div>
					<label for="website"><i style="color: #1abc9c;" class="fa fa-globe"></i>  Website</label>
					<input style="width: 31%;" type="text" name="website" placeholder="http://www.example.com" value="';
					if(isset($_POST['website'])) echo $_POST['website'];
				echo '">
					</div><!--ends form group-->';
				}else if($hide_website=="yes"){echo "";};
			
			  
				
				
				$hide_bio = get_option("hidebio"); 
				//echo $hide_bio; exit;
				if($hide_bio=="no"){
					
				echo '<div style="margin:5px;">
				
					<label for="bio"><i style="color: #1abc9c;" class="fa fa-info-circle"></i>  About / Bio</label>
					<textarea name="bio">';
					if(isset($_POST["bio"])) echo $_POST["bio"];
				echo '</textarea></div><!--ends form group-->';    
				}
				
				else if($hide_bio=="yes"){echo "";};?>	
		
			
		<input style="margin:5px;" type="submit" name="submit" value="Register"/>
		</form>
			
		
		
		
		
		
		</div><!--ends panel content-->
	</div><!--ends panel panel-default-->

	

<?php
}//// ends show custom registration form












//validate the form
function validate_registration_form(){
	$username = $_POST['username'];
	$password = $_POST['password'];
	$password2 = $_POST['password2'];
	$email = $_POST['email'];
	$website = $_POST['website'];
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$nickname = $_POST['nickname'];
	$bio = $_POST['bio'];
	
	//initialize the error variable as empty
	$error = "";
	
	//check for emtpy fields on the required fields  for sernae  password and email
	
	
	
	
	
	
	//////////////////////////////////////////////////////////////username checking/////////////////////////////////////////////////////////////////////////////
	if(empty($username)){//check for empty
		$error.="Your username is empty.<br>";
	}else{//check to see if it exists
		if(!validate_username($username)){
			$error.="That username is not valid.<br>";
		}else{
			if(username_exists($username)){
			$error.="That username already exists.<br>";
			}//ends if username exists
		}//ends else of if!validate username
	}//ends else
		
	
	
	
	
	///////////////////////////////////////////////////////////////////pasword checking////////////////////////////////////////////////////////////////////////
	if(empty($password) or empty($password2)){
		$error.="One password fields is empty.<br>";
	}//ends if password
	else if($password !== $password2){
			$error.="your passwords do not match.<br>";
		}//ends password match else
	else if(strlen($password) < 6){
			$error.="Your password should be at least 6 characters.<br>";
			}//ends string length if
	else if (!preg_match("#[0-9]+#", $password)){
		
		
			$error.="Your password should contain at least one number!<br>";
	}
	
	
	
	
	
    ////////////////////////////////////////////////////////////////////email checking///////////////////////////////////////////////////////////////////
	if(empty($email)){
		$error.="Your email is empty.<br>";
	}else if(!is_email($email)){
		$error.="Your email is not a valid format.<br>";
	}else if(email_exists($email)){
			$error.="That email already exists.<br>";
		}//ends if email exists
	
	
	
	
	
	
	///////////////////////////////////////////////////////////////////////website checking////////////////////////////////////////////////////////////////////////

	//check for empty
	if(!empty($website)){//now its validate time
		if (!filter_var($website, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED) === true) {
		}//ends if!emtpy statement
		else {
			$error.="That website is invalid.<br>";
		}//ends else
	}//ends if url validate
	

	// return the error variabl for the whole function
	return $error;
}





// registration on success
 function register(){
	 //sanitize the registration data
	$username = sanitize_user($_POST['username']);
	$password = esc_attr($_POST['password']);
	$email = sanitize_email($_POST['email']);
	$website = esc_url($_POST['website']);
	$fname = sanitize_text_field($_POST['fname']);
	$lname = sanitize_text_field($_POST['lname']);
	$nickname = sanitize_text_field($_POST['nickname']);
	$bio = sanitize_text_field($_POST['bio']);
	
	
	
	
	$userdata = array(
    'user_login'  =>  $username,
	'user_email'  =>  $email, 
	'user_pass'  =>  $password, 
    'user_url'    =>  $website,
	'first_name'  =>  $fname, 
	'last_name'  =>  $lname, 
	'nickname'  =>  $nickname, 
	'description'  =>  $bio, 
	);
 
	$user_id = wp_insert_user( $userdata ) ;
 
	//On success
	if($user_id) {
	 echo 'Registration complete. Goto <a href="'. get_site_url().'/login/"><i class="fa fa-sign-in"></i>  Login Page</a>.';
	}
	else{
		echo '<i class="fa fa-exclamation-triangle"></i>Registration Failed';
	}

 }

//// this is the main function
function custom_registration(){
	
	
		//check to see the option and value already exist
		$existing=get_option("frameworkgroup", $selected);
			
	
	//if the form hs been submitted
if(isset($_POST["submit"]))
{
	// now the form button was pushed lets check for errors
	$error=validate_registration_form();
	if($error==""){// if success
     register();
	}
	else{//if error
		//check to see if the option exists if not then insert
			if(empty($existing)){
					show_registration_form_html5($error);
				}//ends if empty
				else if($existing=="html5"){
					show_registration_form_html5($error);
				}//ends else html5
				else if($existing=="bootstrap"){
					show_registration_form_bootstrap($error);
				}//ends else bootstraap
				else if($existing=="foundation"){
					show_registration_form_foundation($error);
				}//ends else foundation
	}
}//ends the if statement

// else first time to see the site
else{//showing the form
//check to see if the option exists if not then insert
			if(empty($existing)){
					show_registration_form_html5();
				}//ends if empty
				else if($existing=="html5"){
					show_registration_form_html5();
				}//ends else html5
				else if($existing=="bootstrap"){
					show_registration_form_bootstrap();
				}//ends else bootstraap
				else if($existing=="foundation"){
					show_registration_form_foundation();
				}//ends else foundation

}//ends the else statement
	
}// ends
// regster a new shortcode: [custom_registration]
// first parameter is the shorcode tag you pput in your post
// seconf parameter is function to execute with shortcode
add_shortcode('custom_registration', 'custom_registration_shortcode');











function custom_registration_shortcode(){
	
	// prevents ascending of any data through the page until fucntion below has executed
	ob_start();
	
	// name of our main plugin function
	custom_registration();
	
	// allows ascending of data once loaded
	return ob_get_clean();
}






?>