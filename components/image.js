import { getStrapiMedia } from '../lib/strapimedia';

const Target = ({ target }) => {
    const targetURL = getStrapiMedia(target)

    return (
        <img 
            src={targetURL}
            alt={target.alternativeText || target.name}
            width={320}
        />
    )
}

export default Target