function Path1Logic() {
    // Logic specific to Path 1

    if (currentPage === '0S') {
        if (option === 'Option 1') {
            
            currentPage = 'Path-1';
            document.getElementById("paths-text").innerHTML = currentPage + " - You decide to continue down the hallway, and continue your day as usual. When you reach your class though, you appear to be the only person there. Not even the teacher is anywhere to be found. “Weird.” Sometimes the teacher is late to class, and students are commonly late. It could just be that.";
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

}
export { Path1Logic };
