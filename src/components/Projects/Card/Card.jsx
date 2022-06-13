import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = (props) => {
  return (
    <article className="card">
      <img src={props.imgSrc} alt={props.imgAlt} />
      <section className="description">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <section className="tech">
          <ul>
            {props.techL.map((tech, index) => (
              <li key={index}>
                <FontAwesomeIcon className="icon" icon={tech.icon} />
                {tech.name}
              </li>
            ))}
          </ul>
          <ul>
          {props.techR.map((tech, index) => (
             <li key={index}>
               <FontAwesomeIcon className="icon" icon={tech.icon} />
               {tech.name}
             </li>
           ))}
          </ul> 
        </section>
        <section className="project-buttons">
          <a
            href={props.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            href={props.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
      </section>
      </section>
    </article>
  )
}

export default Card