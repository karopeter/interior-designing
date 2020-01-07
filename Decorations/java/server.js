const systemServer = () => {
    setTimeout(() => {
      console.log('Interior system server');
    }, 2000);
}

const netServer = () => {
    console.log('Network server');
    systemServer();
    console.log('server is listening');
}
netServer();

function getDesign() {
    setTimeout(() => {
      const designServerID = [1000, 3000, 5000, 7000];
      console.log(designServerID);
        
        setTimeout(interiorID => {
          const design = {title: 'Design Events', publisher: 'Canadian'};
            console.log(`${interiorID}: ${design.title}`);
            
          setTimeout(publisher => {
            const design2 = {title: 'Design Events', publisher: 'Canadian'};
             console.log(design);
          }, 1500, design.publisher);
        }, 1500, designServerID[3]);
    }, 1500);
}
getDesign();

const getDesignIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1000, 3000, 5000, 7000]);
    }, 1500);
});

const getDesignServer = desID => {
    return new Promise((resolve, reject) => {
      setTimeout(designID => {
        const design = {title: 'Design Events', publisher: 'Canadian'};
          resolve(`${designID}: ${design.title}`);
      }, 1500, desID);  
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
         const design = {title: 'Design Event', publisher: 'Canadian'};
          resolve(`${pub}: ${design.title}`);
        }, 1500, publisher);
    });
};

getDesignIDs
.then(designID => {
  console.log(designID);
  return getDesign(designID[3]);
})
.then(recipe => {
    console.log(design);
    return getRelated('Canadian');
})
.then(design => {
  console.log(design);
})
.catch(error => {
   console.log('Error!!');
});


 async function getDesignAW() {
  const designIDs = await getDesignIDs;
  console.log(designIDs);
  const design = await getDesign(designIDs[3]);
  const related = await getRelated('Canadian Interior Design Office');
  console.log(related);
     
  return design;
}
getDesignAW().then(result => console.log(`${result} get an IIDA award`));