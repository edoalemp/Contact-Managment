import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export default class AddContact extends React.Component {

	render() {
        return (
            <Context.Consumer>
            {({ store, actions }) => {
                    console.log(store);
                    let formfield={"full_name":"","email":"","phone":"","address":""};
                    if (store.agenda[this.props.match.params.i]!==undefined){
                        formfield=store.agenda[this.props.match.params.i];
                    }
                    return (
                        <div className="container">
                            <div>
                                <h1 className="text-center mt-5">Add a new contact</h1>
                                <form id="form" key="form" onSubmit={()=>{ if (store.agenda[this.props.match.params.i]!==undefined) {return actions.modifyContact(event,store.agenda[this.props.match.params.i])}else{return actions.createContact(event)}}}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Full Name"  key="name" defaultValue={formfield["full_name"]} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email"  key="email" defaultValue={formfield["email"]}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="phone" className="form-control" placeholder="Enter phone"  key="phone" defaultValue={formfield["phone"]}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control" placeholder="Enter address" key="address" defaultValue={formfield["address"]}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control">save</button>
                                    <Link className="mt-3 w-100 text-center" to="/" onClick={()=>actions.getAgenda("https://assets.breatheco.de/apis/fake/contact/agenda/miagenda")}>or get back to contacts</Link>
                                </form >
                            </div>
                        </div>
                    );
                }}
            </Context.Consumer>
        );
	}
}

