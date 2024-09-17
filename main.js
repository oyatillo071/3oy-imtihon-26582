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



  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) { 
        el.classList.add('visible');
      }
    });
  });



  

document.getElementById('showTextButton').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('email').value = '';  // Очищаем поле email
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none';
});
