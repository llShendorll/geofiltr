let storage = localStorage;

export default {
    setLocalStorage(objGlobRev) { // сохраняем в localStorage
        if (Object.keys(objGlobRev).length > 0) {
            storage.georeview = JSON.stringify(objGlobRev);
        } else {
            storage.georeview = '';    
        }
    },
    getLocalStorage() { // загружаем из localStorage
        return storage.georeview ? JSON.parse(storage.georeview) : {};  
    }
};