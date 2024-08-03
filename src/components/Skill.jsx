import React from 'react';
import NEXT from '../assets/next.jpg';
import EXPRESS from '../assets/express-js.png';
import REACTJS from '../assets/react_logo-512.webp';
import MONGO from '../assets/Mongodb.png';
import NODE from '../assets/node.png';
import JAVASCRIPT from '../assets/js.png';
import TW from '../assets/tailwind-css-icon.webp';
import TS from '../assets/ts.png';
import AWS from '../assets/aws.png';
import CSS from '../assets/css.png';
import DJANGO from '../assets/django.png';
import FIGMA from '../assets/figma.png';
import GIT from '../assets/git.png';
import GITHUB from '../assets/github.png';
import HTML from '../assets/html.png';
import PYTHON from '../assets/python.png';
import SPRING from '../assets/spring.png';
import JAVA from '../assets/java.png';
import DOCKER from '../assets/docker.png';
import JENKINS from '../assets/jenkins.png';
import PHP from '../assets/php.png';
import NGINX from '../assets/nginx.png';
import MYSQL from '../assets/mysql.png';
import ML from '../assets/ml.png';
import LINUX from '../assets/linux.png';
import POSTMAN from '../assets/postman.png';
import POTSGRE from '../assets/postgre.png';
import PRISMA from '../assets/prisma.jpg';
// import { HorizontalLine } from './HorizontalLine'
 const SkillCard = ({ name, title, image }) => {
    return (
        <div className="p-4 rounded-md shadow-md bg-white">
            <div className="flex justify-center mb-4">
                <img src={image} alt={name} className="w-24 h-24 rounded-full" />
            </div>
            <h3 className="text-lg text-center font-semibold mb-2">{name}</h3>
            <p className="text-gray-500 text-center mb-4">{title}</p>
        </div>
    );
};

const HorizontalLine = () => {
    return (
      <div className="pt-20">
        <hr className="border-gray-500" />
      </div>
    );
  };
const Skill = () => {
    const skills = [
        {
            name: 'NextJS',
            title: 'Intermediate',
            image: NEXT,
        },
        {
            name: 'ExpressJS',
            title: 'Intermediate',
            image: EXPRESS,
        },
        {
            name: 'ReactJS',
            title: 'Advanced',
            image: REACTJS,
        },
        {
            name: 'TypeScript',
            title: 'Intermediate',
            image: TS,
        },
        {
            name: 'MongoDB',
            title: 'Beginner',
            image: MONGO,
        },
        {
            name: 'Tailwind-CSS',
            title: 'Advanced',
            image: TW,
        },
        {
            name: 'NodeJS',
            title: 'Intermediate',
            image: NODE,
        },
        {
            name: 'JavaScript',
            title: 'Intermediate',
            image: JAVASCRIPT,
        },
        {
            name: 'AWS Cloud',
            title: 'Beginner',
            image: AWS,
        },
        {
            name: 'Django',
            title: 'Beginner',
            image: DJANGO,
        },
        {
            name: 'Figma',
            title: 'BEginner',
            image: FIGMA,
        },
        {
            name: 'Git Bash',
            title: 'Intermediate',
            image: GIT,
        },
        {
            name: 'GitHub',
            title: 'Intermediate',
            image: GITHUB,
        },
        {
            name: 'Python',
            title: 'Intermediate',
            image: PYTHON,
        },
        {
            name: 'Spring and Spring Boot',
            title: 'Intermediate',
            image: SPRING,
        },
        {
            name: 'JAVA',
            title: 'Intermediate',
            image: JAVA,
        },
        {
            name: 'HTML',
            title: 'Advanced',
            image: HTML,
        },
        {
            name: 'CSS',
            title: 'Advanced',
            image: CSS,
        },
        {
            name: 'Docker',
            title: 'Beginner',
            image: DOCKER,
        },
        {
            name: 'Jenkins',
            title: 'Beginner',
            image: JENKINS,
        },
        {
            name: 'Linux',
            title: 'Beginner',
            image: LINUX,
        },
        {
            name: 'Nginx',
            title: 'Beginner',
            image: NGINX,
        },
        {
            name: 'Machine Learning',
            title: 'Intermediate',
            image: ML,
        },
        {
            name: 'PHP',
            title: 'Intermediate',
            image: PHP,
        },
        {
            name: 'MySQL',
            title: 'Intermediate',
            image: MYSQL,
        },
        {
            name: 'PostgreSQL',
            title: 'Intermediate',
            image: POTSGRE,
        },
        {
            name: 'Prisma',
            title: 'Beginner',
            image: PRISMA,
        },
        {
            name: 'POSTMAN',
            title: 'Advanced',
            image: POSTMAN,
        },
    ];

    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Skills</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Here are some of my skills
                    </p>
                </div>
                <HorizontalLine/>
                <div className="container pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {skills.map((profile, index) => (
                            <SkillCard key={index} {...profile} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;