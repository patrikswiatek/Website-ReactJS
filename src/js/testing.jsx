import React from 'react'


class Testing extends React.Component {
	constructor(props) {
		super(props);
		//Początkowa wartość inputa ustawiona na '':
		this.state = {name: ''};
	}
	handleNameChange = (event) => {
		this.setState({name: event.target.name});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Your name is '
			+ this.state.name);
	};
	render(){
		return <form onSubmit={this.handleSubmit}>
			<label>
				Name:
				<input type="text"
				       value={this.state.name}
				       onChange={this.handleNameChange}
				/>
				<input id='formName' className='form-input' name='name' type='text'
				       required onChange={this.handleChange} value={this.state.name}/>
			</label>
			<input type="submit" value="Submit" />
		</form>;
	}
}
export default Testing;

/*
	<div>
				<div onMouseOver={() => this.handleClick('div1')} className= { this.state.activeDiv === 'div1' ? "positive active" : "positive"}>Div1</div>

				<div onMouseOver={() => this.handleClick('div2')} className= { this.state.activeDiv === 'div2' ? "neutral active" : "neutral"}>Div2</div>

				<div onMouseOver={() => this.handleClick('div3')} className= { this.state.activeDiv === 'div3' ? "negative active" : "negative"}>Div3</div>
			</div>
 */