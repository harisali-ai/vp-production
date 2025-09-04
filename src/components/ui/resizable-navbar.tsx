"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setVisible(true);
    else setVisible(false);
  });

  return (
    <motion.div ref={ref} className={cn("relative inset-x-0 top-0 z-50 w-full md:fixed", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && typeof child.type === 'string'
          ? child
          : React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 40 }}
      className={cn(
        "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 h-16",
        visible
          ? "border border-border/40 bg-background/70 supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

interface NavItemDef {
  name: string;
  link: string;
}

interface NavItemsProps {
  items: NavItemDef[];
  className?: string;
  onItemClick?: () => void;
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative hidden lg:flex items-center justify-center text-sm font-medium",
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={item.name} className="relative px-1 py-1">
          {hovered === idx && (
            <motion.div
              layoutId="hovered-pill"
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.6 }}
              className="absolute inset-0 rounded-full border border-border/60 bg-transparent"
            />
          )}
          <Link
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative z-10 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors rounded-full"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default Navbar;


