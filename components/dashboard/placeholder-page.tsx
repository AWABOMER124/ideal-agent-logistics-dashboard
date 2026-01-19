type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex h-full w-full flex-1 overflow-y-auto p-4">
      <div className="flex h-full w-full flex-col items-start justify-start rounded-lg border border-dashed border-border bg-card/30 p-6">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
