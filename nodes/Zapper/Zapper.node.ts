import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { zapperToolsDescription } from './resources/zapper-tools';

export class Zapper implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'zapper',
		name: 'N8nDevZapper',
		icon: { light: 'file:./zapper.png', dark: 'file:./zapper.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Zapper blockchain portfolio tracker and DeFi dashboard for managing assets across 60+ chains with real-time prices',
		defaults: { name: 'zapper' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevZapperApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Zapper Tools",
					"value": "Zapper Tools",
					"description": ""
				}
			],
			"default": ""
		},
		...zapperToolsDescription
		],
	};
}
