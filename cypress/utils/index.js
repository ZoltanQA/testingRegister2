// Random Email function is the function for random email

export const randomEmail = () => {
    return (
        Math.random()
          .toString(36)
          .substr(2, 7) + '@vivifyacademy.com'
      );
}


export const randomTitle = () => {
    return (
        Math.random()
          .toString(36)
          .substr(2, 7)
    )
    }


/*
//Random password function
export const randomPassword = () => {
    return (
        Math.random()
          .toString(36)
          .slice(-8)
      );
}*/
  



