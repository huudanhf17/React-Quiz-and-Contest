const url = process.env.REACT_APP_API_URL;

async function getQuiz(set: any) {
  try {
    const res = await fetch(`${url}/quiz`);
    const data = await res.json();
    set(data.result);
  } catch (err) {
    console.log(err);
  }
}

async function postResult(
  set: any,
  prevResults: any,
  totalQ: any,
  handleClickVariant: any,
  body: any,
) {
  try {
    const res = await fetch(`${url}/quiz/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ listAnswer: body }),
    });
    const data = await res.json();
    let curResult;
    if (data.status === "P") {
      curResult = {
        result: "6/6",
        incorrectAnswers: 0,
      };
    } else {
      curResult = {
        result: `${totalQ - data.incorrectAnswers.length}/${totalQ}`,
        incorrectAnswers: data.incorrectAnswers.length,
      };
    }
    const curResults = [curResult, ...prevResults];
    set(curResults);
    localStorage.getItem("remember") &&
      localStorage.setItem("results", JSON.stringify(curResults));
    curResults[0].incorrectAnswers === totalQ
      ? handleClickVariant(
          `Oops, you didn't answer any questions correctly, try again!!`,
          "success",
        )
      : handleClickVariant(
          `Congratulation, you have finished the test with result ${curResults[0].result} correct answers!!`,
          "success",
        );
  } catch (err) {
    console.log(err);
  }
}

function getSteps() {
  return ["Accept Challenge", "Beat Challenge", "Reward"];
}

function getActiveStep() {
  return 1;
}
export { getQuiz, postResult, getSteps, getActiveStep };
