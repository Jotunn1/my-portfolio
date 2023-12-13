import kinetik from "@/images/kinetik.png";
import easyway from "@/images/easyway.jpg";
import jonyEye from "@/images/jony-eye.avif";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageUrl?: any;
}

export const projectsData: Project[] = [
  {
    title: "Kinetik",
    description:
      "Kinetik is a unique and innovative company that has developed a tech platform specifically for the non-emergency medical transportation (NEMT) sector. The platform aims to connect patients, transportation carriers, and care providers, facilitating the organization, monitoring, and management of all NEMT-related matters.",
    tags: [
      "React",
      "Redux",
      "Redux-saga",
      "Mui",
      "Luxon",
      "Formik",
      "Jest",
    ] as string[],
    link: "https://kinetik.care/",
    imageUrl: kinetik,
  },
  {
    title: "Easyway",
    description:
      "Easyway.ai is a premier AI solution provider specializing in simplifying communication between hotels and guests. Leveraging advanced artificial intelligence, the company enhances guest experiences by streamlining interactions and optimizing operational efficiency.",
    tags: ["Angular", "TypeScript", "RxJs", "lottie"] as string[],
    imageUrl: easyway,
  },
  {
    title: "Jony Eye",
    description:
      "Awesome plugin for Figma. It scans your design file, identifies potential issues, and offers actionable fixes in a comprehensive list.",
    tags: ["React", "JavaScript", "SCSS", "Webpack"] as string[],
    link: "https://www.producthunt.com/products/jony-eye",
    imageUrl: jonyEye,
  },
] as Project[];
