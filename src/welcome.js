import React ,{ Component } from "react"
class Welcome extends Component{
    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Hello {this.props.name}</h1>
            </div>
        )
    }
}

export default Welcome;