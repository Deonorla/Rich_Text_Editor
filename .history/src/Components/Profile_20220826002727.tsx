import CardView from "./CardView";
import Editor from "./Editor";

const Profile: React.FC = () => {
    return (
        <div className="w-full">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUhDUsg4opgTfIJPG_pCVZLVxQogA3X0luahKkYwGrA&s" 
            alt="" 
            className="w-[2rem] h-[2rem] mt-12 ml-10 sm:ml-32"
            /> 
           <h1 className="text-[#67008C] font-semibold ml-10 text-2xl md:text-3xl mt-12
            xl:ml-44 sm:ml-20 md:font-bold"> My Profile</h1>
           <CardView />
           <Editor />
        </div>
    )
}

export default Profile;