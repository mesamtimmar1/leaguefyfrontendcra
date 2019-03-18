import { SUMMONER_NAME_REGEX } from '../../utils/constants';

const helper = {
    validateSummonerName: summonerName => {
        return SUMMONER_NAME_REGEX.test(summonerName);
    }
}

export default helper;