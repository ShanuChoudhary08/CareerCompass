
const careers=[
{name:'Software Engineer',stream:['Science'],interests:['Coding','AI'],strengths:['Problem Solving','Analytical Thinking'],salary:'₹7.5 LPA',demand:'Very High',growth:'Excellent'},
{name:'Data Scientist',stream:['Science','Commerce'],interests:['AI','Mathematics'],strengths:['Analytical Thinking'],salary:'₹10 LPA',demand:'Very High',growth:'Excellent'},
{name:'AI Engineer',stream:['Science'],interests:['AI','Coding'],strengths:['Problem Solving'],salary:'₹12 LPA',demand:'Very High',growth:'Excellent'},
{name:'Cybersecurity Analyst',stream:['Science'],interests:['Coding'],strengths:['Analytical Thinking'],salary:'₹8 LPA',demand:'High',growth:'Strong'},
{name:'Cloud Engineer',stream:['Science'],interests:['Coding'],strengths:['Problem Solving'],salary:'₹9 LPA',demand:'High',growth:'Strong'},
{name:'UI/UX Designer',stream:['Arts','Science'],interests:['Design'],strengths:['Creativity'],salary:'₹6 LPA',demand:'High',growth:'Strong'},
{name:'Digital Marketer',stream:['Commerce','Arts'],interests:['Marketing','Business'],strengths:['Communication'],salary:'₹5.5 LPA',demand:'High',growth:'Strong'},
{name:'Chartered Accountant',stream:['Commerce'],interests:['Business','Mathematics'],strengths:['Analytical Thinking'],salary:'₹9 LPA',demand:'High',growth:'Strong'}
];
function getSelected(id){return [...document.getElementById(id).selectedOptions].map(x=>x.value);}
function analyzeCareer(){
let stream=document.getElementById('stream').value;
let interests=getSelected('interests');
let strengths=getSelected('strengths');
let best=null,score=-1;
careers.forEach(c=>{
let s=0;
if(c.stream.includes(stream))s+=30;
interests.forEach(i=>{if(c.interests.includes(i))s+=20});
strengths.forEach(st=>{if(c.strengths.includes(st))s+=20});
if(s>score){score=s;best=c;}
});
score=Math.min(score,100);
const result=document.getElementById('result');
result.classList.remove('hidden');
result.innerHTML=`
<h2 class="result-title">🏆 Best Career Match</h2>
<h2 style="text-align:center">${best.name}</h2>
<div class="score" style="--p:${score}%">${score}%</div>
<p><b>💰 Median Salary:</b> ${best.salary}</p>
<p><b>📈 Demand:</b> ${best.demand}</p>
<p><b>🚀 Future Outlook:</b> ${best.growth}</p>
<p>This career matches your profile based on the interests and strengths you selected.</p>`;
}
