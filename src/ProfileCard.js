function ProfileCard(props){
    return (
        <div>
            <div>Title is {props.title}</div>
            <div>Handle is {props.handle}</div>
            <br />
        </div>        
    );
}

export default ProfileCard;