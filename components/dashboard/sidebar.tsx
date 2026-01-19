"use client";

import {
  Search,
  LayoutDashboard,
  ClipboardList,
  Truck,
  MessageSquare,
  FileBarChart,
  Store,
  Plug,
  Settings,
  HelpCircle,
  ChevronDown,
  Check,
  Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import Image from "next/image";
import { UpgradeCard } from "./upgrade-card";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const localeSegmentRegex = /^\/(en|ar)(?=\/|$)/;

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const withLocale = (path: string) => `/${locale}${path}`;

  const navItems = [
    {
      key: "overview",
      href: withLocale("/overview"),
      icon: LayoutDashboard,
    },
    { key: "orders", href: withLocale("/orders"), icon: ClipboardList },
    { key: "shipments", href: withLocale("/shipments"), icon: Truck },
    { key: "messages", href: withLocale("/messages"), icon: MessageSquare },
    { key: "reports", href: withLocale("/reports"), icon: FileBarChart },
    { key: "merchants", href: withLocale("/merchants"), icon: Store },
    { key: "integrations", href: withLocale("/integrations"), icon: Plug },
    { key: "settings", href: withLocale("/settings"), icon: Settings },
  ];

  const footerItems = [
    { key: "help", href: withLocale("/help-center"), icon: HelpCircle },
    { key: "feedback", href: withLocale("/feedback"), icon: MessageSquare },
  ];

  const normalizedPathname = pathname.replace(localeSegmentRegex, "");

  return (
    <Sidebar className="lg:border-r-0!" collapsible="offcanvas" {...props}>
      <SidebarHeader className="pb-0">
        <div className="px-2 py-3">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center justify-between gap-3 h-auto p-0 hover:bg-transparent w-full"
                >
                  <div className="flex items-center gap-2">
                    <div className="size-6 bg-linear-to-br from-purple-500 to-pink-600 rounded-sm shadow flex items-center justify-center text-white text-xs font-semibold">
                      IAL
                    </div>
                    <span className="font-semibold">{t("app.name")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/ln.png"
                      alt="lndev.me"
                      className="size-5 object-cover rounded-full"
                      width={20}
                      height={20}
                    />
                    <ChevronDown className="size-3 text-muted-foreground" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuItem>
                  <div className="flex items-center gap-3 w-full">
                    <div className="size-6 bg-linear-to-br from-purple-500 to-pink-600 rounded-sm shadow flex items-center justify-center text-white text-xs font-semibold">
                      IAL
                    </div>
                    <span className="font-semibold">{t("app.name")}</span>
                    <Check className="size-4 ml-auto" />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-3 w-full">
                    <div className="size-6 bg-linear-to-br from-blue-500 to-cyan-600 rounded-sm shadow flex items-center justify-center text-white text-xs font-semibold">
                      OPS
                    </div>
                    <span>Operations</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-3 w-full">
                    <div className="size-6 bg-linear-to-br from-orange-500 to-red-600 rounded-sm shadow flex items-center justify-center text-white text-xs font-semibold">
                      MER
                    </div>
                    <span>Merchants</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="size-4" />
                  <span>Add new team</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-4 relative">
            <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground z-10" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 pr-8 h-8 text-sm text-muted-foreground placeholder:text-muted-foreground tracking-[-0.42px] bg-background"
            />
            <div className="flex items-center gap-0.5 rounded border border-border bg-sidebar px-1.5 py-0.5 shrink-0 absolute right-2 top-1/2 -translate-y-1/2">
              <span className="text-[10px] font-medium text-muted-foreground leading-none tracking-[-0.1px]">
                ⌘
              </span>
              <Kbd className="h-auto min-w-0 px-0 py-0 text-[10px] leading-none tracking-[-0.1px] bg-transparent border-0">
                K
              </Kbd>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isItemActive =
                  normalizedPathname === item.href.replace(localeSegmentRegex, "");

                return (
                  <SidebarMenuItem key={item.key}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href || isItemActive}
                      className="h-7 text-sm text-muted-foreground"
                    >
                      <Link href={item.href}>
                        <Icon className="size-4" />
                        <span>{t(`nav.${item.key}`)}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="space-y-1 mb-4">
          <SidebarMenu>
            {footerItems.map((item) => {
              const Icon = item.icon;
              const isItemActive =
                normalizedPathname === item.href.replace(localeSegmentRegex, "");

              return (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || isItemActive}
                    className="h-7 text-sm text-muted-foreground"
                  >
                    <Link href={item.href}>
                      <Icon className="size-4" />
                      <span>{t(`nav.${item.key}`)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </div>

        <UpgradeCard />
      </SidebarFooter>
    </Sidebar>
  );
}
