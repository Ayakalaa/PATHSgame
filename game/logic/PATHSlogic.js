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
            if (option === 'Option 1') {
                currentPage = 'Page 1';
                document.getElementById("paths-text").textContent = "You chose Option 1. This leads to " + currentPage;
            } 
            
            else if (option === 'Option 2') {
                currentPage = 'Page 2';
                document.getElementById("paths-text").textContent = "You chose Option 2. This leads to " + currentPage;
            } 
            
            else if (option === 'Option 3') {
                currentPage = 'Page 3';
                document.getElementById("paths-text").textContent = "You chose Option 3. This leads to " + currentPage;
            }

        } else if (currentPage === 'Page 1') {
            if (option === 'Option 1') {
                currentPage = 'Page 1.1';
                document.getElementById("paths-text").textContent = "You chose Option 1. This leads to " + currentPage;
            } 
            
            else if (option === 'Option 2') {
                currentPage = 'Page 1.2';
                document.getElementById("paths-text").textContent = "You chose Option 2. This leads to " + currentPage;
            }

        } else if (currentPage === 'Page 2') {
            if (option === 'Option 1') {
                currentPage = 'Page 2.1';
                document.getElementById("paths-text").textContent = "You chose Option 1. This leads to " + currentPage;
            } else if (option === 'Option 2') {
                currentPage = 'Page 2.2';
                document.getElementById("paths-text").textContent = "You chose Option 2. This leads to " + currentPage;
            }

        } else if (currentPage === 'Page 3') {
            if (option === 'Option 1') {
                currentPage = 'Page 3.1';
                document.getElementById("paths-text").textContent = "You chose Option 1. This leads to " + currentPage;
            } else if (option === 'Option 2') {
                currentPage = 'Page 3.2';
                document.getElementById("paths-text").textContent = "You chose Option 2. This leads to " + currentPage;
            } else if (option === 'Option 3') {
                currentPage = 'Page 3.3';
                document.getElementById("paths-text").textContent = "You chose Option 3. This leads to " + currentPage;
            }
        } else if (currentPage === 'Page 3.3') {
            if(option === 'Option 1') {
                currentPage = 'Page 3.3.1';
                document.getElementById("paths-text").textContent = "You chose this option. So this won't lead to" + currentPage;
            } else if(option === 'Option 2') {
                currentPage = 'Page 3.3.2';
                document.getElementById("paths-text").textContent = "You chose AAAAAAA SO A-" + currentPage;
                }
             }  else {
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
        '0': ['Option 1', 'Option 2', 'Option 3'],
        'Page 1': ['Option 1', 'Option 2'],
        'Page 2': ['Option 1', 'Option 2'],
        'Page 3': ['Option 1', 'Option 2', 'Option 3'],
        // Add more pages and their corresponding options here
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
