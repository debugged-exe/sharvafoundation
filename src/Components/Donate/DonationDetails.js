import React from 'react';
function DonationDetails(){
  return(

    <div id="donateForm" >
      <div className="flex justify-center pt5 tc">
        <div className="donationForm " >
          <form>
            <div className="modalHeader">
              <h2 >Donation</h2>
            </div>
            <div className="inputBox ">
              <input type="text" name=""  placeholder="Name" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

            </div>
            <div className="inputBox ">
              <input type="text" name="" placeholder="Email-id" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

            </div>
            <div className="inputBox ">
              <input type="number" name="" placeholder="Phone Number" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

            </div>
            <div className="inputBox ">
              <input type="number" value="" name="" placeholder="Donate Amount" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

            </div>
            <div className="inputBox ">
              <input type="text" name="" placeholder="City" required="required" style={{paddingLeft:"15px",color:"white"}}></input>

            </div>
            <div className="inputBox ">
              <input type="submit" name="" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default DonationDetails;
