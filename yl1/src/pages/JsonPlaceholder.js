import { useEffect, useState } from 'react';


function JsonPlaceholder(){
    const [takeData, updateTakeData] = useState ([]);
    
        useEffect(() => {
            fetch ("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                return response.json();
            }). then (data => {
                console.log(data)
                const newArray = [];
                for (const key in data) {
                    newArray.push(data[key]);
                }
                console.log(newArray);
                updateTakeData(newArray);
               }
            );
    
         },[])  
    return (
    <div>
        {takeData.map(info =>
        <div>
             <h5> {info.title}</h5><br/>
             <div> {info.body}</div><br/><br/>
         </div>)}

    </div>
    );
}
export default JsonPlaceholder;