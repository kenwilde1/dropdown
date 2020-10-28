const navLink = document.querySelector('.nav-link');
const dropdownList = document.querySelector('.dropdown-list');
const container = document.querySelector('.container');

navLink.addEventListener('mouseover', () => {
    if(dropdownList.classList.contains('show-info')){
        dropdownList.classList.toggle('show-info');
        navLink.classList.toggle('active-link');
    }
    
})

container.addEventListener('click', () => {
    if(!dropdownList.classList.contains('show-info')){
        dropdownList.classList.toggle('show-info');
        navLink.classList.toggle('active-link');
    }
})
