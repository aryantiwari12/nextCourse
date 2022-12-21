import { Fragment } from "react";
import Mainheader from "./main-header";

const Layout = (props: any) => {
    return (
        <Fragment>
         <Mainheader/>
         <header>
                <main>
                    {props.children}
                </main>
            </header>

        </Fragment>
    )
}
export default Layout;