import Scene1_LonelyBoy from './scenes/Scene1_LonelyBoy'
import Scene2_SheArrived from './scenes/Scene2_SheArrived'
import Scene3_Destiny from './scenes/Scene3_Destiny'
import Scene4_ChangedMe from './scenes/Scene4_ChangedMe'
import Scene5_Quote from './scenes/Scene5_Quote'
import Scene6_BirthdayGirl from './scenes/Scene6_BirthdayGirl'
import Scene7_ForeverPromise from './scenes/Scene7_ForeverPromise'
import Scene8_CakeCelebration from './scenes/Scene8_CakeCelebration'


export default function App() {
  return (
    <main className="overflow-hidden">
      <Scene1_LonelyBoy />
      <Scene2_SheArrived />
      <Scene3_Destiny />
      <Scene4_ChangedMe />
      <Scene5_Quote />
      <Scene6_BirthdayGirl />
      <Scene7_ForeverPromise />
      <Scene8_CakeCelebration />
    </main>
  )
}