import Tag from "../tag/tag";
import {ButtonProps} from "@/types/componentsTypes"


function Button(props: ButtonProps) {
{
    console.log("props", props)
    
    
}

        
    return(
        <>
        <button>{props.abc}</button>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

            <h1 className="text-gray-700 mb-4 font-bold">BUTTON - SAMSUNG S8 ULTRA</h1>

            <p className="text-gray-700 mb-4">The Samsung Galaxy S8 and Samsung Galaxy S8+ are Android smartphones produced by Samsung Electronics as the eighth generation of the Samsung Galaxy S series. The S8 and S8+ were unveiled on 29 March 2017 and directly succeeded the Samsung Galaxy S7 and S7 Edge, with a North American release on 21 April 2017 and international rollout throughout April and May. The Samsung Galaxy S8 Active was announced on 8 August 2017 and is exclusive to certain U.S. cellular carriers.</p>

            <Tag />

        </div></>
      
    )
}
export default Button;

//we gave props in main page or where we want to give the prop, then came to specified component page and pass the function and add console.print
//we use the multiple props print function add first is main and 2nd is optional like using the specified code
//we can also make the type folders for import export the component types and simply import anywhere and print 
//we can use the type function in any page or we can make the type folder and import and use.