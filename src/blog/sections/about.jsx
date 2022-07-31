import profilePictureIcon from "../../static/assets/images/profile-picture-icon.jpg";

const About = () => {
    return (
        <div className="p-4 mb-3 bg-dark rounded">
            <h4 className="fst-italic text-center">About Me</h4>
            <img 
                src={profilePictureIcon} 
                alt="author-profile-picture" 
                id="profile-picture-icon" 
            />
            <p className="mb-0 mt-3">
                Hi, I am <b>Sai Krishna</b> from India. I'm a Full Stack web developer. I write about Python, Django and Web Development on a weekly basis.
            </p>
        </div>
    );
}

export default About;