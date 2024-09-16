document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelectorAll('img');
    let i = 0;

    mediaFiles.forEach((file) => {
        if (file.complete) { 
            incrementCounter(); 
        } else {
            file.onload = incrementCounter;
        }
    });

    function incrementCounter() {
        i++;
        percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed();
        if (i === mediaFiles.length) {
            preloader.classList.add('preloader--hide');
            percents.innerHTML = 100;
        }
    }
});
