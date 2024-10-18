   var b=["paneer","mushroom","khaju biriyani","butternan","pastha","noodles","vegetable rice","chat"]
   var a=["chicken biriyani","mutton biriyani","prawns biriyani","chicken fry","chhilli chicken","mutton curry","chikken tikka","fish fry"]

   var veg=b.map((val,ind,arr)=>{
    return (<li>{val}</li>)

   })
function List(){

    return (
        <>
        <h4>VEG MENU</h4>
            <ol>
                {veg}
            </ol>
            <><h4>NON-VEG</h4>
     <ol>
        <li>{a[0]}</li>
        <li>{a[1]}</li>
        <li>{a[2]}</li>
        <li>{a[3]}</li>
        <li>{a[4]}</li>
        <li>{a[5]}</li>
        <li>{a[6]}</li>
        <li>{a[7]}</li>


     </ol></>

    
        </>
        
    )
}

export default List;