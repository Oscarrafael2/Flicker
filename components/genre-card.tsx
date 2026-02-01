import React from "react"
import Link from "next/link";
import { Skull, Zap, Smile, Heart, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface GenreCardProps {
  id: string;
  name: string;
  description: string;
  gradient: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  skull: Skull,
  zap: Zap,
  smile: Smile,
  heart: Heart,
  rocket: Rocket,
};

export function GenreCard({ id, name, description, gradient, icon }: GenreCardProps) {
  const IconComponent = iconMap[icon] || Skull;

  return (
    <Link
      href={`/genero/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 h-40 flex flex-col justify-end",
        "bg-gradient-to-br transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20",
        gradient
      )}
    >
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <IconComponent className="h-16 w-16 text-white" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </Link>
  );
}
