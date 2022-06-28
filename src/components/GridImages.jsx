import '../styles/GridImages.css'

import MilkImg from '../assets/mobile/image-gallery-milkbottles.jpg'
import OrangeImg from '../assets/mobile/image-gallery-orange.jpg'
import IceImg from '../assets/mobile/image-gallery-cone.jpg'
import SugarImg from '../assets/mobile/image-gallery-sugar-cubes.jpg'

function GridImages() {
  return (
    <section className="grid__images">
      <img src={MilkImg} />
      <img src={OrangeImg} />
      <img src={IceImg} />
      <img src={SugarImg} />
    </section>
  )
}

export default GridImages