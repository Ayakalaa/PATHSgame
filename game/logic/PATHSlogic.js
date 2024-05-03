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
            if (option === 'Begin') {
                currentPage = '0S';
                document.getElementById("vs").textContent = currentPage + " - Begin"; 
                document.getElementById("paths-text").textContent = "You’re just walking down a school hallway as normal, when all of a sudden a portal appears on the wall. <br> The portal is a swirl of colors, and you can’t decide which one it is, or where it could possibly lead to. <br> Your next class starts in a few minutes, and you can’t be late, as you’ll miss your test.";
                document.getElementById("fontmention").textContent = "";
                document.getElementById("mention").textContent = "";
                document.getElementById("back").textContent = "";
            }
        }
        
        if (currentPage === '0S') {
            if (option === 'Option 1') {
                currentPage = 'Path-1';
                document.getElementById("paths-text").textContent = currentPage + " - You decide to continue down the hallway, and continue your day as usual. When you reach your class though, you appear to be the only person there. Not even the teacher is anywhere to be found. “Weird.” Sometimes the teacher is late to class, and students are commonly late. It could just be that.";
                document.getElementById("vs").textContent = currentPage;
            } 
            
            else if (option === 'Option 2') {
                currentPage = 'Path-2';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
            } 
            
            else if (option === 'Option 3') {
                currentPage = 'Path-3';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
            }

        } 
        
        else if (currentPage === 'Path-1') {
            if (option === 'Option 1') {
                currentPage = 'Path-1.1';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
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

        else if (currentPage === 'Path-3') {
            if (option === 'Option 1') {
                currentPage = 'Path-3.1';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
                }

            else if (option === 'Option 2') {
                currentPage = 'Path-3.2';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
                }

            else if (option === 'Option 3') {
                currentPage = 'Path-3.3';
                document.getElementById("paths-text").textContent = currentPage;
                document.getElementById("vs").textContent = currentPage;
                }

        }
            
        else {
            // Add logic for additional pages if needed
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
        '0': ['Begin'],
        '0S': ['Option 1', 'Option 2', 'Option 3'],
        'Path-1': ['Option 1', 'Option 2', 'Option 3'],
        'Path-2': ['Option 1', 'Option 2', 'Option 3'],
        'Path-3': ['Option 1', 'Option 2', 'Option 3'],
        

        

        
        // Add more pages and their corresponding options here, said ChatGPT
    };

    var currentPageOptions = options[currentPage];

    var optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear existing options

    if (currentPageOptions) {
        currentPageOptions.forEach(function(optionText) {
            var optionElement = document.createElement("img");
            optionElement.src = optionText + ".jpg"; // Assuming option text corresponds to image filenames
            optionElement.className = "option-image";
            optionElement.onclick = function() { nextPart(optionText); };
            optionsContainer.appendChild(optionElement);
        });
    }
}

// Call updateOptions when the page loads
window.onload = updateOptions;
