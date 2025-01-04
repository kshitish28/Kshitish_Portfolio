import { openLink } from "./methods"

const outer = {
    title1:  `Hello, I'm`,
    title2: 'Kshitish Kumar Moharana,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Web Developer',
        'A Traveler',
    ],
    desciption: `I’m an enthusiastic and dedicated aspiring Full Stack Developer with a passion for creating impactful web applications. Though I’m just starting my career, I have gained hands-on experience through personal projects and am eager to learn and grow while contributing to real-world solutions.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:kshitish.kumar1231@gmail.com?subject=Hello')
    }
}

export default outer
