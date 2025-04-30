"use client"
import { useSearchParams } from "next/navigation";
export default function viewProject() {
    const searchParams = useSearchParams();
    const project_name = searchParams.get("detail");
    
    return (
      <section className="detail-section">
        <h1 className="section-title">{project_name} Project</h1>
        <div className="detail-content">
          <p>Details about {project_name} will go here.</p>
        </div>
      </section>
    );
  }
  