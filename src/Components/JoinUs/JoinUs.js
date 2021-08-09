import React from 'react';
import './JoinUs.css';
import 'tachyons';
import sharvalogo from './sharva.png';

const initialState = {
	name: '',
	email: '',
	dob: '',
	gender: '',
	phone: '',
	address: '',
	city:'',
	state:'',
	bloodgroup:'',
	currentcity: '',
	category: [],
	whyjoin:''

}



class Join1 extends React.PureComponent {

	constructor(){
		super();
		this.state = initialState;
	}
	componentDidMount(){
		window.scrollTo(0,0);
	}

	handleSubmit = (event) =>
	{
		console.log(this.state);
		const {
			name,
			email,
			dob,
			gender,
			phone,
			address,
			city,
			state,
			bloodgroup,
			currentcity,
			category,
			whyjoin,


		} = this.state;

		event.preventDefault();
		fetch('https://thawing-shelf-77571.herokuapp.com/join', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				email: email,
				dob: dob,
				gender: gender,
				phone: phone,
				address:address,
				city: city,
				state:state,
				bloodgroup:bloodgroup,
				currentcity:currentcity,
				category:category,
				whyjoin:whyjoin,
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
  		const category = this.state.category;
  		category.push(value);
  		this.setState({category: category}, () => {
  			console.log('');
  		});
  	}
  	else
  	{
  		const category = this.state.category;
  		const filtered = category.filter(item => item!==value);
  		this.setState({category: filtered}, () => {
  			console.log('');
  		})
  	}

  }


	render() {
		return (
			<div className="JoinUs-div pt0 pt5" id="survey">
      <div className="backgroundjoinus mt2 ">
       <div className="flex justify-center">
          <img src={sharvalogo}  className="join-logo" alt="logo"/>
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
								<label htmlFor="name" className="label">Date of Birth<span className="red f3">*</span></label>
								<input
								className="inputform"
								placeholder="DOB"
								name="dob"
								type="date"
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
									id="cis-male"
									name="gender"
									value="cis-male"
									onChange={this.handleChange}
									required
									/>
									<label for="cis-male" className="label">Cis-male</label><br/>
									<input
									type="radio"
									id="cis-female"
									name="gender"
									value="cis-female"
									onChange={this.handleChange}
									required
									/>
									<label for="cis-female" className="label">Cis-female</label><br/>
									<input
									type="radio"
									id="Trans male"
									name="gender"
									value="Trans male"
									onChange={this.handleChange}
									required
									/>
									<label for="Trans female" className="label">Trans male</label><br/>
									<input
									type="radio"
									id="Trans female"
									name="gender"
									value="Trans female"
									onChange={this.handleChange}
									required
									/>
									<label for="Trans male" className="label">Trans female</label><br/>
									<input
									type="radio"
									id="Non binary"
									name="gender"
									value="Non binary"
									onChange={this.handleChange}
									required
									/>
									<label for="Non-binary" className="label">Non-binary</label><br/>
									<input
									type="radio"
									id="prefer not to say"
									name="gender"
									value="Prefer not to say"
									onChange={this.handleChange}
									required
									/>
									<label
									for="not_to_say" className="label">
									Prefer Not to Say
									</label><br />
									
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
								<label for="edu"  className="label">
								Permanent Address<span className="red f3">*</span></label>
								<input
									name="address"
                className="inputform"
                placeholder="Address" onChange={this.handleChange}/>
						</div>
            <div className="input-div">
                <label for="edu"  className="label">
                City<span className="red f3">*</span></label>
                <input
								name="city"
                className="inputform"
                placeholder="Address" onChange={this.handleChange}/>
            </div>
						<div className="input-div">
								<label htmlFor="occupation" className="label">State<span className="red f3">*</span></label>
								<input
								name="state"
								className="inputform"
								placeholder="State"
								type="text"
								onChange={this.handleChange}
								required
								/>
						</div>
						<div className="input-div">
								<label for="edu"  value={this.state.phone} className="label">
								Blood Group<span className="red f3">*</span></label>
							<select className="select-boom" id="edu" onChange={this.handleChange} name="bloodgroup">
									<option value=" ">Please select one option</option>
									<option value="A+">A+</option>
									<option value="A-">A-</option>
									<option value="B+">B+</option>
									<option value="B-">B-</option>
									<option value="AB+">AB+</option>
									<option value="AB-">AB-</option>
									<option value="O+">O+</option>
									<option value="O-">O-</option>
								</select>
						</div>
						<div className="input-div">
								<label htmlFor="location" className="label">Current City<span className="red f3">*</span></label>
								<input
								name="currentcity"
								className="inputform"
								placeholder="Current City"
								type="text"
								onChange={this.handleChange}
								required
								/>
						</div>



						<div className="input-div">
								<label htmlFor="invest" className="label">Individual's Category<span className="red f3">*</span></label><br/>

								<input type="checkbox" id="bank" name="category" value="fieldwork"
								onClick={this.handleCheck}/>
								<label for="bank">Field Work</label><br/>

								<input type="checkbox" id="mutual" name="category" value="photography"
								onClick={this.handleCheck}/>
								<label for="mutual">Photography</label><br/>

								<input type="checkbox" id="bonds" name="category" value="videoeditor"
								onClick={this.handleCheck}/>
								<label for="bonds">Video Editor</label><br/>

								<input type="checkbox" id="post" name="category" value="contentwriting"
								onClick={this.handleCheck}/>
								<label for="post">Content Writing</label><br/>

								<input type="checkbox" id="money_market" name="category" value="fundraising"
								onClick={this.handleCheck}/>
								<label for="money_market">Fund Raising</label><br/>

								<input type="checkbox" id="debt" name="category" value="creatives"
								onClick={this.handleCheck}/>
								<label for="debt">Creatives</label><br/>

								<input type="checkbox" id="none" name="category" value="awareness"
								onClick={this.handleCheck}/>
								<label for="none">Awareness Sessions</label><br/>

                <input type="checkbox" id="none" name="category" value="marketing"
								onClick={this.handleCheck}/>
								<label for="none">Marketing</label><br/>
								
								<input type="checkbox" id="none" name="category" value="marketing"
								onClick={this.handleCheck}/>
								<label for="none">Graphic Designing</label><br/>

                <input type="checkbox" id="none" name="category" value="strategies"
								onClick={this.handleCheck}/>
								<label for="none">Strategies Buildup</label><br/>
						</div>
						<div className="input-div">
							<label for="edu"  className="label">
							Why do you want to Join Us?<span className="red f3">*</span></label>
							<input type="text"
								name="whyjoin"
							className="inputform"
							placeholder=""  onChange={this.handleChange}/>
						</div>
						<div className="inputBoxJoinUs">
							<input type="submit" name="" value="Submit"></input>
						</div>
					</form>
			</div>
		)
	}
}

export default Join1;
