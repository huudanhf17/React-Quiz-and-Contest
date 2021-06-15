async function getQuiz(set: any) {
  try {
    const res = await fetch(
      "https://react14-contest-easy-quiz-app.herokuapp.com/quiz",
    );
    const data = await res.json();
    console.log(data.result);
    set(data.result);
  } catch (err) {
    console.log(err);
  }
}
export { getQuiz };
