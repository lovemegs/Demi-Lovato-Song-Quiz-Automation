import { $, expect } from '@wdio/globals'
import Home from './home';

class SongQuiz extends Home {
   
    async correctAnswers (answer) {
        return $(`//button[contains(text(), "${answer}")]`)
    }
    correctAnswerArray = [
        "The Art Of Starting Over",
        "My Love Is Like A Star",
        "Don't Forget",
        "I Love Me",
        "2022",
        "City Of Angels",
        "2011",
        "Unbroken",
        "Help Me",
        "29",
        "Skyscraper",
        "Sorry Not Sorry",
        "Frozen",
        "For The Love Of A Daughter",
        "Tell Me You Love Me",
        "3",
        "Jason Derulo",
        "World of Chances",
        "9",
        "Sober",
    ]

    async hoverOverBtns () {
        for (let i = 0; i < this.answerBtns.length; i++) {
            await this.answerBtns[i].moveTo();

            const hoverBgColor = await this.answerBtns[i].getCSSProperty('background-color');
            await expect(hoverBgColor.value).toBe('rgba(187,163,236,1)');
        }
    }
    
    async correctAnswerBtns () {
        for (let i = 0; i < this.correctAnswerArray.length; i++) {
            const answerText = this.correctAnswerArray[i];
            const answerBtn = await this.correctAnswers(answerText);

            if (await answerBtn.isExisting()) {
                await answerBtn.click();

                await expect(this.answerCorrect).toBeExisting();
                await expect(this.answerCorrect).toHaveElementClass('correct')
                await expect(this.answerWrong).not.toBeExisting();
            } else {
                continue;
            }
        }
    }

    async next () {
        await this.nextBtn.moveTo();

        const nextBgColor = await this.nextBtn.getCSSProperty('background-color');
        await expect(nextBgColor.value).toBe('rgba(102,51,153,1)');

        await this.nextBtn.click();
    }

    async disabled () {
        for (let i = 0; i < this.disabledBtns.length; i++) {
            await this.disabledBtns[i].click();
            await expect(this.disabledBtns[i]).toBeExisting();
            await expect(this.disabledBtns[i]).toHaveAttribute('disabled');
        }
    }

    async loopThroughQuestionsPos (numberOfQuestions) {
        for (let i = 0; i < numberOfQuestions; i++) {
            await this.hoverOverBtns();
            for (let i = 0; i < this.hoverOverBtns.length; i++) {
                await expect(this.hoverOverBtns[i]).toBeClickable();
            }
            await this.correctAnswerBtns();
        
            await this.disabled();

            await this.next();
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

    async answerBtnPos () {
        await this.loopThroughQuestionsPos(20);
    }
}

export default new SongQuiz();
