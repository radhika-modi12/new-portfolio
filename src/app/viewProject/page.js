"use client"
import { useSearchParams } from "next/navigation";
export default function viewProject() {
    const searchParams = useSearchParams();
    const project_name = searchParams.get("detail");
    
    return (
      <div className="blog-detail">
        <h1>{project_name} project</h1>      
      </div>
    );
  }
  