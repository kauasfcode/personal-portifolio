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
          width={500}
          height={500}
          className="rounded-md object-cover h-full w-full cursor-pointer"
        />
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
        <VisuallyHidden>
          <DialogTitle>Imagem expandida</DialogTitle>
        </VisuallyHidden>
        <Image
          src={imgUrl}
          alt="Preview expandido"
          width={1200}
          height={800}
          className="rounded-md"
        />
      </DialogContent>
    </Dialog>
  )
}
