////==========================================   1    =============================================


// import { useState,useEffect } from "react";
// const App=()=>{

//   const [count,setCount]=useState(0);

//   useEffect(()=>{

//     setTimeout(()=>{

//       setCount(count+1)
//     },1000);

//   })
//   return(
//     <>
//     <h1>my counter:{count}</h1>
//     </>
//   )
// }

// export default App;




////=================================  2   =============================


// import { useState,useEffect } from "react";
// const App=()=>{

//   const [count,setCount]=useState(0);

//   useEffect(()=>{

//     setTimeout(()=>{

//       setCount(count+1)
//     },5000);

//   },[]);
//   return(
//     <>
//     <h1>my counter:{count}</h1>
//     </>
//   )
// }

// export default App;


///========================================  3   =====================================================



// import { useState,useEffect } from "react";
// const App=()=>{
// const [cnt,setCnt]=useState(0);
// const [multi,setMulti]=useState(0);
// const mycounter=()=>{
//   setCnt(cnt+1);
// }
// useEffect(()=>{

//   setMulti(cnt*2);

// },[cnt])
// return(
//   <>
//   <h1>my counter:{cnt}</h1>
//   <h2>multiplication:{multi}</h2>
//   <button onClick={mycounter}>click here</button>
//   </>
// )

// }
// export default App;


///====================================  4   ========================================


import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{

  const[mydata,setMydata]=useState([]);
  const loadData=()=>{

    let api="https://jsonplaceholder.org/comments";
    axios.get(api).then((res)=>{

   setMydata(res.data);
 

    });

  }
  useEffect(()=>{

    loadData();
  },[])
  const ans=mydata.map((key)=>{

    return(
      <>
      <tr>
        <td>{key.id}</td>
        <td>{key.postId}</td>
        <td>{key.userId}</td>
        <td>{key.comment}</td>
      </tr>
     
      </>
    )
  })
  return(
    <>
    <h1>live api data</h1>
    <table border={1}>
<tr >
      <th>TD</th>
      <th>postId</th>
      <th>userId</th>
      <th>comment</th>
      </tr>
      {ans}
    </table>
    </>
  )
  
}
export default App;

