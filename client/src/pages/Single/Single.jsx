import './Single.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import SinglePost from '../../Components/SinglePost/SinglePost'
const Single = () => {
  return (
    <div className='Single'>
      {/*Post */}
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single