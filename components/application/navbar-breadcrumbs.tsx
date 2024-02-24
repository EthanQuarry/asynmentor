import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarBrand,
} from "@nextui-org/navbar";
import NavBreadCrumbs from "./breadcrumbs";




export const NavbarBreadcrumbs = () => {
    return (
        <NextUINavbar style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            opacity: "0.8",
            paddingLeft: "0px",
            paddingRight: "0px",
        }} maxWidth="full">

            <NavbarContent className="md:px-6 basis-1/6 sm:basis-full" justify="start">
                <NavbarBrand className=" max-w-fit">
                    <NavBreadCrumbs />
                </NavbarBrand>
            </NavbarContent>
        </NextUINavbar>
    );
};
