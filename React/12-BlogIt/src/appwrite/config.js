import conf from "../conf/conf.js"
import {Client, Databases, ID, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){

        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Erro in config "+ error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Error in config "+error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Error in config "+error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("staus","active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries
            );
            
        } catch (error) {
            console.log("Error in config "+error);
        }
    }

    
    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appWriteUrl,
                conf.collectionId,
                slug
                )
            } catch (error) {
                console.log("Error in config "+error);
                return false
            }
        }
        
        async uplodeFile(file){
            try {
                return await this.bucket.createFile(
                    conf.bucketId,
                    ID.unique(),
                    file
                )
            } catch (error) {
                console.log(error)
            }
        }
        
        async deleteFile(fileId){
            try {
                await this.bucket.deleteFile(
                    conf.bucketId,
                    fileId
                )
                return true;
            } catch (error) {
                console.log(error);
                return false
            }
        }
        async previewFile(fileId){
                return this.bucket.getFilePreview(
                    conf.bucketId,
                    fileId
                )
        }
    }

    const service = new Service;

    export default service;