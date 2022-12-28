const returnFirstTwoDrivers = (drivers) => {
    return drivers.splice(0, 2);

    }
    const returnLastTwoDrivers = (drivers) => {
        return drivers.slice(2, 3)
  };
  
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

  
 