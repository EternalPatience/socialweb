//Function for changing a property of object in array of objects
// objectPropName should be in ' '
export const updateObjectPropertyInArray = (items, objectPropName, itemID, newObjProps) => {
   return items.map(item => {
        if (item[objectPropName] === itemID) {
            return {
                ...item, ...newObjProps
            }
        }
        return item
})}