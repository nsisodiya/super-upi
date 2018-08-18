
const db = {
    async set(key, val){
        return await AsyncStorage.setItem(key, item);
    },
    async setObj(key, val){
        return await AsyncStorage.setItem(key, JSON.stringify(item));
    },
    async get(key, val){
        return await AsyncStorage.getItem(key, item);
    },
    async getObj(key, val){
        const dstr = await AsyncStorage.getItem(key, JSON.stringify(item));
        return JSON.parse(dstr);
    },
    async delete(key, val){
        await AsyncStorage.removeItem(key);
    }
}


export default db;