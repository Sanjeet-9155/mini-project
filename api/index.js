import React, { useEffect, useState } from "react";


const Api = (props) => {
const [data, setData] = useState([])


    useEffect(() => {

        console.log('props===========', props)

       fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
            console.log('----data ----', data);
            setData(data)
        })

    }, []) 


    return(
        <div>
            {
                data.map((val, index) => {
                    return(
                          <div style={{backgroundColor: '#008080', display: 'center', alignItems: 'center', justifyContent: 'center', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'}}>
                            <p><strong>id:</strong> {val.id}</p>
                            <p><strong>title:</strong> {val.title}</p>
                            <p><strong>body:</strong> {val.body}</p> 
                          </div>  
                    )
                })
            }
        </div>
    )
}

export default Api