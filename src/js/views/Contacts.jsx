import React from "react";
import { Link } from "react-router-dom";
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import {Context} from "../store/appContext";

export default class Contacts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		};
	}

	render() {

	return (

		<div className="container">
            <Context.Consumer>
                {({ store, actions }) => {
                    console.log(store);
                    let arrayhtml=[];
                    if (store.agenda.length>0){
                        for (let contacti=0; contacti<=store.agenda.length-1;contacti++){
                            arrayhtml.push(<ContactCard key={contacti} i={contacti} contact={store.agenda[contacti]} onDelete={() => {this.setState({ showModal: true});actions.getContact(store.agenda[contacti]);}} />);
                        }
                    }
                    return (
                        <div>
                            <p className="text-right my-3">
                                <Link className="btn btn-success" to="/add" >Add new contact</Link>
                                <Link className="btn btn-success"to="/" onClick={()=>actions.getAgenda("https://assets.breatheco.de/apis/fake/contact/agenda/miagenda")}>Get Agenda</Link>
                            </p>
                            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                                <ul className="list-group pull-down" id="contact-list">
                                    {arrayhtml}
                                </ul>
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
			<Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
		</div>
		);
	}
}
