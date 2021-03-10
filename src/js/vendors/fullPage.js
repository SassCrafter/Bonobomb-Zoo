import fullpage from 'fullpage.js';
import { sectionAnimation } from '../animations';
import { setSectionElsTranslate } from '../utils';


const fullpageInstance = new fullpage('#fullpage', {
    recordHistory: false,
    scrollingSpeed: 1000,
    easingcss3: 'cubic-bezier(.56,.4,.19,.84)',

    afterRender: function() {
        const jsSlideLeftEls = document.querySelectorAll('.js-slide-left');
        const jsSlideRightEls = document.querySelectorAll('.js-slide-right');
        setSectionElsTranslate();
    },

    afterLoad: function(origin, destination, direction) {
        const section = destination.item;
        // console.log(section.querySelector('.js-slide-left'));
        sectionAnimation(section);
    },

    onLeave: function(origin, destination, direction) {
        const leaveSection = origin.item;
        setTimeout(() => {
            setSectionElsTranslate(leaveSection);
        }, 1000)
    }
});