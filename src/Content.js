

import {useCallback, useEffect} from 'react'
import {useState} from 'react'

const tabs = [{naem:'posts1' , id:1},{naem:'posts2' , id:2},{naem:'posts3' , id:3}]

function Content(){
 
   

    const [lessonId,setLessonId] = useState(1)

useEffect(()=>{
    const handleCommnet = (e)=>{
        console.log(e);
    }

    
  window.addEventListener(`lesson-${lessonId}`,handleCommnet)
  return ()=>{
    window.removeEventListener(`lesson-${lessonId}`,handleCommnet)
  }
     
  },[lessonId])

  const hade = useCallback(()=>{
    //something
},[])

    console.log('re - render Content' )
    return (
        <div>
         <ul>
             {tabs.map((tab,index)=>(<li key={index}
             style={{color:lessonId===tab.id?'red':'#333'}}
             onClick={()=>setLessonId(tab.id)}
             >
                {tab.naem}    
             </li>))}
         </ul>
        </div>
    )
}
export default Content