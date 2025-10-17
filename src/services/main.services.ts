import axios from "axios";

export class MainService {
    static async getAllDestinations(){
        return await axios.get<string[]>('/destinations.json');
    }
}