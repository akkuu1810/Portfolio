import { Button } from "@mui/material";
import ProfileImage from '../assets/profile-image.png'

export default function Home({scrollToProjects,scrollToContact  }) {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-all">
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
          Hi, I'm <span className="text-[#5EAF4B] dark:text-[#5EAF4B]">Akanksha Kshatriya</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          A passionate Web Developer with 2+ years of experience in building high-performance, scalable, and responsive web solutions.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">

        <Button
  variant="contained"
  sx={{
    backgroundColor: '#5EAF4B',
    '&:hover': {
      backgroundColor: '#4a943c',
    },
    color: '#fff',
  }}
  onClick={scrollToProjects}
>
  View Projects
</Button>

<Button
  variant="outlined"
  sx={{
    borderColor: '#5EAF4B',
    color: '#5EAF4B',
    '&:hover': {
      backgroundColor: 'rgba(94, 175, 75, 0.1)',
      borderColor: '#4a943c',
    },
  }}
  onClick={scrollToContact}
>
  Contact Me
</Button>

        </div>
      </div>
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img 
          src={ProfileImage}
          alt="Profile" 
          className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-[#5EAF4B]-500"
        />
      </div>
    </section>
  );
}
