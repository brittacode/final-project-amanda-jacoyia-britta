
import { NavLink } from "react-router-dom"

export function Homepage (){

    return(


        <div> 
            <h1>Thoughtless Meals </h1>

                <div className='navBar'>
                    <NavLink to='/'>Search</NavLink>
                </div>
        </div>


    )
}