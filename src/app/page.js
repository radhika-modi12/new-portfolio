import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <p className="content-detail">Home page</p>
      <h1>Welcome</h1>
      <Image src="/images/user_profile.jpg" width={100} height={100} alt="user_img"/>
    </div>    
  );
}
