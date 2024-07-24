import emoji from "react-easy-emoji";
import { ProjectT } from "../types/ProjectT";
import { SkillsSectionT } from "../types/SkillsSection";

export const greetings = {
    name: "Khalid Alansi",
    title: "Hi all, I'm Khalid Alansi",
    description:
        "I'm Full Stack Developer with over 6 years of experience in software engineering and developing new features and apps for different products and clients by using programming tools like Reactjs, React-Native, Wordpress, Laravel, Node.js ..etc . Capable of analyzing customer feedback in order to find the best way to create new and enhance the existing product features and performing quality assurance.",
    resumeLink:
        "https://drive.google.com/file/d/17_ejz7GAQw5Aq7MPP2JhjHIsn8Gvvcwj/view?usp=sharing",
};

export const openSource = {
    githubUserName: "Khalidalansi",
};

export const contact = {};

interface SocialLinksT {
    [key: string]: string
}
export const socialLinks: SocialLinksT = {
    // url: "https://khalidalansi.github.io/",
    linkedin: "https://www.linkedin.com/in/khalid-alansi",
    github: "https://github.com/Khalidalansi",
    // instagram: "https://www.instagram.com/__hanzla100",
    // facebook: "https://www.facebook.com/1hanzla100",
    // twitter: "https://twitter.com/1hanzla100",
};

export const skillsSection: SkillsSectionT = {
    title: "What I do",
    subTitle:
        "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: require("../assets/lottie/skills/fullstack.json"), // Path of Lottie Animation JSON File
            skills: [
                emoji(
                    "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
                ),
                emoji(
                    "⚡ Building Mobile App in React-Native"
                ),
                emoji("⚡ Building responsive static websites using React.js"),
                emoji(
                    "⚡ Building RESTful APIs in PHP & Laravel REST Framework & WordPress REST API"
                ),
            ],
            softwareSkills: [
                {
                    skillName: " tailwindcss",
                    fontAwesomeClassname: "logos:tailwindcss-icon",
                },
                {
                    skillName: " styled-components",
                    fontAwesomeClassname: "simple-icons:styled-components",
                },
                {
                    skillName: "Material UI",
                    fontAwesomeClassname: "logos:material-ui",
                },
                {
                    skillName: "Typescript",
                    fontAwesomeClassname: "vscode-icons:file-type-typescript",
                },
                {
                    skillName: "Redux",
                    fontAwesomeClassname: "logos:redux",
                },
                {
                    skillName: "Webpack",
                    fontAwesomeClassname: "logos:webpack",
                },
                {
                    skillName: "Laravel",
                    fontAwesomeClassname: "logos:laravel",
                },
                {
                    skillName: "React-Native",
                    fontAwesomeClassname: "tabler:brand-react-native",
                },
           
                {
                    skillName: "Reactjs",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
                },
        
                {
                    skillName: "NPM",
                    fontAwesomeClassname: "logos:npm-icon",
                },
                {
                    skillName: "Yarn",
                    fontAwesomeClassname: "logos:yarn",
                },
                  
                {
                    skillName: "Wordpress",
                    fontAwesomeClassname: "skill-icons:wordpress",
                },
                {
                    skillName: "Nodejs",
                    fontAwesomeClassname: "logos:nodejs",
                },
                {
                    skillName: "PHP",
                    fontAwesomeClassname: "vscode-icons:file-type-php3",
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript",
                },
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html",
                },

                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css",
                },
                {
                    skillName: "Bootstrap",
                    fontAwesomeClassname: "logos:bootstrap",
                },
                {
                    skillName: "c-sharp",
                    fontAwesomeClassname: "logos:c-sharp",
                },
                // {
                //     skillName: "sql-server",
                //     fontAwesomeClassname: "logos:sql-server",
                // },
                // {
                //     skillName: "vb-net",
                //     fontAwesomeClassname: "vscode-icons:file-type-vba",
                // },
    
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: require("../assets/lottie/skills/cloudinfra.json"), // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Experience of working on multiple cloud platforms"),
                emoji(
                    "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
                ),
                emoji(
                    "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
                ),
            ],
            softwareSkills: [
                // ? Check README To get icon details


                {
                    skillName: "Github",
                    fontAwesomeClassname: "akar-icons:github-fill",
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "logos:docker-icon",
                },
                {
                    skillName: "Github Actions",
                    fontAwesomeClassname: "logos:github-actions",
                },

                {
                    skillName: "Nginx",
                    fontAwesomeClassname: "logos:nginx",
                },

            ],
        }
    ],
};

