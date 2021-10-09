let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// função que faz a verificação se, conforme a idade, a pessoa votou, e adiciona +1 para pessoa, e +1 para votante (caso votou):
let handleVoter = ageRange => (totals, voter) => ({
   ...totals,
   [ageRange]: { 
    votes: voter.voted ? totals[ageRange].votes + 1 : totals[ageRange].votes,
    people: totals[ageRange].people + 1
   }
});
// função que verifica qual a idade do votante:
let ageBetween = (voter, startAge, endAge) => voter.age >= startAge && voter.age <= endAge;

// objetos que estipulam a idade inicial e final dos votantes
const YOUNG = {startAge: 18, endAge: 25}
const MID = {startAge: 26, endAge: 35}
const OLD = {startAge: 36, endAge: 55}
 const aging = { YOUNG, MID, OLD }
// função que efetivamente mostra a contagem de votos e pessoas:
const initialValue = Object.keys(aging).reduce(
    (acc, property) => ({...acc, [property]: {votes: 0, people: 0 }}), 
    {}
)
// função principal, que reduz os arrays de objetos em contagem de votos e pessoas:
voters.reduce(
        (totals, voter) => {
            for (const property in aging) {
                const { startAge, endAge } = aging[property];

               if (ageBetween(voter, startAge, endAge)) {

                  return handleVoter(property)(totals, voter)
                   
              }
             
         }}, 
         
          
         initialValue
        
    )


