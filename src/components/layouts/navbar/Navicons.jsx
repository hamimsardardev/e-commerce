"use client";

import Navbardata from "@/data/navbar";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navicons = () => {
  return (
    <ul className="flex items-center gap-8">
      {Navbardata?.icons?.map((item, index) => (
        <li key={index} className="cursor-pointer">
          {item.name === "search" ? (
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="cursor-pointer border-none bg-transparent"
                  aria-label="Open search dialog"
                >
                  {item?.icon}
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle>Search Products</DialogTitle>
                  <DialogDescription>
                    Search for products by name, category, or keyword.
                  </DialogDescription>
                </DialogHeader>

                <Input
                  name="search"
                  placeholder="Search products"
                  aria-label="Search products"
                />
              </DialogContent>
            </Dialog>
          ) : item.name === "user" ? (
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="cursor-pointer bg-transparent"
                    aria-label={item.name}
                  >
                    {item?.icon}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>

                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />

                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          ) : (
            <button
              type="button"
              className="cursor-pointer bg-transparent"
              aria-label={item.name}
            >
              {item?.icon}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navicons;
