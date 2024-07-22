
import React from 'react'
import { FaHtml5, FaJs, FaReact,FaPython,FaJava,FaNodeJs } from 'react-icons/fa';
import SkillBar from '../Components/Bar'
const skills = [
  {
    id: 1,
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-500' />,
    proficiency: 90,
  },
  {
    id: 2,
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-500' />,
    proficiency: 85,
  },
  {
    id: 3,
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    proficiency: 75, 
  },
  {
    id: 4,
    title: 'Node',
    icon: <FaNodeJs className='h-16 w-16 text-blue-500' />,
    proficiency: 50, 
  },
  {
    id: 5,
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-blue-500' />,
    proficiency: 90, 
  },
  {
    id: 6,
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-blue-500' />,
    proficiency: 70, 
  },
];
const page = () => {
  return (
    <div>
      <div className='about'>
      <h4>About Me</h4>
      <p>
  I am Progya Bhattacharjee, a dedicated and enthusiastic front-end developer currently studying at KIIT, Bhubaneswar. With a strong passion for web development and a keen eye for design, I&apos;m committed to creating engaging and user-friendly websites and applications. I am eager to take on new challenges and gain practical experience in the field of front-end development. If you have opportunities for internships, projects, or collaborations, I would love to connect.
</p>

<p>
  I have a strong foundation in UI/UX design and development, with skills in HTML, CSS, JS, React, and TailwindCSS. I&apos;m versatile in design and development, with expertise in user research, wireframing, visual design, and front-end development. I showcase my portfolio, highlighting my problem-solving skills and attention to detail. I demonstrate my passion for creating exceptional user experiences.
</p>

      </div>
      <p className='p1'>Tech Stack</p>
         <div className='tech'>
         {skills.map((skill) => (
        <SkillBar key={skill.id} {...skill} />
      ))}
         </div>

    </div>
  )
}

export default page
