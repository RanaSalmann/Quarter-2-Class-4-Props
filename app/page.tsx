import Button from "./components/button/button"
import Card from "@/app/components/button/card/card"
import Compo from "@/app/components/compo"
import Tag from "@/app/components/tag/tag"

export default function Home() {
    return (
        <div>
            <h1><center>Welcome to Home Page</center></h1>
            
            <Button abc="1st props from main page" service="2nd Props from main page"/> 
            <Card />
            <Compo />
            <Tag />
            
        </div>
    )
}
//this is main page we are import all the component and call the components to show the card result
//we can use any type of title of prop like abc, title, any name then go to button page and define same prop type name and add props.title/abc/any ...