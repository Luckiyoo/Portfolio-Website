const Projects = () => {
  const projects = [
    { title: "E-Commerce Platform", description: "Full-featured e-commerce solution", tags: ["React", "Node.js"], image: "🛍️", status: "Live" },
    { title: "Task Management App", description: "Collaborative project management tool", tags: ["React", "Firebase"], image: "📋", status: "Live" },
    { title: "Digital Document System", description: "Enterprise document management", tags: ["Laravel", "React"], image: "📄", status: "Live" }
  ]
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg card-hover group">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">{project.image}</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag, j) => <span key={j} className="text-xs px-3 py-1 bg-primary-50 text-primary-700 rounded-full">{tag}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
