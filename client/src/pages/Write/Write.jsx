import axios from 'axios';
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context';
import './Write.css'
import { apiurl } from '../../App'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const Write = () => {

  const Categories = ['Music','Life','Sport','Style','Cinema','Tech']
  const [selectedItem, setSelectedItem] = useState(null);
const [list,setlist]= useState(false)
const [title,settitle]=useState("");
const [discreption,setdiscreption]=useState("");
const [file,setfile]=useState(null);
const {user}=useContext(Context)



const handelsubmit = async (e) =>{
  e.preventDefault();
  const newCat ={
    name:selectedItem
  }
  if(selectedItem !== null){
    try{
      await axios.post(`${apiurl}Categories/`,newCat)
    }
    catch{

    }
  }
  const  newPost = {
    username:user.username,
    title,
    discreption:discreption.replace(/<[^>]+>/g, ''),
    categories:newCat.name,
  }
  if(file){
    const data = new FormData()
    const filename = Date.now() + file.name;
    data.append("name",filename)
    data.append("file",file)
    newPost.photo = filename;
    try{
      await axios.post(`${apiurl}upload/`,data)
    }catch{}
  }
  try{
const res = await axios.post(`${apiurl}posts/`,newPost)
window.location.replace("/post/" + res.data._id);

  }catch{}
}

  return (
    <div className='listitems' >
      <div className='Write'>
      {file && 
           <img className='writeImg' src={URL.createObjectURL(file)} alt="" />
           }
        <form className='writeForm' onSubmit={handelsubmit}>
           
            <div className="writeFormGroup1">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' onChange={(e)=>setfile(e.target.files[0])} style={{display:"none"}} />
                <input type="text"
                placeholder='Title' className='writeInput' onChange={e=>settitle(e.target.value)} required autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <ReactQuill  value={discreption} onChange={(value) => setdiscreption(value)}  className='writeInput writeText' />
                
               
            </div>
            <button type='submit' className='writeSubmit'> Publish</button>
            <br /><br />
        </form>
        </div>
        <div className='cat'>
                <h4 className='cat'>Choose Your Category</h4><br/>
                <span   className='displayitem' onClick={()=>setlist(!list)}>
                {list ? "Hide Categories" : "Show Categories"}
                </span><br />
                {list && (
        <ul>
          {Categories.map((item, index) => (
            <h2 className='listitem' key={index}> <button className='listitem'
            onClick={() => setSelectedItem(item)}
            style={{ backgroundColor: item === selectedItem ? "#eee" : "#fff",border:"none", }}
          >
            {item}
          </button></h2>
          ))}
        </ul>
        
      )}<br/><br/>
      {selectedItem && <h4>Selected Category: {selectedItem}</h4>}
      </div>
    </div>
  )
}

export default Write