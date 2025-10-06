# Adhikti Cares - Adhikti Foundation Website

[cloudflarebutton]

'Adhikti Cares' is a modern, responsive, and bilingual (Indonesian/English) website for the Adhikti Foundation. The platform is designed with an illustrative and empathetic aesthetic to engage visitors and encourage participation in the foundation's mission. It serves as a comprehensive information hub, detailing the mental and physical health challenges faced by Indonesian youth, and provides clear pathways for users to get involved through volunteering and donations. The site features dedicated pages for understanding the core issues, learning how to become a volunteer (including an FAQ and a list of current volunteers), viewing the foundation's detailed profile and legal status, tracking donor contributions, and getting in touch. The visual design prioritizes a clean, hopeful, and accessible user experience, utilizing a soft color palette and engaging micro-interactions to tell the foundation's story and inspire action.

## Key Features

- **Responsive Design**: Flawless experience across desktops, tablets, and mobile devices.
- **Empathetic UI/UX**: Clean, bright, and illustrative design to create a hopeful and engaging atmosphere.
- **Comprehensive Content Pages**:
    - **Home**: Engaging hero section with clear calls-to-action.
    - **Understanding Mental Health**: Educational content on youth mental health issues.
    - **Become a Volunteer**: Detailed information, FAQ, and a list of current volunteers.
    - **Foundation Profile**: In-depth look at the foundation's mission, vision, and legal status.
    - **Donors & Funds**: Transparent tracking of donations and progress.
    - **Contact**: Easy ways to get in touch, including a contact form and map.
- **Bilingual Support**: Full content available in both Indonesian and English (Phase 2).
- **Modern Component-Based Architecture**: Built with reusable and maintainable components.

## Technology Stack

- **Frontend**: React, Vite, TypeScript
- **Routing**: React Router
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- [Git](https://git-scm.com/) for version control.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/adhikti-foundation-web.git
    cd adhikti-foundation-web
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

3.  **Run the development server:**
    ```sh
    bun dev
    ```
    The application will be available at `http://localhost:3000`.

## Development

The project is structured to facilitate a smooth development experience.

-   `src/`: Contains all the frontend source code, including pages, components, hooks, and static assets.
-   `src/pages/`: Each top-level route has its own component file in this directory.
-   `src/components/`: Shared and reusable React components.
-   `src/data/`: Static content and mock data for the application.
-   `worker/`: Contains the Cloudflare Worker source code for server-side logic (if any).

### Available Scripts

-   `bun dev`: Starts the Vite development server with hot-reloading.
-   `bun build`: Compiles and bundles the application for production.
-   `bun lint`: Runs the ESLint checker to identify and fix code quality issues.
-   `bun deploy`: Builds the project and deploys it to Cloudflare.

## Deployment

This project is configured for seamless deployment to Cloudflare Pages.

To deploy the application, simply run the following command:

```sh
bun run deploy
```

This will trigger the build process and use the Wrangler CLI to deploy the static assets and worker functions to your Cloudflare account.

Alternatively, you can deploy directly from your GitHub repository:

[cloudflarebutton]