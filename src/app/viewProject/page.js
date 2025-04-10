"use client"
import { useSearchParams,useRouter } from "next/navigation";
export default function viewProject() {
    const searchParams = useSearchParams();
    const tabKey = searchParams.get("slug");
    
    return (
      <div className="blog-detail">
        <h1>My projects</h1>      
      </div>
    );
  }
  