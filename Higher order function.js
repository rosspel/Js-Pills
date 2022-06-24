let companies = [{name: "azienda 1", category:"auto", start: 2015, end:2020},
{name: "azienda 2", category:"retail", start: 2012, end:2020},
{name: "azienda 3", category:"auto", start: 2011, end:2020},
{name: "azienda 4", category:"retail", start: 2009, end:2020}
]

const ages = [45,54,255,254,2,5,2,63,3,5]

//forEach

companies.forEach(company => {
    console.log(company.name)
})

//filter

const canDrink = ages.filter(age => age >=21)

console.log(canDrink)


const retailCompanies = companies.filter(company => company.category === "retail"). map(company => company.name)

console.log(retailCompanies)

//map
 const companyNames = companies.map(company => company.name)

 console.log(companyNames)


 const agesSquare = ages.map(age => Math.sqrt(age))
                    .map(age => age*2)
 console.log(agesSquare)


 //sort

 const sortedCompanies = companies.sort((company1, company2) => (company1.start > company2.start ? 1 : -1));

 console.log(sortedCompanies)

 const sortedAges = ages.sort((age1,age2) => age1-age2);
 console.log(sortedAges)

 //reduce
 const ageSums = ages.reduce((total, age) => total + age,0)

 console.log(ageSums)

 const totalYears = companies.reduce((total, company) => total + (company.end- company.start),0)

 //Combine all methods
  const  combined = ages.map(age => age*2)
                    .filter(age => age >=40)
                    .sort((age1,age2) => age1-age2)
                    .reduce((total,age) => total + age,0)