export const SkillBars = [
    {
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "95", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend",
        progressPercentage: "95",
    },
    {
        Stack: "Mobile/App",
        progressPercentage: "90",
    },
    {
        Stack: "Desktop/App",
        progressPercentage: "85",
    },
    {
        Stack: "Programming",
        progressPercentage: "90",
    },
];

export const educationInfo = [
    {
        schoolName: "University of Modern Sciences",
        subHeader: "Bachelor degree in Information Technology",
        duration: "September 2013 - April 2016",
        desc: "",
        // grade: "Grade A",
        // descBullets: [
        // 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
        // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // ],
    },

];

export const experience = [
    {
        role: "Full-Stack Developer",
        company: "INTP LLC",
        companylogo: require("../assets/images/intp.png"),
        // companylogo: "https://avatars.githubusercontent.com/u/81111279?v=4",

        date: "2018 – 2023",
        desc: "It's a startup in USA in Denver developing websites and mobile apps.",
    },


    // {
    // 	role: "Backend Developer",
    // 	company: "Wapidu",
    // 	companylogo: "/img/icons/common/wapidu.jpg",
    // 	date: "Sept 2021",
    // 	desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
    // },
];

export const projects: Array<ProjectT> = [
    {
        name: "use-interval",
        desc: "A custom React Hook to help you implement a \"interval\" method. ",
        github: "https://github.com/Khalidalansi/useInterval",
        link: "https://www.npmjs.com/package/@khalidalansi/use-interval",
        images: [
            // {
            //     link: require("../assets/images/projects/portfolio.jpg")
            // }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "Typescript",
                fontAwesomeClassname: "vscode-icons:file-type-typescript",
            },
            {
                name: "npm",
                fontAwesomeClassname: "logos:npm-icon",
            },
        ]
    },
    {
        name: "Portfolio",
        desc: "Software Developer Portfolio Template built with react.js and typescript bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/Khalidalansi/khalidalansi.github.io",
        link: "https://khalidalansi.github.io",
        images: [
            {
                link: require("../assets/images/projects/portfolio.jpg")
            }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "Bootstrap",
                fontAwesomeClassname: "logos:bootstrap",
            },
            {
                name: "HTML-5",
                fontAwesomeClassname: "vscode-icons:file-type-html",
            },

            {
                name: "CSS-3",
                fontAwesomeClassname: "vscode-icons:file-type-css",
            },
            {
                name: " styled-components",
                fontAwesomeClassname: "simple-icons:styled-components",
            },

        ]
    },
    {
        name: "Movesheet",
        desc: "This is a project for the company and it is a web application and a mobile application ( React js - Node js - Wordpress - Webppack - React-Native ).",
        link: "https://movesheet.com",
        images: [
            {
                link: require("../assets/images/projects/movesheet.jpg")
            },
            {
                link: require("../assets/images/projects/movesheet2.jpg")
            }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "React-native",
                fontAwesomeClassname: "tabler:brand-react-native"
            },
            {
                name: "Material UI",
                fontAwesomeClassname: "logos:material-ui",
            },
            {
                name: "Nodejs",
                fontAwesomeClassname: "logos:nodejs",
            },
            {
                name: "PHP",
                fontAwesomeClassname: "vscode-icons:file-type-php3",
            },
            {
                name: "Wordpress",
                fontAwesomeClassname: "skill-icons:wordpress",
            },
            {
                name: "Typescript",
                fontAwesomeClassname: "vscode-icons:file-type-typescript",
            },
            {
                name: "Webpack",
                fontAwesomeClassname: "logos:webpack",
            },
        ]
    },
    {
        name: "EasyEatery",
        desc: "built this project for a client of ( INTP LLC ). ( React js - Node js - Wordpress - Webppack ).",
        link: "https://www.easyeatery.net",
        images: [
            {
                link: require("../assets/images/projects/easyeatery.jpg")
            }
        ],
        technologies: [
            {
                name: "React",
                fontAwesomeClassname: "vscode-icons:file-type-reactjs"
            },
            {
                name: "Material UI",
                fontAwesomeClassname: "logos:material-ui",
            },
            {
                name: "Nodejs",
                fontAwesomeClassname: "logos:nodejs",
            },
            {
                name: "PHP",
                fontAwesomeClassname: "vscode-icons:file-type-php3",
            },
            {
                name: "Wordpress",
                fontAwesomeClassname: "skill-icons:wordpress",
            },
            {
                name: "Typescript",
                fontAwesomeClassname: "vscode-icons:file-type-typescript",
            },
            {
                name: "Webpack",
                fontAwesomeClassname: "logos:webpack",
            },
        ]
    },
    // {
    //     name: "Deirezzor24",
    //     desc: "I created an application for a remote client to view the news and connect it with a WordPress blog. ( React-Native )",
    //     link: "https://play.google.com/store/apps/details?id=com.deirezzor24",
    // },
    // {
    //     name: "Binabbas",
    //     desc: "I created a website for a local client with wordpress",
    //     link: "https://www.binabbas.info/",
    // },
    // {
    //     name: "WP Core Plugin Setup",
    //     desc: "Template WordPress directory that exposes REST endpoints. Also used by script in `server-setup` repo. ( Wordpress - Rest Api ).",
    //     github: "https://github.com/INTP LLCalienventures/wp-core-plugin-setup",
    //     images: [],
    // },
    // {
    //     name: "Rapid React App and Server Setup",
    //     desc: "Sets up web server with React frontend, WordPress backend, nginx conf file, and SSL certificate. ( Ubuntu - Nginx - CertBot ).",
    //     github: "https://github.com/INTP LLCalienventures/server-setup",
    //     images: [],
    // },
    // {
    //     name: "Prototype Node",
    //     desc: "Template React directory. Also used by script in ( server-setup ) repo. ( Node js - React js - Webpack ).",
    //     github: "https://github.com/INTP LLCalienventures/prototype-node",
    //     images: [],
    // },

    {
        name: "AmeenSMS",
        desc: "Integration with Al-Ameen system to send SMS.",
        // link: "https://www.easyeatery.net",
        images: [
            {
                link: require("../assets/images/projects/ameensms.jpg")
            }
        ],
        technologies: [
            {
                name: "c-sharp",
                fontAwesomeClassname: "logos:c-sharp",
            },
            // {
            //     name: "sql-server",
            //     fontAwesomeClassname: "logos:sql-server",
            // },
        ]
    },
    {
        name: "Bin Zaidoon",
        desc: "An introductory website for his office, Bin Zaidoon. ( Wordpress-Theme ).",
        link: "https://www.bzst.co/",
        images: [
            {
                link: require("../assets/images/projects/binzaidoon1.png")
            },
            {
                link: require("../assets/images/projects/binzaidoon1.png")
            },
            {
                link: require("../assets/images/projects/binzaidoon2.png")
            },
            {
                link: require("../assets/images/projects/binzaidoon3.png")
            },
            {
                link: require("../assets/images/projects/binzaidoon4.png")
            },
            {
                link: require("../assets/images/projects/binzaidoon5.png")
            }
        ],
        technologies: [
          
            {
                name: "Wordpress",
                fontAwesomeClassname: "skill-icons:wordpress",
            },
            {
                name: "PHP",
                fontAwesomeClassname: "vscode-icons:file-type-php3",
            },
        ]
    },


];

export const feedbacks = [
    {
        name: "John Smith",
        feedback:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
    },
    {
        name: "John Smith",
        feedback:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
    },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
    title: "Khalid Alansi",
    description:
        "A passionate Full Stack Web Developer and Mobile Developer.",
    author: "Khalid Alansi",
    image: "https://avatars.githubusercontent.com/u/34144060?v=4",
    url: "https://khalidalansi.github.io/",
    keywords: [
        "Khalid",
        "Khalid Alansi",
        "@Khalidalansi",
        "khalidalansi",
        "Portfolio",
        "Khalid Portfolio ",
        "Khalid Alansi Portfolio",
    ],
}
