//need for everything, waits for the document 
//or page to load before this script belo can be executed
jQuery(document).ready( function($) {
// variable to hold request
// bind to the submit event of our form
//on the eventof the form being submitted
//$("#ajaxDemo2").submit(function(event){
$( "#UserName" ).blur(function() {
 //alert("hello")
    // setup some local variables
	// (this) refers to the form itsself
	//this forms elements store in form variable
	//var fullName = $('input[name=fullName]').val();
	
	
	//this one is differnt, it only grbs the username from the username input box

    var $UserName = $(this).val();
	//alert($UserName);
	

    
 
    // serialize the data in the form
    //if you serialize you dont need to do this
    //$("#input_form").submit(function(){
    //var first name = $('input[name=first name]').val();
    //var last name = $('input[name=last name]').val();
    //var email = $('input[name=email]').val();
 
// serializedData is a string that contains form input variables
// The string is sent in the ajax request
	
	//all data from form is place in a querry string and seperaed with an amperstand symbol
	//in name/value pairs
    //var serializedData = $form.serialize();
 
 
    // fire off the request to /form.php
    // request is a jqXHR object which handles the HTTP request and handles the callbacks 
    // of the request 
     
	

	
	var request;
	 // ths creates a fake post because we dot have a post just a ovement from input box to input box
    request = $.ajax({
        //wordpress ajax the url must always ink here
		//instead of using proess.php we have to use a hook(wp_ajax) which is defined in the
		//admin-ajax.php file
        url: "../wp-admin/admin-ajax.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: {action: 'searchUserName', username:$UserName},
        //type of data to be returned to client(browser)
        dataType: "json"
    });
	
	//alert(request);
 
    // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		  
		  //alert(response.status);
		  if(response.status !=1){
         $("#result").html("<span style='color:red;'>Username is taken!</span>");
		  }
		  //if the username is available
		  else{ 
		  $("#result").html("<span style='color:green;'>Username is Available!</span>");
		  }
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});




//check to see if th epassword is atleast 8 characters long
	$("#password").blur(function(){
	//alert("gggg");
	 var $password = $(this).val();
	
	
		
		
		var request;
	 
		request = $.ajax({
        //where data will be processed
        url: "../wp-admin/admin-ajax.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: {action: 'check_pass_length', password:$password},
        //type of data to be returned to client(browser)
        dataType: "json"
    });
	
	 // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		 if(response.status == 0){
        $("#result2").html("<span style='color:red;'>Password Needs to atleast 8 characters</span>");
		  }
		  //if the username is available
		  else{ 
		  $("#result2").html("<span style='color:green;'>Password meets the requirements!</span>");
		  }
         
		  
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});





//check to see if the email already exists
	$("#email").blur(function(){
	//alert("gggg");
	 var $email = $(this).val();
	
	
		
		
		var request;
	 
		request = $.ajax({
        //where data will be processed
        url: "../wp-admin/admin-ajax.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: {action: 'check_email_exists', email:$email},
        //type of data to be returned to client(browser)
        dataType: "json"
    });
	
	 // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		 if(response.status == 0){
        $("#result3").html("<span style='color:red;'>Email Already Exists</span>");
		  }
		  //if the username is available
		  else{ 
		  $("#result3").html("<span style='color:green;'>Email Available</span>");
		  }
         
		  
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});
});//ends all

