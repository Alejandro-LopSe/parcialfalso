import { FunctionComponent } from "preact";


export const Header: FunctionComponent = ( )=> {

    return (
        <div>
            <div><a href="/agendacsr">Agenda Client Side</a><a href="/agendassr">Agenda Server Side</a></div>
            <h1>My Agenda</h1>
        </div>
    )
}