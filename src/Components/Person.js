
// This is class based components to implement in the js file or you can implement anywhere in the app.

import React, {Component} from "react";
import Man from "./Man";
class Person extends Component {
    render() {
        return(
             <div>
                <h1>This is sahil React.</h1>
                <Man />
             </div>
        );
    }
}

export default Person;