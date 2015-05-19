#Readme

Insignia Badges  
A simple jquery plugIn that lets high level computer users keep track of their learning on thier own dashboard or blog so that they are motivated to keep learning even if they turned off their email notifications for each school.

####Code Example
    $(document).ready(function(){
	var user = document.querySelector('.insignia');
	$(".insignia").insignia(user.dataset.treehouse, user.dataset.codeschool);});

        
####Motive/Influences
Treehouse, Code School, WebLab, programming

####Demo and Installation
No installation necessary.  Just go to [https://github.com/WebDevBootcamp/AJAP.git](https://github.com/WebDevBootcamp/AJAP.git)  
Copy the code   
Paste the code  
  
You have the option of placing this into any section of your site and inputting your username in **CodeSchool** or in **Treehouse**:  

`
<div class="insignia" data-codeschool="username" data-treehouse="username"></div>
`  

###Testing
Please submit tests. Ajap is Open-Source.  
    
    your test code here

####Contributors
@Aaron
@Jose
@Audrey
@Prakash

####License
Open Source

