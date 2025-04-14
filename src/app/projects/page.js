"use client"
import { useRouter } from "next/navigation"

export default function Projects() {  
    const router = useRouter()  
    const handleViewBlog =(data) =>{
        router.push(`/viewProject?detail=${data}`)
    }
    return(
        <div className="blog-detail">
        <h1>project page</h1>
        <div className="blog-container">
            <div className="blog-content">
                <h1 className="blog-title">blog1</h1>
                <p className="blog-desc">blog description</p>
                <button className="blog-btn" onClick={() =>{handleViewBlog("blog1")}}>view blog</button>
            </div>
            <div className="blog-content">
                <h1 className="blog-title">blog 2</h1>
                <p className="blog-desc">blog description</p>
                <button className="blog-btn" onClick={() =>{handleViewBlog("blog2")}}>view blog</button>
            </div>
        </div>
        </div>
    )
}