import { data } from "@/questions";
import Question from "./question";

export default function FAQ() {
  return (
    <div className="flex flex-col gap-[20px] ">
      {data.map((el) => {
        return (
          <Question
            key={el.id}
            question={el.question}
            answer={el.answer}
            id={el.id}
          />
        );
      })}
    </div>
  );
}
