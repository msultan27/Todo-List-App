
import React, {useState} from 'react'; 


const cb = {
   borderradius: '15px'
}


function TodoList() {
   const [activity, setActivity] = useState("");
   const [listData, setlistData] = useState([]);
  
  function addActivity(){
        // setlistData([...listData, activity])
        // console.log(listData);  
       
         setlistData((listData)=>{
             
            const updatedList = [...listData, activity]
          
            setActivity('');
            return updatedList
    });
} 
  function removeActivity(i){
      const updatedListData = listData.filter((elem, id) =>{
          return i!==id; 

      })
      setlistData(updatedListData);
  }   

  function removeAll(){
       setlistData([])
  }
  return (
    <>
  
     <section class="vh-100 gradient-custom">
       <div class="container py-5 h-100">
        
         <div class="row d-flex justify-content-center align-items-center">
           
           <div class="col col-xl-10">
           <h1 id="todo">TODO LIST</h1>  
             <div class="card text-white bg-dark" style={cb}>
               <div class="card-body p-5">
                  <h2 class="mb-3">AWESOME TODO LIST</h2>  
                    <div class="d-flex justify-content-center align-items-center mb-4">
                    <div class="form-outline flex-fill">
                    <input type="text" placeholder='Add Activitiy'  value={activity} onChange={(e)=>setActivity(e.target.value)} class="form-control form-control-lg"/>
                    <h5 class="mt-4">What do you need to do today?</h5>
                    </div>                 
                    <button className="btn btn-primary btn-lg ms-2 mb-5" onClick={addActivity}>Add Items</button>
                    </div>  

                      {listData!==[] && listData.map((data, i)=>{
                          return(
                              <>
                                <ul class="list-group mb-0 mb-4" key={i}>                                      
                                 
                                <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
  
                                <div class="d-flex align-items-center">
                                <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                  {data}

                                 
                                </div> <button class="btn btn-danger" onClick={()=>removeActivity(i)}>Remove</button>


                                 </li>
                                 
                                </ul>
                                 
                               
                              </>  
            
                          )

                      })}
 
                              <div class="d-flex justify-content-end align-items-end ">
                              {listData.length>=1 &&  <button class="btn btn-lg btn-danger" onClick={removeAll}>Remove All</button>} 
                              </div>               
                    



 
            

                </div> {/* card body */} 
              </div> {/* card */}
             </div> {/* col xl-10 */}
          </div> {/* Row d flex */}
       </div> {/* container */}
        </section> {/* section */}
      </>
  )
}

export default TodoList