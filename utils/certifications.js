import { openLink } from "./methods"

const certifications = {
    heading:  `Courses & certifications`,
    list: [
        {
            size: 1.5,
            title: 'Frontend Development',
            platform: 'Onsite',
            link: '',
            date: 'June 2024 - Nov 2024',
            logo: '/assets/Bdreamz.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1.5,
            title: 'Full Stack Development',
            platform: 'Besant Technologies',
            link: '',
            date: 'Jun 2024 - Dec 2024',
            logo: '/assets/Besant.png',
            aos: 'zoom-out-right'
        }
    ],
    handleIconClick: openLink
}

export default certifications