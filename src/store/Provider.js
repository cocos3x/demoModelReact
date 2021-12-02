import Context from "./Context";    
import { useReducer } from "react";
function Provide({childen}){

    const [state,dispath] = useReducer()

    return(
        <Context.Provider value={[state,dispath]}>
            {childen}
        </Context.Provider>
    )
}
export default Provide