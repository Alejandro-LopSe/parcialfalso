import { FreshContext, Handlers } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";

const arr: string[] = []
export const handler: Handlers = {
    GET: (_req: Response, ctx: FreshContext)=>{
        const url = new URL(_req.url)
        const name: string = url.searchParams.get("name") || ""
        if(arr.includes(name)){
            return ctx.render("error1")
        }
        arr.push(name)
        return ctx.render()
    }   
}

export default function Page() {

    return(
        <div>
            {arr && arr.map((e)=>{
                return (<p>{e}</p>)
            })}
           <Header></Header>
           <form action="/agendassr">
           <input type="text" name="name" />sasas
           <button type="submit">x</button>
           </form>
        </div>
    )
}