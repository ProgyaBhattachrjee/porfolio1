import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from 'next/image';
interface CardProps1 {
  id: number;
  imageUrl: string | any;
  title: string;
  description: string;
  websiteUrl?: string; // Optional property with a union type (string or undefined)
}
const Card1: React.FC<CardProps1>  = ({id,imageUrl,title,description,websiteUrl}) => {
  return (
    <div key={id} className="card">
    <Image
      src={imageUrl}
      width={300}
      height={500}
      alt={title}
    />
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <FaLink className="icon" /> 
          </a>
        )}
      </div>
    </div>
  </div>
  )
}

export default Card1
