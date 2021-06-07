import pic11 from './11.jpeg';
import pic12 from './12.jpeg';
import pic13 from './13.jpeg';



function showContent() {
    const recentEvents =
        <div className="  w-100  flex justify-between">
            <div className="pa3 mb4 mr4" >
                <img src={pic11} alt="gridImage" style={{ borderRadius: "8px", height: "200px", width: "300px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
            <div className="pa3 mb4 mr4">
                <img src={pic12} alt="gridImage" style={{ borderRadius: "8px", height: "200px", width: "300px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
            <div className="pa3  mb4 mr4">
                <img src={pic13} alt="gridImage" style={{ borderRadius: "8px", height: "200px", width: "300px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
        </div>

    const pastEvents =
        <div className="  w-100 flex justify-between">
            <div className="pa3 mb4 mr4" >
                <img src={pic11} alt="gridImage" style={{ borderRadius: "8px", height: "200px", width: "300px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
            <div className="pa3 mb4 mr4">
                <img src={pic12} alt="gridImage" style={{ borderRadius: "8px", height: "200px", width: "300px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
            <div className="pa3  mb4 mr4">
                <img src={pic13} alt="gridImage" style={{ borderRadius: "8px", height: "200px", width: "300px", objectFit: "cover" }} />
                <p>22 May,2021</p>
            </div>
        </div>
}

export default showContent;
