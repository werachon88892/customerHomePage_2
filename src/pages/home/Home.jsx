import AboutContent from "../../components/about/AboutContent";
import NewsContent from "../../components/news/NewsContent";
import Slider from '../../components/slider/Slider'

export default function Home() {
  return (
    <div style={{paddingBottom: 30}}>
      <Slider />
      <AboutContent />
      <NewsContent />
    </div>
  )
}
