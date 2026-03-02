import data from "@/questions.json";
import Question from "./question";

export default function FAQ() {
  return (
    <div>
      {data.map((el) => {
        return (
          <Question key={el.id} question={el.question} answer={el.answer} />
        );
      })}
    </div>
  );
}
