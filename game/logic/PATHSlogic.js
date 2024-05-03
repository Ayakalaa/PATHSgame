var currentPage = 'Home';

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
        if (currentPage === 'Home') {
            if (option === 'Option 1') {
                currentPage = 'Page 1';
                document.getElementById("paths-text").textContent = "You chose Option 1. This leads to " + currentPage;
            } else if (option === 'Option 2') {
                currentPage = 'Page 2';
                document.getElementById("paths-text").textContent = "You chose Option 2. This leads to " + currentPage;
            } else if (option === 'Option 3') {
                currentPage = 'Page 3';
                document.getElementById("paths-text").textContent = "You chose Option 3. This leads to " + currentPage;
            }
        } else if (currentPage === 'Page 1') {
            if (option === 'Option 1') {
                currentPage = 'Page 1.1';
                document.getElementById("paths-text").textContent = "You chose Option 1. This leads to " + currentPage;
            } else if (option === 'Option 2') {
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
        
        // Fade in text and option images
        textContainer.style.opacity = '1';
        optionImages.forEach(function(image) {
            image.style.opacity = '1';
        });
    }, 500); // Adjust the delay time as needed
}