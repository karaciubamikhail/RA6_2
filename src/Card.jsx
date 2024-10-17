export function Card ({data , del}){
    return(
        data.map((elem,key)=>{
            return(
                <div key={key} className="card" id={elem.id}>
                    <div className="card-content">
                        {elem.content}
                    </div>
                    <button onClick={del}>Удалить</button>
            </div>
            )
        })
    )
}