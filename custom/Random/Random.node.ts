import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
import axios from 'axios';

export class Random implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random',
		name: 'random',
		icon: 'file:icon.svg',
		group: ['transform'],
		version: 1,
		description: 'True Random Number Generator via Random.org',
		defaults: { name: 'Random' },
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Min',
				name: 'min',
				type: 'number',
				default: 1,
				description: 'Valor mínimo (inclusivo)',
			},
			{
				displayName: 'Max',
				name: 'max',
				type: 'number',
				default: 60,
				description: 'Valor máximo (inclusivo)',
			},
		],
	};

	async execute(this: IExecuteFunctions) {
		const min = this.getNodeParameter('min', 0) as number;
		const max = this.getNodeParameter('max', 0) as number;

		const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

		const response = await axios.get(url, { responseType: 'text' });

        return [this.helpers.returnJsonArray({ random: response.data.trim() })];

	}
}
