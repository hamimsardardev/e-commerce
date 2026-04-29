import Navbardata from "@/data/navbar";
import React from "react";
import { Button } from "@/components/ui/button";
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

const Navicons = () => {
  return (
    <div>
      <ul className="flex items-center gap-8">
        {Navbardata?.icons?.map((item, index) => (
          <li key={index} className="cursor-pointer">
            {item.name === "search" && 
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                     <button className="cursor-pointer">{item?.icon}</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
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
            }
            
            <button className="cursor-pointer">{item?.icon}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navicons;
