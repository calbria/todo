// Sidebar button
document.querySelector('.btn-toggle-sidebar').onclick = function () {
    document.querySelector('.btn-toggle-sidebar').classList.toggle('btn-toggle-sidebar-active');
    document.querySelector('.sidebar').classList.toggle('sidebar-mobile-active');
}

// Show more cards
const btnMoreCards = document.querySelector('.btn__more');
const hiddenCards = document.querySelectorAll('.card-hidden');

btnMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(elem => elem.classList.remove('card-hidden'));
})

// Show/hide widget
const widgets = document.querySelectorAll('.widget');
widgets.forEach(function (widget) {
    widget.addEventListener('click', function (elem) {
        if (elem.target.classList.contains('widget__title')) {
            elem.target.classList.toggle('widget__title-active');
            widget.lastElementChild.classList.toggle('widget__body-hidden');
        }
    })
})


// Location Checkbox 
const any = document.getElementById('location_05');
const locationCheck = document.querySelectorAll('[data-location-par]')
any.addEventListener('change', () => {
    if (any.checked) {
        locationCheck.forEach(item => item.checked = false);
    }

})

locationCheck.forEach(item => {
    item.addEventListener('change', () => {
        any.checked = false;
    })
})

const showHiddenOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBox = document.querySelectorAll('.checkbox__hidden');


showHiddenOptions.addEventListener('click', () => {
    if (showHiddenOptions.dataset.hidden == 'hidden') {
        hiddenCheckBox.forEach(item => item.classList.remove('checkbox__hidden'));
        showHiddenOptions.innerText = 'Show less';
        showHiddenOptions.dataset.hidden = 'unhidden'
    } else {
        hiddenCheckBox.forEach(item => item.classList.add('checkbox__hidden'));
        showHiddenOptions.innerText = 'Show more';
        showHiddenOptions.dataset.hidden = 'hidden'
    }
});


