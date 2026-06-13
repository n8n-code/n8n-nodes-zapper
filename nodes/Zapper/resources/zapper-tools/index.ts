import type { INodeProperties } from 'n8n-workflow';

export const zapperToolsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					]
				}
			},
			"options": [
				{
					"name": "Token Price",
					"value": "Token Price",
					"action": "Get real-time token price and market cap",
					"description": "Get real-time token price and market cap",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/token-price"
						}
					}
				},
				{
					"name": "Search",
					"value": "Search",
					"action": "Search for ERC20 tokens, NFTs, Users, Apps, or Gas Tokens.",
					"description": "Search for ERC20 tokens, NFTs, Users, Apps, or Gas Tokens.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/search"
						}
					}
				},
				{
					"name": "Nft Token Metadata",
					"value": "Nft Token Metadata",
					"action": "Get detailed metadata, traits, media, and holder info for a specific NFT",
					"description": "Get detailed metadata, traits, media, and holder info for a specific NFT",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/nft-token-metadata"
						}
					}
				},
				{
					"name": "Nft Collection Metadata",
					"value": "Nft Collection Metadata",
					"action": "Get NFT collection data including market stats, holders, events, and a sample of NFTs.",
					"description": "Get NFT collection data including market stats, holders, events, and a sample of NFTs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/nft-collection-metadata"
						}
					}
				},
				{
					"name": "Portfolio Totals",
					"value": "Portfolio Totals",
					"action": "Get aggregated portfolio totals (Tokens, Apps, NFTs) broken down by network for a single address, or a list of addresses.",
					"description": "Get aggregated portfolio totals (Tokens, Apps, NFTs) broken down by network for a single address, or a list of addresses.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/portfolio-totals"
						}
					}
				},
				{
					"name": "Token Balances",
					"value": "Token Balances",
					"action": "Get detailed token balances for a single address, or a list of addresses, optionally filtering by chain.",
					"description": "Get detailed token balances for a single address, or a list of addresses, optionally filtering by chain.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/token-balances"
						}
					}
				},
				{
					"name": "Defi Balances",
					"value": "Defi Balances",
					"action": "Get DeFi balances (Liquidity Pools, Yield Farming, Lending, etc.) for a single address, or a list of addresses.",
					"description": "Get DeFi balances (Liquidity Pools, Yield Farming, Lending, etc.) for a single address, or a list of addresses.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/defi-balances"
						}
					}
				},
				{
					"name": "Nft Balances",
					"value": "Nft Balances",
					"action": "Get individual NFT balances and estimated values for a single address, or a list of addresses.",
					"description": "Get individual NFT balances and estimated values for a single address, or a list of addresses.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/nft-balances"
						}
					}
				},
				{
					"name": "Historical Token Price",
					"value": "Historical Token Price",
					"action": "Get the price of a token at a specific point in time.",
					"description": "Get the price of a token at a specific point in time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/historical-token-price"
						}
					}
				},
				{
					"name": "Transaction Details",
					"value": "Transaction Details",
					"action": "Get human-readable interpretation, metadata, and balance changes for a specific transaction.",
					"description": "Get human-readable interpretation, metadata, and balance changes for a specific transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/transaction-details"
						}
					}
				},
				{
					"name": "Transaction History",
					"value": "Transaction History",
					"action": "Get transaction history with interpretations and metadata for a single address, or a list of addresses.",
					"description": "Get transaction history with interpretations and metadata for a single address, or a list of addresses.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/transaction-history"
						}
					}
				},
				{
					"name": "Token Holders",
					"value": "Token Holders",
					"action": "Get token holders with balances and identity information for a specific token.",
					"description": "Get token holders with balances and identity information for a specific token.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/token-holders"
						}
					}
				},
				{
					"name": "Token Ranking",
					"value": "Token Ranking",
					"action": "Get a ranked list of tokens based on swap activity and velocity of adoption, optionally tailored for a farcaster user.",
					"description": "Get a ranked list of tokens based on swap activity and velocity of adoption, optionally tailored for a farcaster user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/token-ranking"
						}
					}
				},
				{
					"name": "Nft Ranking",
					"value": "Nft Ranking",
					"action": "Get a ranked list of NFT collections based on rading activity and collection popularity, optionally tailored for a farcaster user.",
					"description": "Get a ranked list of NFT collections based on rading activity and collection popularity, optionally tailored for a farcaster user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/nft-ranking"
						}
					}
				},
				{
					"name": "Account Identity",
					"value": "Account Identity",
					"action": "Get social identity (ENS, Farcaster, Lens, Basenames) for a specific address.",
					"description": "Get social identity (ENS, Farcaster, Lens, Basenames) for a specific address.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/account-identity"
						}
					}
				},
				{
					"name": "General Swap Feed",
					"value": "General Swap Feed",
					"action": "Get a real-time feed of swap activity across Farcaster, including token trades, volume, and social context.",
					"description": "Get a real-time feed of swap activity across Farcaster, including token trades, volume, and social context.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/general-swap-feed"
						}
					}
				},
				{
					"name": "Token Activity Feed",
					"value": "Token Activity Feed",
					"action": "Get a combined activity feed for a specific token, including swaps and top Farcaster casts, personalized for a given user.",
					"description": "Get a combined activity feed for a specific token, including swaps and top Farcaster casts, personalized for a given user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/x402/token-activity-feed"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /x402/token-price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Price"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "The 0x contract address",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Price"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "The Chain ID (e.g. 8453 for Base)",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Price"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "USD",
			"description": "Currency for price data (default: USD)",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Price"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Search"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"description": "Search query (e.g., \"Ape\", \"eth\", \"Vitalik\"). Searches for token SYMBOLS, NFT collection names, ENS, and BaseNames.",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Search"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  \"ERC20_TOKEN\"\n]",
			"description": "Filter results by category. Use multiple categories for broader results (e.g., [\"GAS_TOKEN\", \"ERC20_TOKEN\"] for all token types). Defaults to ERC20_TOKEN only.",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Search"
					]
				}
			}
		},
		{
			"displayName": "Max Results Per Category",
			"name": "maxResultsPerCategory",
			"type": "number",
			"default": 5,
			"description": "Limit results per category",
			"routing": {
				"send": {
					"property": "maxResultsPerCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Search"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/nft-token-metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Token Metadata"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Collection Address",
			"name": "collectionAddress",
			"type": "string",
			"default": "",
			"description": "The 0x contract address of the collection",
			"routing": {
				"send": {
					"property": "collectionAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Token Metadata"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "The Chain ID (e.g. 1 for Mainnet, 8453 for Base)",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Token Metadata"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token ID",
			"name": "tokenId",
			"type": "string",
			"default": "",
			"description": "The specific token ID to fetch metadata for",
			"routing": {
				"send": {
					"property": "tokenId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Token Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/nft-collection-metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Collection Metadata"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Collections",
			"name": "collections",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Array of collection inputs containing address and chainId",
			"routing": {
				"send": {
					"property": "collections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Collection Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/portfolio-totals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Portfolio Totals"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of 0x wallet addresses to aggregate",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Portfolio Totals"
					]
				}
			}
		},
		{
			"displayName": "Chain Ids",
			"name": "chainIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional list of Chain IDs to filter by (e.g. [1, 8453])",
			"routing": {
				"send": {
					"property": "chainIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Portfolio Totals"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/token-balances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Balances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of 0x wallet addresses to aggregate",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Balances"
					]
				}
			}
		},
		{
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 10,
			"description": "Number of tokens to return (max 20)",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Balances"
					]
				}
			}
		},
		{
			"displayName": "Chain Ids",
			"name": "chainIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional list of Chain IDs to filter by (e.g. [1, 8453])",
			"routing": {
				"send": {
					"property": "chainIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Balances"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/defi-balances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Defi Balances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of 0x wallet addresses to aggregate",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Defi Balances"
					]
				}
			}
		},
		{
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 10,
			"description": "Number of DeFi positions to return (max 50)",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Defi Balances"
					]
				}
			}
		},
		{
			"displayName": "Chain Ids",
			"name": "chainIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional list of Chain IDs to filter by",
			"routing": {
				"send": {
					"property": "chainIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Defi Balances"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/nft-balances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Balances"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of 0x wallet addresses to scan",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Balances"
					]
				}
			}
		},
		{
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 10,
			"description": "Number of NFTs to return",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Balances"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "sortBy",
			"type": "string",
			"default": "USD_WORTH",
			"description": "Sort order for results (e.g. \"USD_WORTH\", \"NETWORK\", \"COLLECTION\")",
			"routing": {
				"send": {
					"property": "sortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Balances"
					]
				}
			}
		},
		{
			"displayName": "Chain Ids",
			"name": "chainIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional list of Chain IDs to filter by",
			"routing": {
				"send": {
					"property": "chainIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Balances"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/historical-token-price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Historical Token Price"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "The 0x contract address of the token",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Historical Token Price"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "The Chain ID (e.g. 8453 for Base)",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Historical Token Price"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 0,
			"description": "The unix timestamp (in milliseconds) for the historical lookup",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Historical Token Price"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "USD",
			"description": "Currency for price data (default: USD)",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Historical Token Price"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/transaction-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hash",
			"name": "hash",
			"type": "string",
			"default": "",
			"description": "The transaction hash (0x...)",
			"routing": {
				"send": {
					"property": "hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "The Chain ID where the transaction occurred",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction Details"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/transaction-history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction History"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subjects",
			"name": "subjects",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Array of 0x wallet addresses to get transaction history for",
			"routing": {
				"send": {
					"property": "subjects",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction History"
					]
				}
			}
		},
		{
			"displayName": "Perspective",
			"name": "perspective",
			"type": "string",
			"default": "All",
			"description": "Transaction perspective filter (e.g. \"All\", \"Signer\", \"Receiver\")",
			"routing": {
				"send": {
					"property": "perspective",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction History"
					]
				}
			}
		},
		{
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 10,
			"description": "Number of transactions to return",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction History"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"type": "string",
			"default": "",
			"description": "Cursor for pagination",
			"routing": {
				"send": {
					"property": "after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction History"
					]
				}
			}
		},
		{
			"displayName": "Chain Ids",
			"name": "chainIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional list of Chain IDs to filter by",
			"routing": {
				"send": {
					"property": "chainIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Transaction History"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/token-holders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Holders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "Token contract address (0x...)",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Holders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID of the network (e.g. 1 for Ethereum, 8453 for Base)",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Holders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 0,
			"description": "Number of holders to return",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Holders"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"type": "string",
			"default": "",
			"description": "Cursor for pagination",
			"routing": {
				"send": {
					"property": "after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Holders"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/token-ranking",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Ranking"
					]
				}
			}
		},
		{
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 10,
			"description": "Number of items to return (pagination limit)",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Ranking"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"type": "string",
			"default": "",
			"description": "Cursor for pagination (get results after this cursor)",
			"routing": {
				"send": {
					"property": "after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Ranking"
					]
				}
			}
		},
		{
			"displayName": "Fid",
			"name": "fid",
			"type": "number",
			"default": 0,
			"description": "Optional Farcaster ID (FID) to personalize ranking",
			"routing": {
				"send": {
					"property": "fid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Ranking"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/nft-ranking",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Ranking"
					]
				}
			}
		},
		{
			"displayName": "First",
			"name": "first",
			"type": "number",
			"default": 10,
			"description": "Number of items to return (pagination limit)",
			"routing": {
				"send": {
					"property": "first",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Ranking"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"type": "string",
			"default": "",
			"description": "Cursor for pagination (get results after this cursor)",
			"routing": {
				"send": {
					"property": "after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Ranking"
					]
				}
			}
		},
		{
			"displayName": "Fid",
			"name": "fid",
			"type": "number",
			"default": 0,
			"description": "Optional Farcaster ID (FID) to personalize ranking",
			"routing": {
				"send": {
					"property": "fid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Nft Ranking"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/account-identity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Account Identity"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "The 0x wallet address to resolve identity for",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Account Identity"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/general-swap-feed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"General Swap Feed"
					]
				}
			}
		},
		{
			"displayName": "POST /x402/token-activity-feed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Activity Feed"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain ID",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID of the token (e.g. 8453 for Base)",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Activity Feed"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token Address",
			"name": "tokenAddress",
			"type": "string",
			"default": "",
			"description": "Contract address of the token",
			"routing": {
				"send": {
					"property": "tokenAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Activity Feed"
					]
				}
			}
		},
		{
			"displayName": "Fid",
			"name": "fid",
			"type": "number",
			"default": 0,
			"description": "Optional Farcaster ID (FID) to personalize the feed",
			"routing": {
				"send": {
					"property": "fid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Activity Feed"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Feed type (e.g. DEFAULT)",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Activity Feed"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "{}",
			"description": "Optional filters such as minimumUsdVolume",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Zapper Tools"
					],
					"operation": [
						"Token Activity Feed"
					]
				}
			}
		},
];
