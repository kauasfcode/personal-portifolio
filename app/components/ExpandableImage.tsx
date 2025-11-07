import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogTitle } from "@radix-ui/react-dialog"

export function ExpandableImage({ imgUrl }: { imgUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={imgUrl}
          alt="Preview do projeto"
          width={400}
          height={400}
          className="   rounded-md cursor-pointer"
        />
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
        <VisuallyHidden>
          <DialogTitle>Imagem expandida</DialogTitle>
        </VisuallyHidden>
        <Image
          src={imgUrl}
          alt="Preview expandido"
          layout="fill"
          className=""
        />
      </DialogContent>
    </Dialog>
  )
}
