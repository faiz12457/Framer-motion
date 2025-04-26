// App.jsx
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const sections = ["home", "about", "services"];

function Section({ id, setActiveSection, children, bg }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(()=>{
    if (inView) {
        setActiveSection(id);
      }

  },[inView])
  

  return (
    <section
      ref={ref}
      id={id}
      className={`h-screen ${bg} flex items-center justify-center text-3xl`}
    >
      {children}
    </section>
  );
}

function Sidebar({ activeSection }) {
  return (
    <nav className="fixed top-10 left-5 flex flex-col gap-4">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`${
            activeSection === sec ? "font-bold text-blue-600" : "text-gray-600"
          } transition-all duration-200`}
        >
          {sec.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export default function ScrollSpy() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} />
      <main className="ml-40 w-full">
        <Section id="home" bg="bg-gray-100" setActiveSection={setActiveSection}>
          Home
        </Section>
        <Section id="about" bg="bg-gray-200" setActiveSection={setActiveSection}>
          About
        </Section>
        <Section id="services" bg="bg-gray-300" setActiveSection={setActiveSection}>
          Services
        </Section>
      </main>
    </div>
  );
}
