$('#myCarousel').carousel({
    interval: 5000
})

$('#myCarousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

    var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});

//form validation
    const form = document.getElementById('project-details');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        // Use AJAX to submit the form data to the server
        const formData = new FormData(form);
        fetch('insert.php', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

