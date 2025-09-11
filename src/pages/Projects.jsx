import { useGSAP } from "@gsap/react"
import ProjectCard from "../comonents/projects/ProjectCard"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"

const Projects = () => {

  // const projects = [{
  //   image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
  //   image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  //   image3: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
  //   image4: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
  //   image5: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
  //   image6: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  // }]
  // ]

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('.hero', {
      height: '50px',
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'bottom -180%',
        scrub: true,
      }
    })
  })

  return (
    <div className="p-3">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] uppercase text-[13vw]">Work</h2>
      </div>
      <div className="-mt-20 lol">
        {
          projects.map((elem, idx)=>{
            return <div className="hero w-full h-[600px] flex gap-3.5 mb-1.5" key={idx}>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Projects