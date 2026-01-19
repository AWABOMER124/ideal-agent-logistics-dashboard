"use client";

import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UpgradeCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4">
      <div className="relative space-y-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="size-3.5 text-foreground" />
          <span className="text-xs font-medium text-foreground">
            Ideal Agent Logistics
          </span>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          AI-powered logistics operations dashboard for operators and merchants.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="h-7 w-full justify-center gap-1.5 text-xs"
          asChild
        >
          <Link
            href="https://ideal-agent-logistics.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ideal-agent-logistics.com
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
