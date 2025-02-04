function ProfileCard(props){

    //--const title = props.title ;
    //--const handle = props.handle ;

    const {title, handle} = props;

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
            <br />
        </div>        
    );
}

export default ProfileCard;

// -- Make code shorter and cleaner.
// -- Easier to read and understand.
// -- Prevents unnecessary repitition.
// -- function ProfileCard({title, handle}){}