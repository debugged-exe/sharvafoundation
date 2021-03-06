import React,{useState,useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link';

const EventsSummary = ({setInitiative}) => {

    const [ongoing, setOnGoing] = useState([]);
    useEffect(() => {
        fetch("https://thawing-shelf-77571.herokuapp.com/ongoingprojects")
        .then(response => response.json())
        .then(res => {
          if (res[0].heading) {
            setOnGoing(res);
          }
        }).catch(error => {
          console.log(error);
        })

      }, [])

    return(
        <div id="#eventsummary" className="pt5">
            <div className="tc f2 b  mv4">Our Ongoing Projects</div>
            {
                ongoing.map((item,index)=>{
                  var tagline=item.tagline;
                    return(
                        <div className="flex justify-between-l items-start flex-wrap ph4-l ph2 mt4 mb4" key={item.heading}>
                <div className="w-50-ns pa2" >
                    <h1>{item.heading}</h1>
                    <p className="tj"> {item.para}</p>
                  <Link  to="/events">
                    <div className="pv2 " onClick={()=>{setInitiative(tagline);}} >
                  <a  href='#0' className="link fw6 grow f4 pointer dib"  style={{ borderRadius: '8px', border: 'none',color:"#e88f0a" }}>
                        View Details
                    </a></div></Link>
                </div>

                <div className="w-50-ns pa2 ">
                    <img src={item.imgUrl} height='400px' width='100%' alt={item.heading} className="br4 grow pointer" />
                </div>

            </div>
                    )
                })
            }

        </div>
    );
}

export default EventsSummary;
