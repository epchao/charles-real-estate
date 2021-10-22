import { getStrapiURL } from "./strapiurl"

export function getStrapiMedia(media) {
    const imageURL = media.url.startsWith("/") ? getStrapiURL(media.url) : media.url
    return imageURL
}