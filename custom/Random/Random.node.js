"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const axios_1 = __importDefault(require("axios"));
class Random {
    constructor() {
        this.description = {
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
    }
    async execute() {
        const min = this.getNodeParameter('min', 0);
        const max = this.getNodeParameter('max', 0);
        const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
        const response = await axios_1.default.get(url, { responseType: 'text' });
        return [this.helpers.returnJsonArray({ random: response.data.trim() })];
    }
}
exports.Random = Random;
