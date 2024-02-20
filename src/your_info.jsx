//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'https://images.wallpaperscraft.com/image/single/man_photographer_roof_146991_3840x2400.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Cristian',
  lastname: 'Idrobo',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Desarrollador Web',
  'FrontEnd...',
  'Backend...'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/christoph-pfrommer',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/Pfrommer1982',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////



const categories = [
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Photography',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-certificate',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-instagram',
        title: 'JavaScript',
      },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Software',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },
     
      
    ],
  },
  {
    name: 'brands',
    icon: 'lni lni-code',
    title: 'Brands',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Pinterest',
      },
      {
        icon: 'lni lni-crop',
        title: 'Crop',
      },
      
    ],
  },
  
];

// Here you can give in your achiements in a number counter animation
const achievements = [
  //{ word: 'bullshit', value: 100, unit: '%' },
 // { word: 'finished projects', value: 7500, unit: '' },
  //{ word: 'experience', value: 20, unit: ' years' },
];


import guarderiaImage from './components/img/logo.png';
import verisImage from './components/img/med1.png';

// If you already have some projects, fill the url 

const projectData = [
  {
    title: 'Guarderia Manitos del Saber',
    description: 'Guarderia Manitos del Saber',
    demoUrl: guarderiaImage,
    githubUrl: 'http://manitosdelsaber.com/',
  },
  {
    title: 'Clinica Veris',
    description: 'Clinica Veris',
    demoUrl: verisImage,
    githubUrl: 'https://grupo3tg.000webhostapp.com/index.html',
  },
  
];

//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Jonathan. With 20 years of experience as photographer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.
    `,
  power_slogan: `Lorem ipsum dolor sit amet`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
