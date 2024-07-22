import React from 'react';
interface SkillBarProps {
  id: number; // Specify the expected type for 'id'
  title: string;
  icon: React.ReactNode; // Can be a React component or string for an icon
  proficiency: number;
}
const SkillBar:  React.FC<SkillBarProps> = ({ id, title, icon, proficiency }) => {


  return (
    <div key={id} className="bar1">
      {icon}
      <div className="skills">{title}</div>
      <progress id="file" value={proficiency} max="100"> {proficiency}% </progress>
    </div>
  );
};

export default SkillBar;
