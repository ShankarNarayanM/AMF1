
function Card(props)
{
    return(
        <div class="card col-3 m-3">
            <img class="card-img-top" src={`${props.props.images}`} alt="logo"/>
            <div class="card-body">
                <h5 class="card-title">{props.props.title}</h5>
                <p class="card-text">{props.props.description.substring(0,50)}...</p>
                <p class="fw-bold">Rs. {props.props.price}</p>
            </div>
        </div>
    )
}

export default Card;