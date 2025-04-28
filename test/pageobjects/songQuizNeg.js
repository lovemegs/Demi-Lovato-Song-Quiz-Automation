import { $, expect } from '@wdio/globals'
import SongQuiz from './songQuiz';
import Home from './home';

class SongQuizNeg extends Home {
    wrongAnswerArray = [
        "Shouldn\'t Come Back",
        "Dev",
        "Confident",
        "Gift Of A Friend",
        "Everytime You Lie",
        "2009",
        "Here We Go Again",
        "Cry Baby",
        "Anyone",
        "Daddy Issues",
        "6",
        "Dancing With The Devil",
        "Unbroken",
        "Lonely People",
        "2021",
        "4",
        "Fix A Heart",
        "Demi",
        "Moana",
        "Can\'t Back Down"
    ]
    async wrongAnswers (answer) {
        return $(`//button[contains(text(), "${answer}")]`)
    }

    async wrongAnswersBtns () {
        for (let i = 0; i < this.wrongAnswerArray.length; i++) {
            const answerText = this.wrongAnswerArray[i];
            const answerBtn = await this.wrongAnswers(answerText);

            if (await answerBtn.isExisting()) {
                await answerBtn.click();

                await expect(this.answerCorrect).toBeExisting();
                await expect(this.answerCorrect).toHaveElementClass('correct')
                await expect(this.answerWrong).toBeExisting();
                await expect(this.answerWrong).toHaveElementClass('wrong')
            } else {
                continue;
            }
        }
    }

    async loopThroughQuestionsNeg (numberOfQuestions) {
        for (let i = 0; i < numberOfQuestions; i++) {
            await SongQuiz.hoverOverBtns();
            
            await this.wrongAnswersBtns();

            await SongQuiz.disabled();

            await SongQuiz.next();
            this.currentQuestion += 1;
            if (this.currentQuestion > 20) {
                await expect(this.score).toBeDisplayed();
                await expect(this.score).toHaveElementClass('score');
            }
            else {
                await expect(this.question).toHaveHTML(expect.stringContaining(`${this.currentQuestion}`));
                await expect(this.score).not.toBeDisplayed();
            }
        }
    }

    async answerBtnNeg () {
        await this.loopThroughQuestionsNeg(20);
    }
}
export default new SongQuizNeg();
