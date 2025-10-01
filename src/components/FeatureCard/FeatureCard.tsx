import Heading from "@theme/Heading"
import './FeatureCard.css'
import { ReactNode } from "react"

const FeatureCard = ({title, subtitle, body, imgSrc}:{title?:string, subtitle:string, body?:ReactNode, imgSrc?:string}) => {
    return (
        <div className="feature-card" >
            {title?<Heading as="h1">{title}</Heading>:null}
            <img className="feature-card-image" src={imgSrc} />
            <Heading as="h2">{subtitle}</Heading>
            <p>{body}</p>
        </div>
    )
}

export default FeatureCard;