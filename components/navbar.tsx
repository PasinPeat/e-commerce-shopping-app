import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { CartIcon, ProfileIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/*open ------------ toggle + logo + navItem */}
      <NavbarContent className="md:basis-1/5 basis-full" justify="start">
        <NavbarMenuToggle className="hidden sm:block md:basis-1 md:pl-4" />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            {/* <Logo />
            <p className="font-bold text-inherit">ACME</p> */}
            <div className="bg-white p-2 rounded-sm">
              <Image
                width={160}
                height={30}
                src={
                  "https://hmrwqjhhyatyjlnukuay.supabase.co/storage/v1/object/public/product/icon/SHOP.CO.svg"
                }
                alt="logo"
              />
            </div>
          </Link>
        </NavbarBrand>
        <ul className=" sm:hidden flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link className=" text-foreground" href={item.href}>
                {item.label}
              </Link>
              {/* <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink> */}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      {/*close ------------ toggle + logo + navItem */}
      <NavbarContent
        className="sm:hidden flex sm:basis-1/5 basis-full"
        justify="end"
      >
        <ThemeSwitch />
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <CartIcon className="text-default-500 mt-3 ml-2" />
        </Link>
        <Link isExternal aria-label="Github" href="/profile">
          <ProfileIcon className="text-default-500 mt-3" />
        </Link>
      </NavbarContent>

      {/*  mobile right navigation icon */}
      <NavbarContent className="hidden sm:flex sm:basis-1 pl-4" justify="end">
        {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}

        <ThemeSwitch />
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <CartIcon className="text-default-500 mt-3 ml-2" />
        </Link>
        <Link isExternal aria-label="Github" href="/profile">
          <ProfileIcon className="text-default-500 mt-3" />
        </Link>
      </NavbarContent>

      {/* show inside toggle menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      {/* show inside toggle menu */}
    </NextUINavbar>
  );
};
