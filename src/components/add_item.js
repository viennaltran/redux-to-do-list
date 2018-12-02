import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import NavButton from './nav_button';

class AddItem extends Component {
    renderComponent(){
        return(
            <div className="input"></div>
        )
    }
    render(){
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton to="/" text="Back To List"/>
                <form>
                    <Field name="title" component={this.renderComponent} />
                    <Field name="details" component={this.renderComponent} />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form:'add-item'
})(AddItem);