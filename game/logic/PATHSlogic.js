var currentPage = '0';

function nextPart(option) {
    var textContainer = document.getElementById("text-container");
    var optionImages = document.querySelectorAll('.option-image');

    // Fade out text and option images
    textContainer.style.opacity = '0';
    optionImages.forEach(function(image) {
        image.style.opacity = '0';
    });

    // Simulate loading delay
    setTimeout(function() {



        if (currentPage === '0') {
            if (option === '0S') {
                currentPage = '0S';
                document.getElementById("a").innerHTML = "";
                document.getElementById("vs").textContent = currentPage + " - Begin"; 
                document.getElementById("paths-text").innerHTML = "You’re just walking down a school hallway as normal, when all of a sudden a portal appears on the wall. <br> The portal is a swirl of colors, and you can’t decide which one it is, or where it could possibly lead to. <br> Your next class starts in a few minutes, and you can’t be late, as you’ll miss your test.";
                document.getElementById("fontmention").textContent = "";
                document.getElementById("mention").textContent = "";
                document.getElementById("back").textContent = "";
            }
        }
        

        //This is the beginning page

        
        if (currentPage === '0S') {
            if (option === 'Path-1') {
                currentPage = 'Path-1';
                document.getElementById("paths-text").innerHTML = currentPage + " - You decide to continue down the hallway, and continue your day as usual. When you reach your class though, you appear to be the only person there. Not even the teacher is anywhere to be found. “Weird.” Sometimes the teacher is late to class, and students are commonly late. It could just be that.";
                document.getElementById("vs").textContent = currentPage;
            } 
            
            else if (option === 'Option 2') {
                currentPage = 'Path-2';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage + " - You step through the portal, and next thing you know, you’re in a dark room without any lights. You quickly get your phone out of your backpack, and turn on the flashlight. The room has no windows, and the only thing of note is an old wooden door on the opposite wall from where you are standing. You turn around; the portal is gone. It looks like you’ll be stuck here for a while.";
            } 
            
            else if (option === 'Option 3') {
                currentPage = 'Path-3';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage + " -  You look around the hallway, but don’t see any teachers or classrooms, so you end up walking the way you were going. You find a classroom, and knock on the door. The teacher inside asks you what you need. You tell her that there is something weird in the hallway. She asks you to lead her there, and you do so. Except the portal isn’t there anymore. The teacher asks you if you think this is a joke.";
            }
        } 
        

          //This is the beginning page for Path 1 "Missing People"
            
            
          else if (currentPage === 'Path-1') {
            if (option === 'Option 1') {
                currentPage = 'Path-1.1';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage + " - You decide that you’re lucky and are early to class for once. You put your things where you usually do by your desk, and grab a pencil. You wait for someone else to show up. And you wait, and wait, and wait, and wait. Eventually, 30 minutes later, you know something is very wrong. Is this some sort of prank? Maybe you should go see if there’s anyone else here. Maybe someone will tell you what’s going on.";
            } 
            
            else if (option === 'Option 2') {
                currentPage = 'Path-1.2';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
            }

            else if (option === 'Option 3') {
                currentPage = 'Path-1.3';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
                }
        } 


        else if (currentPage === 'Path-1.1') {
            if (option === 'Option 1') {
                currentPage = 'Path-1.4';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
                }
        
                else if (option === 'Option 2') {
                currentPage = 'Path-1.5';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent - currentPage;
                }   
        }

        
        //This is the beginning page for Path 2 "Portal Void"
            
            
        else if (currentPage === 'Path-2') {
            if (option === 'Option 1') {
                currentPage = 'Path-2.1';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
            } 
            
            else if (option === 'Option 2') {
                currentPage = 'Path-2.2';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
            }

            else if (option === 'Option 3') {
                currentPage = 'Path-2.3';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
            }

        } 


         //This is the beginning page for Path 3 "Teacher Issues"
            
            
         else if (currentPage === 'Path-3') {
            if (option === 'Option 1') {
                currentPage = 'Path-3.1';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage + " - You try to convince the teacher that you actually saw a portal in the hallway, but your lack of proof is obvious, and it’s clear the teacher doesn’t believe you. The teacher asks you if this is funny. You try to tell her that you’re serious, but she doesn’t listen. She gives you one last chance to come off clean and admit to wasting her time.";
                }

            else if (option === 'Option 2') {
                currentPage = 'Path-3.2';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage + " - The teacher looks very disappointed, and drags you over to the principal’s office. She tells the person at the desk what you did, and you in turn get a detention. You are told to go to the detention room during lunch, and head back to your usual class. You walk over to your class, where everyone is already there, and about to start testing. You hand your teacher the late pass you got alongside the detention paper. You sit down to go take your test.";
                }
        }


        else if (currentPage === 'Path-3.1') {
            if (option === 'Option 1') {
                currentPage = 'Path-3.3'
                document.getElementById("vs").textContent = currentPage;
                document.getElementById("paths-text").textContent = currentPage + "You still are trying to convince the teacher about what you saw, and maybe she sees your honesty in your face, because she looks at you differently. She has you follow her, but instead of going to the principal’s office like you thought, she instead brings you to the counselor's office. Once there, she’s explaining what you said to the counselors, where they ask you directly if you are lying, or if you are being sincere.";
                }

            else if(option === 'Option 2') {
                currentPage = 'Path-3.4'
                document.getElementById("vs").textContent = currentPage;
                document.getElementById("paths-text").textContent = currentPage + "The teacher looks very disappointed, and drags you over to the principal’s office. She tells the person at the desk what you did, and you in turn get a detention. You are told to go to the detention room during lunch, and head back to your usual class. You walk over to your class, where everyone is already there, and about to start testing. You hand your teacher the late pass you got alongside the detention paper. You sit down to go take your test.";
                }
        }
            
       

        // Update options based on the current page
        updateOptions();

        // Fade in text and option images
        textContainer.style.opacity = '1';
        optionImages.forEach(function(image) {
            image.style.opacity = '1';
        });
    }, 500); // Adjust the delay time as needed
}

// Function to update options based on the current page
function updateOptions() {
    // Define the options array for each page
    var options = {
        
        //Beginning Pages  Options
        '0': ['0S'],
        '0S': ['Path-1', 'Option 2', 'Option 3'],


        //Beginning of Path 1
        'Path-1': ['Option 1', 'Option 2', 'Option 3'],
        'Path-1.1': ['Option 1', 'Option 2'],


        //Beginning of Path 2
        'Path-2': ['Option 1', 'Option 2', 'Option 3'],
        

        //Beginning of Path 3
        'Path-3': ['Option 1', 'Option 2'], 
        'Path-3.1': ['Option 1', 'Option 2'],

    };

    var currentPageOptions = options[currentPage];


    var optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear existing options


    if (currentPageOptions) {
        currentPageOptions.forEach(function(optionText) {
            var optionElement = document.createElement("img");
            optionElement.src = "images/options/" + optionText + ".png"; // Set the image source
            optionElement.className = "option-image";
            optionElement.onclick = function() {
                nextPart(optionText); // Call nextPart function with the option text
            };
            optionsContainer.appendChild(optionElement); // Append the option image to the container
        });
    }
}


// Call updateOptions when the page loads
window.onload = updateOptions;
