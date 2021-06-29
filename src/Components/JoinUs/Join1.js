import React from 'react';
import './Join1.css';
import 'tachyons';

const initialState = {
	name: '',
	email: '',
	age: '',
	gender: '',
	phone: '',
	education: '',
	occupation: '',
	location: '',
	income: '',
	savings: '',
	short_term_invest: '',
	invest: [],
	trust: '',
	delay: '',
	return3: '',
	risk: '',
	shortterm: '',
	shorttermplan: '',
	view_365: '',
	know: '',
	communication: ''
}

class Join1 extends React.PureComponent {
	constructor(){
		super();
		this.state = initialState;
	}

	handleSubmit = (event) =>
	{
		console.log(this.state);
		const {
			name,
			email,
			age,
			gender,
			phone,
			education,
			occupation,
			location,
			income,
			savings,
			short_term_invest,
			invest,
			trust,
			delay,
			return3,
			risk,
			shortterm,
			shorttermplan,
			view_365,
			know,
			communication
		} = this.state;

		event.preventDefault();
		fetch('https://stormy-escarpment-39477.herokuapp.com/surveyform', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				email: email,
				age: age,
				gender: gender,
				phone: phone,
				education: education,
				occupation: occupation,
				location: location,
				income: income,
				savings: savings,
				short_term_invest: short_term_invest,
				invest: invest,
				trust: trust,
				delay: delay,
				return: return3,
				risk: risk,
				shortterm: shortterm,
				shorttermplan: shorttermplan,
				view_365: view_365,
				know: know,
				communication: communication
			})
		})
		.then(response => response.json())
		.then(resp => {
			if(resp==='Success')
			{
				alert('Your message was recieved successfully.Thank you for your feedback.');
			}
		})
		.catch(err => {
			console.log(err);
			alert('OOPS....something went wrong.Please try again.');
		})
	}

  enable = (e) =>{
    if(e.target.value==="3"){
      this.setState({others:false});
    }else{
      this.setState({others:true});
    }

  }

	handleChange = (event) => {
    const {value, name} = event.target;
	  this.setState({[name]: value});
  }

  handleCheck = (event) => {
  	const {id, value} = event.target;
  	const check1 = document.getElementById(id);
  	if(check1.checked)
  	{
  		const invest = this.state.invest;
  		invest.push(value);
  		this.setState({invest: invest}, () => {
  			console.log('');
  		});
  	}
  	else
  	{
  		const invest = this.state.invest;
  		const filtered = invest.filter(item => item!==value);
  		this.setState({invest: filtered}, () => {
  			console.log('');
  		})
  	}
  }

	render() {
		return (
			<div className="JoinUs-div pt0" id="survey">
      <div className="backgroundjoinus mt2 ">
       <div className="flex justify-center">
          <img src="sharva.png"  className="join-logo"/>
       </div>
       </div>

					<h1 className="JoinUs-header"> Join Us	</h1>
      
					<form className="JoinUs-form-container" onSubmit={this.handleSubmit}>
						<div className="input-div">
								<label htmlFor="name" className="label">Full Name<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Name"
								name="name"
								type="text"
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label htmlFor="email" className="label">Email<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Email Id"
								name="email"
								type="email"
								onChange={this.handleChange}
								required
								/>
						</div>

						<div className="input-div">
									<label htmlFor="gender" className="label">Gender<span className="red f3">*</span></label><br/>
									<input
									type="radio"
									id="male"
									name="gender"
									value="male"
									onChange={this.handleChange}
									required
									/>
									<label for="male" className="label">Male</label><br/>
									<input
									type="radio"
									id="female"
									name="gender"
									value="female"
									onChange={this.handleChange}
									required
									/>
									<label
									for="female" className="label">
									Female
									</label>
									<br/>
									<input
									type="radio"
									id="transgender"
									name="gender"
									value="transgender"
									onChange={this.handleChange}
									required
									/>
									<label
									for="transgender" className="label">
									Transgender
									</label>
									<br/>
									<input
									type="radio"
									id="not_to_say"
									name="gender"
									value="not_to_say"
									onChange={this.handleChange}
									required
									/>
									<label
									for="not_to_say" className="label">
									Prefer Not to Say
									</label>
						</div>
						<div className="input-div">
								<label htmlFor="phone" className="label">Phone Number<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="Phone no."
								name="phone"
								type="tel"
								pattern="[0-9]{10}"
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label for="edu" value={this.state.phone} className="label">
								Permanent Address<span className="red f3">*</span></label>
								<input
                className="inputform"
                placeholder="Address" />
						</div>
            <div className="input-div">
                <label for="edu" value={this.state.phone} className="label">
                City<span className="red f3">*</span></label>
                <input
                className="inputform"
                placeholder="Address" />
            </div>
						<div className="input-div">
								<label htmlFor="occupation" className="label">State<span className="red f3">*</span></label>
								<input
								name="occupation"
								className="inputform"
								placeholder="Occupation"
								type="text"
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label htmlFor="location" className="label">Location<span className="red f3">*</span></label>
								<input
								name="location"
								className="inputform"
								placeholder="Location"
								type="text"
								onChange={this.handleChange}
								required
								/>
						</div>


						<div className="input-div">
								<label htmlFor="invest" className="label">Individual's Category<span className="red f3">*</span></label><br/>
								<input type="checkbox" id="bank" name="invest" value="Bank FD/RD"
								onClick={this.handleCheck}/>
								<label for="bank">Field Work</label><br/>

								<input type="checkbox" id="mutual" name="invest" value="mutualFunds"
								onClick={this.handleCheck}/>
								<label for="mutual">Photography</label><br/>

								<input type="checkbox" id="bonds" name="invest" value="bonds"
								onClick={this.handleCheck}/>
								<label for="bonds">Video Editor</label><br/>

								<input type="checkbox" id="post" name="invest" value="postOfficeDeposits"
								onClick={this.handleCheck}/>
								<label for="post">Content Writing</label><br/>

								<input type="checkbox" id="money_market" name="invest" value="money_market"
								onClick={this.handleCheck}/>
								<label for="money_market">Fund Raising</label><br/>

								<input type="checkbox" id="debt" name="invest" value="debt"
								onClick={this.handleCheck}/>
								<label for="debt">Creatives</label><br/>

								<input type="checkbox" id="none" name="invest" value="none"
								onClick={this.handleCheck}/>
								<label for="none">Awareness Sessions</label><br/>

                <input type="checkbox" id="none" name="invest" value="none"
								onClick={this.handleCheck}/>
								<label for="none">Marketing</label><br/>
                <input type="checkbox" id="none" name="invest" value="none"
								onClick={this.handleCheck}/>
								<label for="none">Strategies Buildup</label><br/>
						</div>
					</form>
			</div>
		)
	}
}

export default Join1;
