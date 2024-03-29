import styles from './Projects.module.scss'
import ProjectCard from '../cards/ProjectCard'

export default function Projects() {

  return (
    <div className="mt-32" id="projects">
      <h1 className={`${styles.sectionTitle} text-center text-4xl font-extrabold`}>
        PROJECTS
      </h1>

      <div className={`${styles.cardsContainer} py-10 gap-y-10 mt-5`}>
        <ProjectCard title="Video 1" href="https://youtu.be/cfVS4BadojQ?si=MO4FUTujuKXU3MRz"
          image="/assets/backgrounds/video1.png" />
        <ProjectCard title="Video 2" href="https://youtu.be/PcbdSsUMbpM?si=-I78ZJ5p7aCUc67A"
          image="/assets/backgrounds/video2.png" />
        <ProjectCard title="Video 3" href="https://youtu.be/K7UTdEPzKkw?si=_p5onXMv4jqwysW4"
          image="/assets/backgrounds/video3.png" />

      </div>
    </div>
  )
}