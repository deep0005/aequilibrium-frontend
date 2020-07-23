import { Transformers } from './Transformers';

export interface Results {
    matchCount: number;
    winningTeamType: string;
    winningTransformer: Transformers;
    losingTeamType: string;
    losingSurvivor: Transformers;
}