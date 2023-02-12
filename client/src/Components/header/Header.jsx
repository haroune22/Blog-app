import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headertitles">
            <span className="headertitlesm">React & Node</span>
            <span className="headertitlelg">Blog</span>
        </div>
        <img className="headerimg" src="glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg" alt="" />
    </div>
  )
}

export default Header