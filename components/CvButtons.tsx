import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvFiles } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function CvButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Button asChild variant="outline" className="h-11 gap-2 px-4">
        <a href={cvFiles.es} download hrefLang="es">
          <Download aria-hidden />
          CV en español
        </a>
      </Button>
      <Button asChild variant="outline" className="h-11 gap-2 px-4">
        <a href={cvFiles.en} download hrefLang="en" lang="en">
          <Download aria-hidden />
          CV in English
        </a>
      </Button>
    </div>
  );
}
