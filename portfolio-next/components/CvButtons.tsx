import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cvFiles } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function CvButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <a
        href={cvFiles.es}
        download
        hrefLang="es"
        className={cn(buttonVariants({ variant: "outline" }), "h-11 gap-2 px-4")}
      >
        <Download aria-hidden />
        CV en español
      </a>
      <a
        href={cvFiles.en}
        download
        hrefLang="en"
        lang="en"
        className={cn(buttonVariants({ variant: "outline" }), "h-11 gap-2 px-4")}
      >
        <Download aria-hidden />
        CV in English
      </a>
    </div>
  );
}
