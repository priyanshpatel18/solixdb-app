# SolixDB Website

Landing page for SolixDB, a Solana blockchain data indexing platform. This website provides information about the SolixDB API, documentation, and product offerings.

## About

SolixDB is a data platform that provides access to 390M+ Solana transactions via REST, GraphQL, and SQL APIs. The website showcases features, use cases, API examples, and documentation for developers building on Solana.

Live site: https://solixdb.xyz

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

The development server runs on http://localhost:3000

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── (pages)/     # Main landing page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── sections/    # Page sections
│   └── ui/          # UI components (Button, Card, Tabs, etc.)
├── config/          # Site configuration
├── fonts/           # Font definitions
└── lib/             # Utility functions
```

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository: https://github.com/solixdb/app
2. Create a feature branch from `main`
3. Make your changes
4. Test locally with `pnpm dev`
5. Ensure linting passes with `pnpm lint`
6. Submit a pull request

### Code Style

- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS for styling
- Keep components focused and reusable

## License

See LICENSE file for details.

## Links

- Website: https://solixdb.xyz
- GitHub: https://github.com/solixdb/app
- API: https://api.solixdb.xyz
- Documentation: http://docs.solixdb.xyz
