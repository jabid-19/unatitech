const imageLoader = ({ src, width, quality }) => {
  // return `https://www.neovotech.com/${src}?w=${width}&q=${quality || 80}}`
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 80}}`
}
export default imageLoader
