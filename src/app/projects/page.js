"use client"
import { useRouter } from "next/navigation"

export default function Projects() {  
    const router = useRouter()  
    const handleViewBlog =(data) =>{
        router.push(`/viewProject?detail=${data}`)
    }
    return(
        <section className="projects-section">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
            <div className="project-card">
                <h2 className="project-title">Project 1</h2>
                <p className="project-desc">Project description goes here.</p>
                <button onClick={() => handleViewBlog("project1")}>View Project</button>
            </div>
            <div className="project-card">
                <h2 className="project-title">Project 2</h2>
                <p className="project-desc">Project description goes here.</p>
                <button onClick={() => handleViewBlog("project2")}>View Project</button>
            </div>
        </div>
        </section>
    )
}