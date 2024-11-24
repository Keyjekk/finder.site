document.addEventListener('scroll', function() {
    const reviewsBlock = document.querySelector('.rewiews-block');
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = reviewsBlock.offsetTop + (reviewsBlock.offsetHeight * 0.6);

    if (scrollPosition >= elementPosition) {
        reviewsBlock.classList.add('fullscreen');
    } else {
        reviewsBlock.classList.remove('fullscreen');
    }
});