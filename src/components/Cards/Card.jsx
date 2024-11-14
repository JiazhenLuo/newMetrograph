import './Card.css';

function Card(props) {
    console.log()
    return (
            <div className="card" onClick={props.onClick}>
            {/* <img className="card-image" src={`${props.img}`} alt={props.title} /> */}
            <img className="card-image" src={props.img} alt={props.title} />

            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <div className="card-details">
                    <h3>{props.screenTime}</h3>
                    <h3>DIRECTOR: {props.director}</h3>
                </div>
                <button className="card-button">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.time}
                    </a>
                </button>
                <p className="card-description">{props.Description}</p>
            </div>
        </div>
    );
}

export default Card;