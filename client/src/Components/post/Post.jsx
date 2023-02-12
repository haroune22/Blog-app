
import './Post.css'
import {Link} from 'react-router-dom'


const Post = ({post}) => {
    const PF = "http://localhost:4120/Images/"
  return (
    <div className='post'>
        {post.photo && (
            <img 
            className='postImg'
            src={PF + post.photo} alt="" />
        )}
        
        <div className="postInfo">
            <div className="postCats">
                {post.categories.map((c)=>{
                    <span className="postCat">{c[0]}</span>
                })}
                <Link to={`/post/${post._id}`}
                style={{textDecoration:"none"}}>
                <span className="postTitle">
                {post.title} 
            </span>
                </Link>
            </div>
           
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className='postDesc'>
                {post.discreption}
            </p>
        </div>
    </div>
  )
}

export default Post