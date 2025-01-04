import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/kshitish28/',
        'instagram': 'https://www.instagram.com/_kshitish_moharana_/',
        'twitter': 'https://twitter.com/',
        'linkedin': 'https://www.linkedin.com/in/kshitish-kumar-moharana-32769a20b/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'kshitish.kumar1231@gmail.com',
        onClick: () => openLink('mailto:kshitish.kumar1231@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements