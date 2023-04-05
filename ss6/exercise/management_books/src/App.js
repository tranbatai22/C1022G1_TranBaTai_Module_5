import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import BookList from "./component/BookList";
import BookUpdate from "./component/BookUpdate";
import BookCreate from "./component/BookCreate";

const App = () => {
    return (
        <Router>
            <Route path="/" component={BookList}/>
            <Route path="/add" component={BookCreate}/>
            <Route path="/edit/:id" component={BookUpdate}/>

        </Router>
    );
};

export default App;
