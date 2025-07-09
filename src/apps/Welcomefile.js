
import myimg from './images/img1.jpg';

function Welcomepage()
{
    return(
        <h1 className="page">this is welcome page</h1>
    )
}
export default Welcomepage



export function Projecttitle1()
{
    return(
        <div>
        <h1 style={{color:'red',fontSize:80}} >this is the project title</h1>
        <img src={myimg} alt="sdfh"/>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0wQCxXS1avpnMwtn07I3vGD6HWYUghyrAw&s'/>
        <h1 style={{color:'green',fontSize:80}}> this is update file</h1>
        </div>
    )
}



