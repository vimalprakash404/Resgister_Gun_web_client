
import './App.css';
import Gun from 'gun';
import { useEffect, useRef, useState } from 'react';
import Idinput from './components/Idinput';
import Userdetails from './components/Userdetails';
const users = {
  "001": {
    Name: "Emily Johnson",
    Institution: "St. Teresa's College, Ernakulam",
    Email: "emily.johnson@example.com",
    Phone: "123-456-7890",
    Verified: false
  },
  "002": {
    Name: "Michael Smith",
    Institution: "St. Xavier's College, Thiruvananthapuram",
    Email: "michael.smith@example.com",
    Phone: "987-654-3210",
    Verified: false
  },
  "003": {
    Name: "Sophia Williams",
    Institution: "Sacred Heart College, Kochi",
    Email: "sophia.williams@example.com",
    Phone: "456-789-0123",
    Verified: false
  },
  "004": {
    Name: "Ethan Brown",
    Institution: "Maharaja's College, Kochi",
    Email: "ethan.brown@example.com",
    Phone: "789-012-3456",
    Verified: false
  },
  "005": {
    Name: "Olivia Davis",
    Institution: "Government Brennen College, Thalassery",
    Email: "olivia.davis@example.com",
    Phone: "234-567-8901",
    Verified: false
  },
  "006": {
    Name: "Daniel Jones",
    Institution: "Christ College, Irinjalakuda",
    Email: "daniel.jones@example.com",
    Phone: "890-123-4567",
    Verified: false
  },
  "007": {
    Name: "Ava Martinez",
    Institution: "St. Berchmans College, Changanassery",
    Email: "ava.martinez@example.com",
    Phone: "567-890-1234",
    Verified: false
  },
  "008": {
    Name: "Liam Anderson",
    Institution: "Farook College, Kozhikode",
    Email: "liam.anderson@example.com",
    Phone: "901-234-5678",
    Verified: false
  },
  "009": {
    Name: "Isabella Thomas",
    Institution: "St. Joseph's College, Devagiri",
    Email: "isabella.thomas@example.com",
    Phone: "123-456-7890",
    Verified: false
  },
  "010": {
    Name: "Noah Wilson",
    Institution: "Mar Ivanios College, Thiruvananthapuram",
    Email: "noah.wilson@example.com",
    Phone: "987-654-3210",
    Verified: false
  },
  "011": {
    Name: "Mia Taylor",
    Institution: "Baselius College, Kottayam",
    Email: "mia.taylor@example.com",
    Phone: "456-789-0123",
    Verified: false
  },
  "012": {
    Name: "Lucas Martinez",
    Institution: "Bishop Moore College, Mavelikara",
    Email: "lucas.martinez@example.com",
    Phone: "789-012-3456",
    Verified: false
  },
  "013": {
    Name: "Amelia White",
    Institution: "Providence Women's College, Calicut",
    Email: "amelia.white@example.com",
    Phone: "234-567-8901",
    Verified: false
  },
  "014": {
    Name: "Henry Lee",
    Institution: "St. Thomas College, Thrissur",
    Email: "henry.lee@example.com",
    Phone: "890-123-4567",
    Verified: false
  },
  "015": {
    Name: "Harper Johnson",
    Institution: "Government College for Women, Thiruvananthapuram",
    Email: "harper.johnson@example.com",
    Phone: "567-890-1234",
    Verified: false
  },
  "016": {
    Name: "Aiden Kim",
    Institution: "Malabar Christian College, Kozhikode",
    Email: "aiden.kim@example.com",
    Phone: "901-234-5678",
    Verified: false
  },
  "017": {
    Name: "Elizabeth Wang",
    Institution: "Sree Narayana College, Kollam",
    Email: "elizabeth.wang@example.com",
    Phone: "123-456-7890",
    Verified: false
  },
  "018": {
    Name: "Benjamin Nguyen",
    Institution: "St. Albert's College, Kochi",
    Email: "benjamin.nguyen@example.com",
    Phone: "987-654-3210",
    Verified: false
  },
  "019": {
    Name: "Chloe Garcia",
    Institution: "Nirmala College, Muvattupuzha",
    Email: "chloe.garcia@example.com",
    Phone: "456-789-0123",
    Verified: false
  },
  "020": {
    Name: "Alexander Hernandez",
    Institution: "College of Engineering Vadakara",
    Email: "alexander.hernandez@example.com",
    Phone: "789-012-3456",
    Verified: false
  }
};
var index ="init123"

function App() {
  
  const [userob,setuserob]=useState("")
  const gun = Gun({
    peers: ['http:3.111.187.155:5623/gun']
  })
  
  function inituser()
  {
    {
      gun.get(index+"/"+"init").put({"ttft":"u7ygyyg"})
      
    }
  }
  function putdata()
  {
    gun.get(index).put(users)
    console.log("uploaded")
    //getkey()
  }
  function getdata()
  {
    console.log(gun.get(index+'/'+input_ref.current.value).once((data) =>{
    console.log(data.Email);
   
  }

    ));
    
  }
  function pad(n, length) {
    var len = length - (''+n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
  }
  const input_ref= useRef();
  useEffect(() => {
    for (let i=1;i<=20;i++)
    {
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

    gun.get(index+'/'+'001')
    

  }, [])

  function getkey()
    {
      gun.get(index).once((data) =>{
        console.log(data);
       
      })
      
    }
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
      {/* <input ref={input_ref}></input> */}
      {/* <button onClick={putdata}>save</button>
      <button onClick={getuser}>get</button>
      <button onClick={verifyuser}>verifyuser</button> */}
      {/* <table>
        {userob["Name"] === undefined ? "" : userob["Name"]}<br/>
        {userob["Institution"] === undefined ? "" : userob["Institution"]}<br/>
        {userob["Verified"] === false ? "not verified" : "verified"}<br/>
        
        
      </table> */}
      <Userdetails Name={userob["Name"]} Institution={userob["Institution"]} Email={userob["Email"]} Phone={userob["Phone"]} Verified={userob["Verified"]} onclick={verifyuser}></Userdetails>
    </div>
  );
}

export default App;
