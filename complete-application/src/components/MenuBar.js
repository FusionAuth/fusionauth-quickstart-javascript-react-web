import {useFusionAuth} from "@fusionauth/react-sdk";

export default function MenuBar() {
    const {isAuthenticated} = useFusionAuth();

    return (
        <div id="menu-bar" className="menu-bar">
            {
                isAuthenticated ? (
                    <>
                        <a className="menu-link">Make Change</a>

                        <a className="menu-link" style={{textDecorationLine: "underline"}}>Account</a>
                    </>
                ) : (
                    <>
                        <a className="menu-link">About</a>
                        <a className="menu-link">Services</a>
                        <a className="menu-link">Products</a>

                        <a className="menu-link" style={{textDecorationLine: "underline"}}>Home</a>
                    </>
                )
            }
        </div>
    )
}
