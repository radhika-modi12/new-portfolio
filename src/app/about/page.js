export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
      <div className="about-content">
        <h1 className="about-data">About Me</h1>
        <p>
          Hello! I'm [Your Name], a passionate web developer with experience
          in building dynamic, responsive, and user-friendly web applications.
          I enjoy turning complex problems into simple, beautiful, and
          intuitive designs.
        </p>
        <p>
          In my free time, I love exploring new technologies, contributing to
          open-source projects, and writing technical articles to share
          knowledge with the community.
        </p>
      </div>
      <div className="about-content">
        <h1 className="about-data">Skills</h1>
        <ul>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Next.js, Vue.js</li>
          <li>Node.js, Express</li>
          <li>HTML5, CSS3 (Sass, Tailwind CSS)</li>
          <li>RESTful APIs, GraphQL</li>
          <li>Git, GitHub, CI/CD</li>
        </ul>
      </div>
      <div className="about-content">
        <h1 className="about-data">Interests</h1>
        <ul>
          <li>UI/UX Design</li>
          <li>Photography & Videography</li>
          <li>Travel & Cultural Exploration</li>
          <li>Reading Technology & Science Blogs</li>
          <li>Open Source Contribution</li>
        </ul>
      </div>
      </div>
    </section>
  );
}
