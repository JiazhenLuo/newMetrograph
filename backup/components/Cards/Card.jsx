import './Card.css'

function Card(props){

    return(
        <div className = "box-container">
            <div className="box">
                <div className="info">
                    <img src={props.img} alt="" />
                    <div className='title'>
                        <h2>{props.title}</h2>
                    </div>
                    <div className='info'>
                        <h3>{props.screenTime}</h3>
                        <h3>DIRECTOR: {props.director}</h3>
                        <button className="button"><a href={props.link}>{props.time}</a></button>
                    </div>
                </div>
                <div className="description">
                    <p>{props.Description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;