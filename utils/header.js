import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'MySelf', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'Projects', id: 'my-work' },
        { title: 'Reviews', id: 'reviews' },
        { title: 'Certifications', id: 'certifications' },  
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Curriculum Vitae | CV',
        onClick: () => openLink('assets/Kshitish_Resume_Freshers.pdf')
    },
    logo: {
        src: '/assets/profile.jpeg',
        alt: 'kshitish'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header