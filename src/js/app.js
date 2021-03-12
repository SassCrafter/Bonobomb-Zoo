import '../sass/style.scss';

import videojs from 'video.js';
import '../../node_modules/video.js/dist/video-js.min.css';
import  './vendors/swiperInit.js';

import NavMenu from './NavMenu';
import { initForm } from './form';

import './vendors/fullPage.js';
import './loader.js';

const menu = new NavMenu();

initForm('#get-in-touch');