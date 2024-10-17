export function CreateCard ({submit}){
    return(
        <form onSubmit={submit}>
            <input type="text" name="card"/>
            <button>Отправить</button>
        </form>
    )
}