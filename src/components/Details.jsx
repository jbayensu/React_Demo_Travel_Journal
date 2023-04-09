

export default function Details({travel}){

    return(
        <div className="detail">
            <div>
                <img className="detail-image" src={`images/${travel.imageUrl}`} alt="" />
            </div>
            <div>
                <div className="detail-location">
                    <i className="fa fa-map-marker green"></i>
                    <p className="detail-country">
                        {travel.location} 
                    </p>
                    <a className="detail-location-link" href={travel.gMapLink}>View on Google Maps</a>
                </div>
                <h2 className="detail-title">{travel.title}</h2>
                <p className="detail-dates">{travel.startDate} - {travel.endDate}</p>
                <p>{travel.description}</p>
            </div>
        </div>
    )
}