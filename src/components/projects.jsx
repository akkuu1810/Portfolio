import { forwardRef, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { FaReact, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const projects = [
  {
    name: "Dismanto",
    description:
      "Car dismantling platform built with Angular and Node.js. Scalable frontend architecture enhanced operational efficiency by 25%.",
    details: [
      "Led frontend design and architecture using Angular.",
      "Built scalable, reusable components and admin panel.",
      "Improved performance and UX by 20%.",
    ],
    tech: [<FaAngular />, <FaNodeJs />, <SiMysql />],
  },
  {
    name: "AutoDap",
    description:
      "React (Fuse)-based vehicle data project with backend performance tuning. Enhanced API response by 30%.",
    details: [
      "Enhanced frontend experience using React + Fuse template.",
      "Optimized backend APIs in Node.js for faster data processing.",
      "Reduced response times by 30%.",
    ],
    tech: [<FaReact />, <FaNodeJs />,<SiMysql />],
  },
  {
    name: "Bandel",
    description:
      "Mobile-first React project with full accessibility support. Designed a visually consistent dark mode experience.",
    details: [
      "Led frontend architecture using React.",
      "Built fully keyboard-navigable, screen reader-friendly UI.",
      "Delivered mobile-responsive, dark-mode enabled design.",
    ],
    tech: [<FaReact />, <FaNodeJs />],
  },
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const Projects = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
    ref={ref} 
      id="projects"
      className="w-full py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-950 transition-all"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  Real-world web applications where I led or contributed to frontend architecture, optimized performance, and delivered seamless user experiences.
  <br /><br />
  <span className="text-sm text-gray-500 dark:text-gray-400 italic">
    🔒 Note: These are products from the organization I've worked, and access is restricted due to authentication and proprietary data. Live links and source code are not publicly shareable.
  </span>
</p>


        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl dark:shadow-blue-800"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #5EAF4B",
                borderRadius: "1rem",
                height: "100%",
              }}
            >
              <CardContent>
                <h3 className="text-2xl font-semibold text-[#5EAF4B] dark:text-[#5EAF4B] mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-md">
                  {project.description}
                </p>
              </CardContent>
              <CardActions className="flex justify-between px-4 pb-4">
                <div className="flex space-x-2 text-[#5EAF4B] dark:text-[#5EAF4B] text-xl">
                  {project.tech.map((Icon, idx) => (
                    <span key={idx}>{Icon}</span>
                  ))}
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: '#5EAF4B',
                    '&:hover': {
                      backgroundColor: '#4a943c',
                    },
                    color: '#fff',
                    fontFamily: '"Press Start 2P", monospace',
    fontSize: '0.75rem', 
    textTransform: 'none', 
                  }}
                  size="small"
                  onClick={() => setOpenIndex(index)}
                >
                  View More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        aria-labelledby="project-details"
        aria-describedby="project-details-description"
      >
        <Box sx={modalStyle}>
          {openIndex !== null && (
            <>
              <Typography id="project-details" variant="h5" fontWeight="bold" mb={2}>
                {projects[openIndex].name}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                {projects[openIndex].description}
              </Typography>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                {projects[openIndex].details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end">
                <Button variant="outlined" sx={{
    borderColor: '#5EAF4B',
    color: '#5EAF4B',
    '&:hover': {
      backgroundColor: 'rgba(94, 175, 75, 0.1)',
      borderColor: '#4a943c',
    },
  }} onClick={() => setOpenIndex(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
})

export default Projects;