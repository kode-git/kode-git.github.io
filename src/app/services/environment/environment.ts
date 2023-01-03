export class Environment{

    githubName : string;

    constructor(){
        this.githubName = 'kode-git'
    }

    /**
     * Retrieves the JSON for the environment variables
     * @returns the JSON of the environment variables
     */
    retrievesInfo(){
        return JSON.parse(JSON.stringify({
            githubName : this.githubName
        }))
    }
}