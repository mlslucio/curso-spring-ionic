import{Injectable} from '@angular/core';
import { LocalUser } from '../models/local-user';
import { STORAGE_KEYS } from '../config/storage';

@Injectable()
export class StorageService{

    getLocalUser(){
        let user  =  localStorage.getItem(STORAGE_KEYS.localUser);
        return JSON.parse(user);
    }

    setLocalUser(user:LocalUser){
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(user))
    }
}