import anime from 'animejs/lib/anime.es.js';

const DURATION = 400;


export function sectionAnimation(section) {
    console.log(section.querySelector('.js-slide-right'));
    const tl = anime.timeline({duration: DURATION, easing: 'cubicBezier(.01,.26,.78,.31)'});
    tl
    .add({
        targets: section.querySelector('.js-slide-left'),
        translateX: ['-150%', 0]
    })
    .add({
        targets: section.querySelector('.js-slide-right img'),
        translateX: ['150%', 0]
    }, `-=${DURATION}`)
    .add({
        // targets: section.querySelectorAll('.layer-item'),
        // opacity: [0, 1],
        // delay: anime.stagger(100),
        targets: section.querySelectorAll('.layer-item:nth-child(odd)'),
        translateX: ['-150%', 0],
        translateY: ['150%', 0],
        easing: 'easeInOutQuad',
    })
    .add({
        // targets: section.querySelectorAll('.layer-item'),
        // opacity: [0, 1],
        // delay: anime.stagger(100),
        targets: section.querySelectorAll('.layer-item:nth-child(even)'),
        translateX: ['150%', 0],
        translateY: ['-150%', 0],
        easing: 'easeInOutQuad',
    }, `-=${DURATION}`)
}