
//components
import Swiper from '../../sections/home/HomeSwiperSection'
import Achievements from '../../sections/home/AchievementsSection'
import Objectives from '../../sections/home/ObjectivesSection'
import Rate from '../../sections/home/RateSection'
import MembersWords from '../../sections/home/MembersWordsSection'
import News from '../../sections/home/NewsSection'
import Download from '../../sections/home/DownloadSection'

const Homepage = () => {
  return (<>  
    <div className='bg-background '>
      <Swiper />
      <Achievements />
      <Objectives />
      <Rate />
      <MembersWords />
      <News />
      <Download />
    </div>
    
  </>
  )
}

export default Homepage