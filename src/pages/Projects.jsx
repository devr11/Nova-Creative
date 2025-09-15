import { useGSAP } from "@gsap/react"
import ProjectCard from "../comonents/projects/ProjectCard"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useRef } from "react"

const Projects = () => {

  const sectionsRef = useRef([])

  // const projects = [{
  //   image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
  //   image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  //   image3: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
  //   image4: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
  //   image5: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
  //   image6: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  // }]
  // ]

  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    sectionsRef.current?.forEach((section) => {
      gsap.fromTo(section, 
        {
          height: 140,
        },
        {
          height: 500,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: `bottom top`,
            scrub: true,
        },
        
      });
    });
  });

  return (
    <div className="p-3">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] uppercase flex gap-2 text-[13vw]">Work <span className="lg:text-5xl text-xl mt-5 lg:mt-15">16</span></h2>
      </div>
      <div className="-mt-20 lol">
        {
          projects.map((elem, idx)=>{
            return <div className="hero w-full h-[500px] mb-4 relative" key={idx}>
              <div
                ref={(el) => (sectionsRef.current[idx] = el)}
                className="w-full h-[800px] flex gap-4 object-contain overflow-hidden"
              >
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Projects