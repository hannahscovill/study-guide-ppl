import Heading from "@theme/Heading"
import './FeatureCard.css'
import { CSSProperties, ReactNode } from "react"

const FeatureCard = ({title, subtitle, body, imgSrc, style}:{title?:string, subtitle:string, body?:ReactNode, imgSrc?:string, style?:CSSProperties}) => {
    return (
        <div className="feature-card" style={style} >
            {title?<Heading as="h1">{title}</Heading>:null}
            <img className="feature-card-image" src={imgSrc} />
            <Heading as="h2">{subtitle}</Heading>
            <p>{body}</p>
        </div>
    )
}

export default FeatureCard;