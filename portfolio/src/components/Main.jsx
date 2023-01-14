import Landing from "./Landing"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
export default function main(){

    return(
        <div>
            <div className="container mx-auto">
                <Landing/>
                <AboutMe/>
                <Projects/>
            </div>
            
        </div>
    )
}