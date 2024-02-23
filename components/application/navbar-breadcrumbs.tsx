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
        }} maxWidth="full">

            <NavbarContent className="md:px-12 basis-1/6 sm:basis-full" justify="start">
                <NavbarBrand className="gap-3 max-w-fit">
                    <NavBreadCrumbs />
                </NavbarBrand>
            </NavbarContent>
        </NextUINavbar>
    );
};
