import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { StoreKit } from "@/data/store";

type StoreKitCardProps = {
  kit: StoreKit;
};

export function StoreKitCard({ kit }: StoreKitCardProps) {
  return (
    <Card className="gap-4">
      <h2 className="font-serif text-2xl text-navy sm:text-3xl">{kit.title}</h2>
      <p className="leading-relaxed text-navy">{kit.description}</p>
      <div className="overflow-hidden rounded-xl bg-background">
        <Image
          src={kit.image}
          alt={kit.alt}
          width={kit.width}
          height={kit.height}
          unoptimized
          className="h-auto w-full"
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="text-sm leading-relaxed text-muted">{kit.pricingNote}</p>
    </Card>
  );
}
