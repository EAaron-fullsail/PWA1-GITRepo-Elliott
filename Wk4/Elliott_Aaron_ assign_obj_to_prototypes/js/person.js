/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
var persons = {};
jobs = ["Designer", "Developer", "Intern", "Business", "Retail"];
actions = ["Writing", "Selling", "Eating", "Meeting", "Working"];


for (i=0; i<jobs.length && i<actions.length; i++){
	persons = {"names": jobs[i], "actions": actions[i]};
	console.log(persons);
}

