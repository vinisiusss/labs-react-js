function dd(start, end) { 
    const date1 = new Date(start); 
    const date2 = new Date(end); 
    const oneDay = 1000 * 60 * 60 * 24; 
    const diffInTime = date2.getTime() - date1.getTime(); 
    const diffInDays = Math.round(diffInTime / oneDay); 
    return dd; 
    } 
    console.log(getNumberOfDays("2/1/2021", "3/1/2021"));