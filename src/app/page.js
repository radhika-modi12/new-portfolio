import Image from "next/image";

export default function Home() {
  return (
    <section className="home-hero">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-subtitle">Crafting beautiful web experiences.</p>
      <Image
        src="/images/user_profile.jpg"
        width={150}
        height={150}
        alt="User Profile"
        className="hero-image"
      />
    </section>
  );
}
