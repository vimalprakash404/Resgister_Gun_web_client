
import './App.css';
import Gun from 'gun';
import { useEffect, useRef, useState } from 'react';
import Idinput from './components/Idinput';
import Userdetails from './components/Userdetails';

var index ="init1234"

function App() {
  
  const [userob,setuserob]=useState("")
  const gun = Gun({
    peers: ['http://localhost:5000/gun']
  })
  
  function inituser()
  {
    {
      gun.get(index+"/"+"init").put({"new user":"username"})
      
    }
  }
  
 
  function pad(n, length) {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
  }
  const input_ref= useRef();
  function getalluser()
  {
    for (let i=1;i<=3000;i++)
    {
      gun.get(index+'/'+pad(i,3))
      console.log("geting data:"+i);
    }
  }
  gun.back(index, function(at) {
    console.log("Server is active:", at.soul);
  });
  useEffect(() => {
    
    for (let i=1;i<=3000;i++)
    {
      console.log(i)
      gun.get(index+'/'+pad(i,3)).on((node) => { // Is called whenever text is updated
        if (Number(input_ref.current.value) === i)
        {
          if(node.Verified)
          {
            setuserob(
              {
                Name: node.Name,
                Institution: node.Institution,
                Email: node.Email,
                Phone: node.Phone,
                Verified: node.Verified
              }
            )
          }
        }
        
      })
    }
    gun.get(index).on((node) => { // Is called whenever text is updated
      console.log(node)
    })

    
    

  }, [])
  function getuser()
  {
   
 
    gun.get(index+'/'+input_ref.current.value).once((data) =>{
      if ( data === undefined)
      {
        alert ("user not found");
      }
      else{
      setuserob(
        {
          Name: data.Name,
          Institution: data.Institution,
          Email: data.Email,
          Phone: data.Phone,
          Verified: data.Verified
        }
      )
      }
    })
    //getkey()
  }
  function verifyuser()
  {
    console.log(gun.get(index+'/'+input_ref.current.value).put({"Verified":true}))

  }
  inituser()
  
  return (
    <div>
      <Idinput onclick={getuser} refs={input_ref}></Idinput>
      
      <Userdetails Name={userob["Name"]} Institution={userob["Institution"]} Email={userob["Email"]} Phone={userob["Phone"]} Verified={userob["Verified"]} onclick={verifyuser}></Userdetails>
    </div>
  );
}

export default App;
