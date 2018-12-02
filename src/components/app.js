import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import {Route} from 'react-router-dom';
import List from './list';
import AddItem from './add_item';



const App = () => (
    <div className="container">
       <Route path="/" exact component={List}/> 
       <Route path="/add-item" component={AddItem}/>    
    </div>
);

export default App;
