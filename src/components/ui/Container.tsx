import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}

export function SectionContainer({
  children,
  className,
  as: Component = "section",
}: ContainerProps) {
  return (
    <Component className={cn("w-full ", "section-spacing", className)}>
      <Container>{children}</Container>
    </Component>
  );
}
