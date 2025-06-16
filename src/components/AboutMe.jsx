import { Chip } from "@mui/material";
import MinecraftBlock from "./minecraftBlock";

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Angular",
  "React",
  "Node.js",
  "MUI",
  "NgRx",
  "Kendo UI",
];

const achievements = [
  {
    title: "React Mastery",
    description: "Built 10+ responsive apps",
    icon: "⚛️",
  },
  {
    title: "Angular Adept",
    description: "Developed enterprise-scale UIs",
    icon: "🅰️",
  },
  {
    title: "Pixel Perfect",
    description: "UI/UX focused implementations",
    icon: "🧩",
  },
  {
    title: "Team Player",
    description: "Collaborated on cross-functional teams",
    icon: "🤝",
  },
  {
    title: "Accessibility Pro",
    description: "WCAG compliant designs",
    icon: "♿",
  },
  {
    title: "Project Architect",
    description:
      "Led frontend architecture for real-world platforms like Dismanto, AutoDap, and Bandel.",
    icon: "🏗️",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-all"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          I'm a frontend{" "}
          <strong className="text-[#5EAF4B] dark:text-[#5EAF4B]">
            Web Developer
          </strong>{" "}
          dedicated to turning ideas into creative solutions. I specialize in
          creating seamless and intutive user experiences. My approach focuses
          on creating scalable, high-performing solutions tailored to both user
          needs and business objectives. By priortizing performance,
          accessibility, and responsiveness, I strive to deliver experiences
          that not only engage users but also drive tangible results.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{
                fontSize: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                backgroundColor: "#5EAF4B",
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "0.75rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#4a943c",
                },
                color: "#fff",
                borderColor: "#3b82f6",
              }}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((achieve, idx) => (
            <div
              key={idx}
              className="relative bg-[#1e1e1e] dark:bg-[#121212] border border-[#5EAF4B] rounded-xl p-4 text-white shadow-lg transform transition-all hover:scale-105 shimmer-glow"
            >
              <div className="text-3xl mb-2">{achieve.icon}</div>
              <h3 className="text-xl font-bold text-[#5EAF4B]">
                {achieve.title}
              </h3>
              <p className="text-sm text-gray-300">{achieve.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
