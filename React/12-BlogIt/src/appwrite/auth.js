import {Client, Account, ID} from "appwrite";
import conf from "../conf/conf.js"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId);
        this.account = Account(this.client);
    }

    async createAccount({email,password,name}){     
        try {
            
            const userAccount = await this.account.creat(ID.unique(),email,password,name);
            if (userAccount) {
                // user will login automatically
                return await userLogin({email,password});
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error
        }
    }

    async userLogin({email,password}){
        // create the login functonality 
        try{
        return await this.account.creatEmailSession(email,password);
        }catch(error){
            throw error
        }

    }

    async getCurrentUser(){
        // write the definition of the method to get the current user
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        // create a user logout 
        try {
            return this.account.deleteSessions();
        } catch (error) {
            
        }
    }
}



const authService = new AuthService();

export default authService;