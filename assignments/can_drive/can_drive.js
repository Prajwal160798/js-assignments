function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence===true && isTired===false && isSober===true){
        return "You can drive"
    }
    if (hasDrivingLiscence===false){
        return "You cannot drive"
    }
    return "You shouldn't drive"
}

module.exports = CanDrive;
