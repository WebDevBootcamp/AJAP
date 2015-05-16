#Readme

Insignia Badges

####Code Example
    
    $('#yourDiv').insignia({
    usernameTreehouse: 'joseg',
    usernameCodeschool: 'joseg'
    });
    
####Motive/Influences
Treehouse, Code School, WebLab, programming

####Installation
No installation necessary.  Just go to [https://github.com/WebDevBootcamp/AJAP.git](https://github.com/WebDevBootcamp/AJAP.git)
Copy the code
Paste the code
You have the option of placing this into any section of your site and inputting your username in **CodeSchool** or in **Treehouse**:  

`
<div class="insignia" data-codeschool="audreyklammer" data-treehouse=""></div>
`  

####API Reference
[https://github.com/WebDevBootcamp/AJAP.git](https://github.com/WebDevBootcamp/AJAP.git)

###Testing
For testing username()

	<script>
	function username() {
	var x, text;
	
	// Get the value of the input field with id="numb"
	x = document.getElementById("numb").value;
	
	// If x is Not a Number or less than one or greater than 10
	if (!string(x)) {
	text = "Input not valid";
	} else {
	text = "Input OK";
	}
	document.getElementById("demo").innerHTML = text;
	}
</script>

For testing getBadges()

    <script>
    	function getBadges() {
    	var x, text;
    	
    	// Get the value of the input field with id="numb"
    	x = document.getElementById("numb").value;
    	
    	// If x is Not a Number or less than one or greater than 10
    	if (!$ajax(x)) {
    	text = "Input not valid";
    	} else {
    	text = "Input OK";
    	}
    	document.getElementById("demo").innerHTML = text;
    	}
    </script>

####Contributors
Aaron, Jose Audrey Prakash

####License
Describe the license (MIT, Apache, etc.) in a word or two.

