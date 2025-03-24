const course = document.querySelector('.main-info__course-payment');

document.addEventListener('scroll', event => {
    // const course = document.querySelector('.main-info__course-payment');
    const top = $(course).offset().top;
    const left = $(course).offset().left;
    const rect = course.getBoundingClientRect()
    // console.log(rect.top * -1)
    // console.log(top)

    if (rect.top * -1 > 250) {

        course.classList.add('course_scroll');
    };
    if (top < 600) {
        course.classList.remove('course_scroll');
    };

}, false)






