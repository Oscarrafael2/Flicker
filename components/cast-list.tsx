"use client";

import Image from "next/image";

interface CastMember {
  name: string;
  character: string;
  profileUrl: string;
}

interface CastListProps {
  cast: CastMember[];
}

export function CastList({ cast }: CastListProps) {
  if (!cast || cast.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Reparto</h3>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {cast.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="flex-shrink-0 w-28 text-center"
          >
            <div className="relative w-28 h-28 rounded-full overflow-hidden bg-muted mb-2">
              <Image
                src={member.profileUrl || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <p className="font-medium text-foreground text-sm truncate">{member.name}</p>
            <p className="text-xs text-muted-foreground truncate">{member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
