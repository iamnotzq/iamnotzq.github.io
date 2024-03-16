import React from 'react'
import './skills.css';
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
    const categorizedSkills = skills.reduce((acc,skill)=>{
        const{category} = skill;
        if (!acc[category]){
            acc[category]=[];
        }
        acc[category].push(skill);
        return acc;
    }, {});

  return (
    <section id='skills'>
        <span className='skillTitle'>Skills</span>
        <span className='skillDesc'>Over the years, as both a tech and design student, I've acquired a diverse set of skills.</span>
        <div className='skillCategoryWrapper'>
        {Object.keys(categorizedSkills).map((category, index)=>(
            <div key={index} className='skillCategory'>
                <h2>{category}</h2>
                <div className='skillBars'>
                    {categorizedSkills[category].map((skill,id)=>(
                        <div key={id} className='skillBox'>
                        <div className='skillBar'>
                        <img  className='skillBarImg' src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                    
                        <div className='skillBarText'>
                            <h2>{skill.title}</h2>
                        </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
  ))}
  </div>
    </section>
  );
};

export default Skills;
