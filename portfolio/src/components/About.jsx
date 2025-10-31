const About = () => {
  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi there! I'm Jun Howell Mifa Abucay, a passionate Full Stack Developer with a 
              strong background in creating scalable web applications and digital solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in modern web technologies and love building applications that 
              make a difference. With expertise in both frontend and backend development, 
              I bring ideas to life through clean code and innovative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or working on personal projects that challenge my skills.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-700 font-medium">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700 font-medium">Always learning new tech</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-gray-700 font-medium">Team player & collaborator</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm italic">
                    "Code is like humor. When you have to explain it, it's bad."
                  </p>
                  <p className="text-gray-500 text-xs mt-2">- Cory House</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

