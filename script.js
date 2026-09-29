function corrigirQuiz(){
 const respostas={q1:"b",q2:"b",q3:"a"};
 let pontos=0;
 Object.keys(respostas).forEach(q=>{
   const marcada=document.querySelector(`input[name="${q}"]:checked`);
   if(marcada && marcada.value===respostas[q]) pontos++;
 });
 const r=document.getElementById("resultado");
 r.textContent=`Você acertou ${pontos} de 3 questões.`;
}
