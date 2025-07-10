
import { FaUserTie } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import { applist } from "./appcontrols/Appcontrol";

function Welcomepage() {
    return (
        <Fragment>
            <div className="text-center" style={{ width: 900 }}>
                <h1 className="text-center">App Lists</h1>
                <hr />
            </div>
            <div className="applist">
                {applist.map((a) => {
                    return (
                        <a href="" className="shadow bg-light border">
                            <h1> <FaUserTie /></h1>
                            <p>{a.appname}</p>
                        </a>
                    )
                })}


            </div>
        </Fragment>
    )
}
export default Welcomepage



