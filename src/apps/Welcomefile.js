
import { FaUserTie } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import { applist } from "./appcontrols/Appcontrol";
import { Link } from "react-router-dom";

function Welcomepage() {
    return (
        <Fragment>
            <div className="text-center">
                <h1 className="text-center">App Lists</h1>
                <hr />
            </div>
            <div className="applist">
                {applist.map((a) => {
                    return (
                        <Link to={a.approuting} className="shadow bg-light border">
                            <h1> <FaUserTie /></h1>
                            <p>{a.appname}</p>
                        </Link>
                    )
                })}


            </div>
        </Fragment>
    )
}
export default Welcomepage



