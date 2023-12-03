import {useEffect, useState } from "react";
import axios from 'axios';
function Comment(props)
{

  const [cid, setCid] = useState('');
  const [commenterName, setCommenterName] = useState("");
  const [placeCid, setPlaceCid] = useState(props.placeid);
  const [commentBody, setCommentBody] = useState("");
  const [dateAdded, setDateAdded] = useState('');
  const [user,setUser] = useState([]);


useEffect(() => {
  (async () => await Load())();
  }, []);
async function  Load()
  {
     const result = await axios.get(
         "http://127.0.0.1:7000/comment//?place_cid="+props.placeid);
         setUser(result.data);
         console.log(result.data);
  }
    
  
 async function save(event)
    {
      console.log("cid",cid)
      console.log("dateAdded",dateAdded)
      console.log(placeCid,commentBody,commenterName)
        event.preventDefault();
    try
        {
        await axios({
        method: 'post',
        url: 'http://127.0.0.1:7000/comment/',
        data: {
          cid:null,
          place_cid: placeCid,
          commenter_name: commenterName,
          comment_body: commentBody},
        headers:{'Content-Type': 'application/json'}
      })
      .then(function (response) {
        console.log(response)
        alert("Comment added successfully");
        setCommenterName("");
        setCommentBody("");
        setDateAdded("");
        setCid("");
        setPlaceCid("");
        Load();
      })
      .catch(function(err){
        console.log(err)
      })

        }
    catch(err)
        {
          alert("Comment upload Failed");
        }
   }

  return (
    <div>
       <h1>Student Details</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
<label>Name</label>
                <input  type="text" class="form-control" id="name"
                value={commenterName}
                onChange={(event) =>
                  {
                    setCommenterName(event.target.value); 
                    console.log(commenterName)    
                  }}
                />
              </div>
{/* 
              <div class="form-group">
                <label>Place Cid</label>
                <input  type="text" class="form-control" id="place_cid"
                 value={placeCid}
                  onChange={(event) =>
                    {
                     setPlaceCid(event.target.value);  
                     console.log(placeCid)     
                    }}
                />
              </div> */}

              <div class="form-group">
                <label>Comment</label>
                <input type="text" class="form-control" id="comment"
                value={commentBody}
                onChange={(event) =>
                  {
                    setCommentBody(event.target.value);
                    console.log(commentBody)       
                  }}
                />
              </div>
                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Comment</button> 
              {/* <button   class="btn btn-warning mt-4"  onClick={update}>Update</button> */}
              </div>  

              
            </form>
          </div>


<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Place cid</th>
      <th scope="col">Cid</th>
      <th scope="col">Commenter Name</th>
      <th scope="col">Comment Body</th>
      <th scope="col">Date Added</th>
    </tr>
  </thead>
       {user.map(function fn(commenter)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{commenter.place_cid} </th>
                <td>{commenter.cid}</td>
                <td>{commenter.commenter_name}</td>
                <td>{commenter.comment_body}</td>
                <td>{commenter.date_added}</td>        
                {/* <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student.id)}>Delete</button>
                </td> */}
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
export default Comment;
