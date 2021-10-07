// HEADER TRANSPARENT AT MOVEMENT
const showButton = () => window.scrollY >= 100 ? document.querySelector('header.fixed').classList.add('movement') : document.querySelector('header.fixed').classList.remove('movement')
window.addEventListener('scroll', () => showButton())

// INPUT SHOW 

const searchIcon = document.querySelector('.search')
const searchInput = document.querySelector('.search.input')
const sectionCover = document.querySelector('section.cover')

const showingInput = () => {

    searchIcon.addEventListener('click', () => {
        searchIcon.classList.add('hidden');
        searchInput.classList.add('show-input')
        document.querySelector('header.fixed').classList.add('fadeBlack')
        sectionCover.classList.add('hidden')
    })

    searchInput.querySelector('i').addEventListener('click', () => {
        searchIcon.classList.remove('hidden');
        searchInput.classList.remove('show-input')
        document.querySelector('header.fixed').classList.remove('fadeBlack')
        sectionCover.classList.remove('hidden')
    })

}

showingInput()

// MENU SHOW 

const headerBlack = document.querySelector('header.aside')
const asideMenu = document.querySelector('aside.menu-genres')

const openMenu = document.querySelector('header.fixed .genres')
const closeMenu = headerBlack.querySelector('i')

const showingMenu = () => {

    openMenu.addEventListener('click', () => {
        headerBlack.classList.remove('invisible');
        asideMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        

    })

    closeMenu.addEventListener('click', () => {
        headerBlack.classList.add('invisible')
        asideMenu.classList.add('hidden')
        document.body.style.overflow = 'visible';

    })

    document.addEventListener ('keydown', (event) => {
        if (event.key === "Escape") { 
            headerBlack.classList.add('invisible')
            asideMenu.classList.add('hidden')
            document.body.style.overflow = 'visible';
        }
    });

}

showingMenu()

// CLOSE MENU AT CLICK AND PREVENT SCROLL

const navItems = document.querySelectorAll('aside.menu-genres nav a')

navItems.forEach(item => {
    item.addEventListener('click', () => {
        headerBlack.classList.add('hidden')
        asideMenu.classList.add('hidden')
        document.body.style.overflow = 'visible';
    })
})

  