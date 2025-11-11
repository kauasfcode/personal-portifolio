"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { toast } from "sonner";

export default function VisitWebsite({underMaintence, href}: {underMaintence?:boolean, href:string }){
    return(
         <div className="h-full ">
          {underMaintence ? (<Button variant={"link"} className="text-highlight px-0 py-0" onClick={() => {
            console.log("pressed")
            toast("O site ainda está em desenvolvimento", {
              description: "",
              action: {
                label: "Desfazer",
                onClick: () => console.log("a"),
              },
            })
          }
        }
          >
            <span>Visitar site</span>
          </Button>)
            :
            (<Link href={href} className="text-highlight underline ">Visitar site</Link>)}
        </div>
    )

}