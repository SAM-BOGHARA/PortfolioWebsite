import React from "react";

function SkillCategory({ category, skills }) {
  return (
    <div className="mt-4  flex flex-col space-y-4">
      <div>
        <div className="flex -mb-2 items-center text-xs">
          <span className="mr-1.5 flex">
            <span
              className={`inline-block h-1 w-1 rounded-full ${category.color}`}
            ></span>
          </span>
          <span className="font-medium">{category.name}</span>
        </div>
      </div>

      <div className="flex items-center text-xs text-label-1 dark:text-dark-label-1 flex-wrap ">
        {skills.map((skill, index) => (
          <div key={index} className="text-xs mt-1">
            <span color="text-label-2 dark:text-dark-label-2"></span>
            <div
              className={`inline-flex bg-neutral-600 mr-3 items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full text-label-3 dark:text-dark-label-3 ${category.bgColor}`}
            >
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      color: "bg-yellow-300 dark:bg-dark-red-s",
      bgColor: "bg-fill-3 dark:bg-dark-fill-3",
      skills: ["Python", "JavaScript", "Node.js", "Java", "SQL"],
    },
    {
      name: "Frameworks",
      color: "bg-red-500 dark:bg-dark-red-s",
      bgColor: "bg-fill-3 dark:bg-dark-fill-3",
      skills: ["Django", "SpringBoot", "Express.js"],
    },
    {
      name: "Frontend",
      color: "bg-blue-400 dark:bg-dark-red-s",
      bgColor: "bg-fill-3 dark:bg-dark-fill-3",
      skills: ["React", "Vite", "Next.js"],
    },
    {
      name: "Databases",
      color: "bg-green-400 dark:bg-dark-red-s",
      bgColor: "bg-fill-3 dark:bg-dark-fill-3",
      skills: ["MySQL", "MongoDB", "Redis", "PostgreSQL", "Firebase"],
    },

    {
      name: "Tools",
      color: "bg-pink-400 dark:bg-dark-red-s",
      bgColor: "bg-fill-3 dark:bg-dark-fill-3",
      skills: ["Kafka", "Docker", "AWS", "Google Cloud"],
    },
  ];

  return (
    <div>
      <div className="text-lg font-semibold leading-6">Skills</div>
      {skillCategories.map((category, index) => (
        <SkillCategory
          key={index}
          category={category}
          skills={category.skills}
        />
      ))}
    </div>
  );
}

export default Skills;
