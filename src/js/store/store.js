const getState = ({ getStore, setStore }) => {
	return {
		store: {agenda:[],
                obj:[],
                contact:{}
			//Your data structures, A.K.A Entities
		},
		actions: {
            getAgenda: (urlstring)=>{
                fetch(urlstring, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({
							agenda: data
						});
                        console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
            },

            createContact: (event)=>{
                event.preventDefault();
                let elements = document.getElementById(event.target.id);
                let newcontact={
                        "full_name": elements[0].value,
                        "email": elements[1].value,
                        "agenda_slug": "miagenda",
                        "address": elements[2].value,
                        "phone": elements[3].value
                    };
                fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
                    body: JSON.stringify(newcontact),
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({
							contact: newcontact
						});
                        console.log(data)
					})
					.catch(error => {
						console.log(error);
					});
                },
            updateContact: ()=>{},
            deleteContact: ()=>{},
            

			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;


