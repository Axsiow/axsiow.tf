/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, Flower2, CodeXml } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
    bluesky?: string;
    orcid?: string;
}

/**
     * Extra link configuration for FAB component
     */
export interface ExtraLink {
    /** URL or path for the link */
    link: string;
    /** Lucide icon component */
    icon: any;
    /** Tooltip label for the link */
    label: string;
}

/**
     * Extra links configuration
     */
    export interface ExtraLinks {
    /** Enable or disable the FAB component */
    enable: boolean;
    /** Array of extra links to display */
    links: ExtraLink[];
}

/**
     * Sections visibility configuration
     * Control which sections appear on the index page
     */
export interface SectionsConfig {
    /** Show/hide About section */
    about: boolean;
    /** Show/hide Projects section */
    projects: boolean;
    /** Show/hide Blog section */
    blog: boolean;
    /** Show/hide Work Experience section */
    work: boolean;
    /** Show/hide Education section */
    education: boolean;
    /** Show/hide Hackathons section */
    hackathons: boolean;
    /** Show/hide Contact section */
    contact: boolean;
}

/**
     * Main site configuration interface
     */
export interface SiteConfig {
    /** Site/Portfolio name */
    name: string;
    /** Main title/headline */
    title: string;
    /** Site description for SEO and hero section */
    description: string;
    /** Path to avatar/logo image */
    avatar: string;
    /** Location/City */
    location: string;
    /** Contact email */
    email: string;
    /** Social media profile links */
    socialLinks: SocialLinks;
    /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
    enableThemeSelector: boolean;
    /** Extra links configuration for FAB component */
    extraLinks: ExtraLinks;
    /** Sections visibility configuration (Hero is always visible) */
    sections: SectionsConfig;
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
    name: "👩‍💻 Enzo 'Axsiow' Fogliano",
    title: "Ingénieur réseau, système et sécurité.",
    description:
        "",
    avatar: "",
    location: "🇫🇷 Grenoble, France",
    email: "contact@axsiow.tf",
    socialLinks: {
        github: "https://github.com/axsiow",
        linkedin: "https://linkedin.com/in/enzofogliano",
        twitter: "https://twitter.com/astro_axsiow",
        bluesky: "https://bsky.app/profile/axsiow.tf",
        orcid: "https://orcid.org/0009-0008-9442-6438",
    },
    enableThemeSelector: true,
    extraLinks: {
        enable: false,
        links: [
        {
            link: "/blog/guides/bloomfolio-complete-guide",
            icon: Flower2,
            label: "Bloomfolio Guide",
        },
        {
            link: "/blog/guides/content-collections-guide",
            icon: BookOpen,
            label: "Content Guide",
        },
        {
            link: "/blog/guides/markdown-guide",
            icon: FileText,
            label: "Markdown Guide",
        },
        {
            link: "https://github.com/axsiow/axsiow.tf",
            icon: CodeXml,
            label: "GitHub Repo",
        },
        ],
    },
    sections: {
        about: true,
        projects: true,
        blog: true,
        work: true,
        education: true,
        hackathons: true,
        contact: true,
    },
};
