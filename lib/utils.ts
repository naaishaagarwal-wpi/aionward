import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isExternalHttpUrl(href: string) {
  return href.startsWith("https://") || href.startsWith("http://")
}

export function isMailtoHref(href: string) {
  return href.startsWith("mailto:")
}

export function emailFromMailto(href: string) {
  return href.replace(/^mailto:/i, "")
}
