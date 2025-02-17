function ProfileCard({title, handle, image, description}){

    //--const title = props.title ;
    //--const handle = props.handle ;
    //const {title, handle, image, description} = props;

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1"> 
                    <img src={image} alt="pda logo"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>        
    );
}

export default ProfileCard;

// -- Make code shorter and cleaner.
// -- Easier to read and understand.
// -- Prevents unnecessary repitition.
// -- function ProfileCard({title, handle}){}

//--Image Hnadling
//-- Install the Bulma css package to your project (npm install bulma) - (Goes to node_module folder)
//-- Import bulma to parent js (App.js)
//-- import 'bulma/css/bulma.css';