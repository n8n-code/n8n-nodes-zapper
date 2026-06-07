# @n8n-dev/n8n-nodes-zapper

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-zapper.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-zapper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing zapper API integrations by hand.**

Every time you connect n8n to zapper, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to zapper took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Zapper Tools**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-zapper
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-zapper`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **zapper API** → paste your API key
3. Drag the **zapper** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Zapper Tools | POST Get real-time token price and market cap, POST Search for ERC20 tokens, NFTs, Users, Apps, or Gas Tokens., POST Get detailed metadata, traits, media, and holder info for a specific NFT, POST Get NFT collection data including market stats, holders, events, and a sample of NFTs., POST Get aggregated portfolio totals (Tokens, Apps, NFTs) broken down by network for a single address, or a list of addresses., POST Get detailed token balances for a single address, or a list of addresses, optionally filtering by chain., POST Get DeFi balances (Liquidity Pools, Yield Farming, Lending, etc.) for a single address, or a list of addresses., POST Get individual NFT balances and estimated values for a single address, or a list of addresses., POST Get the price of a token at a specific point in time., POST Get human-readable interpretation, metadata, and balance changes for a specific transaction., POST Get transaction history with interpretations and metadata for a single address, or a list of addresses., POST Get token holders with balances and identity information for a specific token., POST Get a ranked list of tokens based on swap activity and velocity of adoption, optionally tailored for a farcaster user., POST Get a ranked list of NFT collections based on rading activity and collection popularity, optionally tailored for a farcaster user., POST Get social identity (ENS, Farcaster, Lens, Basenames) for a specific address., POST Get a real-time feed of swap activity across Farcaster, including token trades, volume, and social context., POST Get a combined activity feed for a specific token, including swaps and top Farcaster casts, personalized for a given user. |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from zapper docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official zapper OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **zapper** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the zapper API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
