import { $, browser, expect } from '@wdio/globals'
import QuizInfo from './quizInfo'

class SongQuiz {
    get answerBtns() {
        return [
            $('.btn:nth-child(1)'),
            $('.btn:nth-child(2)'),
            $('.btn:nth-child(3)'),
            $('.btn:nth-child(4)'),
        ];
    }
    get answerCorrect () {
        return $('.correct')
    }
    get answerWrong () {
        return $('.wrong')
    }
    get nextBtn () {
        return $('.next-btn')
    }
    get disabledBtns () {
        return $$('.disabled')
    }
    get score () {
        return $('span.score')
    }
    get correctAnswers () {
        return [
            $('//button[contains(text(), "The Art Of Starting Over")]'),
            $('//button[contains(text(), "My Love Is Like A Star")]'),
            $('//button[contains(text(), "Don\'t Forget")]'),
            $('//button[contains(text(), "I Love Me")]'),
            $('//button[contains(text(), "2022")]'),
            $('//button[contains(text(), "City Of Angels")]'),
            $('//button[contains(text(), "2011")]'),
            $('//button[contains(text(), "Unbroken")]'),
            $('//button[contains(text(), "Help Me")]'),
            $('//button[contains(text(), "29")]'),
            $('//button[contains(text(), "Skyscraper")]'),
            $('//button[contains(text(), "Sorry Not Sorry")]'),
            $('//button[contains(text(), "Frozen")]'),
            $('//button[contains(text(), "For The Love Of A Daughter")]'),
            $('//button[contains(text(), "Tell Me You Love Me")]'),
            $('//button[contains(text(), "3")]'),
            $('//button[contains(text(), "Jason Derulo")]'),
            $('//button[contains(text(), "World of Chances")]'),
            $('//button[contains(text(), "9")]'),
            $('//button[contains(text(), "Sober")]'),
        ]
    }

    async hoverOverBtns () {
        for (let i = 0; i < this.answerBtns.length; i++) {
            await this.answerBtns[i].moveTo();
        }
    }
    
    async correctAnswerBtns () {
        // await this.answerBtns[3].click();
        for (let i = 0; i < this.correctAnswers.length; i++) {
            if (await this.correctAnswers[i].isExisting()) {
                await this.correctAnswers[i].click();
            } else {
                continue;
            }
        }
        // await browser.pause(3000);
    }

    async next () {
        await this.nextBtn.moveTo();
        // await browser.pause(3000);
        await this.nextBtn.click();
        // await browser.pause(3000);
    }

    async disabled () {
        for (let i = 0; i < this.disabledBtns.length; i++) {
            await this.disabledBtns[i].click();
            await expect(this.disabledBtns[i].toBeExisting());
        }
    }

    async loopThroughQuestionsPos (numberOfQuestions) {
        for (let i = 0; i < numberOfQuestions; i++) {
            await this.hoverOverBtns();
            for (let i = 0; i < this.hoverOverBtns.length; i++) {
                await expect(this.hoverOverBtns[i]).toBeClickable();
            }
            await this.correctAnswerBtns();
            await expect(this.answerCorrect).toBeExisting();
            await expect(this.answerWrong).not.toBeExisting();

            await this.disabled();
            // await expect(this.disabledBtns).toBeExisting();

            await this.next();
            await expect(QuizInfo.question).toBeExisting();
            await expect(this.score).toBeExisting();
        }
    }

    async answerBtnPos () {
        await this.loopThroughQuestionsPos(20);
    }
}

export default new SongQuiz();
