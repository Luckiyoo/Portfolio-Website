const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'TypeScript', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'PHP/Laravel', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile/Scrum', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['MongoDB', 'Redis', 'GraphQL', 'Next.js', 'Vue.js', 'Express', 'Firebase', 'PostgreSQL'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

