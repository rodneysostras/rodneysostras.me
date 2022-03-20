import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { 
    faLocationDot,
    faCodeBranch,
    faPhone,
    faHashtag,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { faStar } from "@fortawesome/free-regular-svg-icons";

library.add(
    faLocationDot,
    faStar,
    faCodeBranch,
    faPhone,
    faHashtag,
    faEnvelope,
    // BRANDS
    faGithub,
    faLinkedin,
    );

export default FontAwesomeIcon;