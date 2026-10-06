import { useRef } from "react";
export default function Answers({answers,selectedAnswer,answerState,onSelect}){
      const shuffledAnswers = useRef();
      function shuffleArray(array) {
      for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    if(!shuffledAnswers.current){
    shuffledAnswers.current= [...answers];
    shuffleArray(shuffledAnswers.current);
    
    }
      return(
           <>
               <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
             const isSelected= selectedAnswer===answer;
             let cssClass="";
             if(answerState==="answered"&&isSelected){
              cssClass="selected";
             }
             if((answerState==="correct"|| answerState==="wrong")&& isSelected){
              cssClass=answerState;
             }


              return(
                 <li key={answer} className="answer">
                <button className={cssClass} onClick={() => onSelect(answer)}  disabled={answerState!==""}   >{answer}</button>
              </li>
              )


            }
             
            )}
          </ul>
           </>
            )
}