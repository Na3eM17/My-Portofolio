
function Header(props){
    return(
        <div className={props.hdr}>
           
            <div className="ul-heder">
                <ul >
                    <li className="li-h"><a href={props.insta}>{props.name}</a></li>
                    <li className="li-h"><a href={props.git}>{props.name2}</a></li>
                    <li className="li-h"><a href={props.linked}>{props.name3}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header