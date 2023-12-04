import React,{useEffect, useState } from "react";
import axios from 'axios';
import './Comment.css'

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
  async function Load()
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
  <div className="add_section">
  <center><h1>Post a Comment</h1></center>
  <div class="container mt-4" >
  <form>
  <div class="form-group">
  <label>Name</label>
  <input type="text" class="form-control" id="name"
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
  <input type="text" class="form-control" id="place_cid"
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
  <button class="btn btn-primary mt-4" onClick={save}>Comment</button>
  {/* <button class="btn btn-warning mt-4" onClick={update}>Update</button> */}
  </div>

  </form>
  </div>
  <center><h3>See All Comments</h3></center>

  {/* <table class="table table-dark" align="center">
  <thead>
  <tr>
  <th scope="col">Place cid</th>
  <th scope="col">Cid</th>
  <th scope="col">Commenter Name</th>
  <th scope="col">Comment Body</th>
  <th scope="col">Date Added</th>
  </tr>
  </thead> */}
  {user.map(function fn(commenter)
  {
  return(
  <div className="comment_section">
  <tbody>
  <tr>
  {/* <th scope="row">{commenter.place_cid} </th> */}
  <td width={'100%'}><h4>{commenter.comment_body}</h4></td>
  </tr>
  <tr>
  <td width={'100%'}>👤 {commenter.commenter_name}</td>
  </tr>
  {/* <tr>
  {console.log(commenter.date_added)}
  <td>{commenter.date_added}</td>
  </tr> */}
  <tr>
  {console.log(Date(commenter.date_added).slice(0,15))}
  <td><i>{Date(commenter.date_added).slice(0,15)}</i></td>
  </tr>
  </tbody>
  </div>
  );
  })}
  {/* </table> */}
  </div>
  );
}
export default Comment;