function Navbar(props)
{
    function search(event)
    {
        let val = event.target.value
        let length = val.length
        let objects = new Array();
        props.props.map((obj)=>{
            if(obj.title.substring(0,length).toLowerCase() === val.toLowerCase())
            {
                objects.push(obj)
            }
        })
        return props.getState(objects);
    }
    return (
        <nav class="navbar">
            <p class="navbar-brand">Med+</p>
            <input onKeyUp={search} type="dropdown" class="w-50 form-control rounded" placeholder="Search for the product..."/>
            <div class="nav">
                <a href="/" class="nav-link">Link1</a>
                <a href="/" class="nav-link">Link2</a>
                <a href="/" class="nav-link">Link3</a>
                <a href="/" class="nav-link">Link4</a>
            </div>
        </nav>
    )
}

export default Navbar;