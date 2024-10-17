import { Card } from "./Card"
import { useEffect, useState } from "react"
import { CreateCard } from "./CreateCard";


async function getDate (){
    let datas = await fetch('http://localhost:7070/notes');
    if (datas.ok) {
        return await datas.json();
    }
}

export function Crud (){
    const [data,setData] = useState([])
    function del (e){
        const {target} = e;
        let element = target.parentElement;
        const del = fetch(`http://localhost:7070/notes/${element.id}`,{
            method:'delete',
        })
        
    }

    function submit (e){
        e.preventDefault();
        const {target} = e;
        let formData = new FormData(target);
        let data = formData.get('card');
        let body = {
            id:Math.floor(Math.random(10)),
            content:data
        }
        let post = fetch('http://localhost:7070/notes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify(body)
        });
        getDate ();
    }
    useEffect(()=>{
        async function data () {
            const datas = await getDate ()
            setData(datas);
        }
        data();
    },[])
    return(
        <div className="crud">
            <Card data = {data} del = {del}>

            </Card>
            <CreateCard submit={submit}/>
        </div>
    )
}