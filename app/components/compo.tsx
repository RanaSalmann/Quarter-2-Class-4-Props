import{CardPropsType} from "@/types/componentsTypes"


function Compo(props:CardPropsType){
    return(
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

        <h1 className="text-gray-700 mb-4 font-bold">{props.courseTitle}</h1>

        <p className="text-gray-700 mb-4"> Qualcomm Snapdragon 8 Gen 2 is an 8-core chipset with Adreno 740 graphics and 4-nanometer process technology.</p>

        <div className="flex flex-wrap">
          
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Features
            </span>

            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Powerfull Processor
            </span>

            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">less Voltage High Efficiency
            </span>

            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Tiny in size than Previous
            </span>
       
        </div>
        </div>
    )
}
export default Compo;

//best way is make a tag page and call it in any page as a component, for optimization it is best .. but this is not a example of calling tag component. it is normal use of tagging in cards frame