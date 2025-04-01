import { $, expect, browser } from '@wdio/globals'
import QuizInfo from './quizInfo'

class SongQuizNeg {
    get wrongAnswers () {
        return [
            $('//button[contains(text(), "Shouldn\'t Come Back")]'),
            $('//button[contains(text(), "Dev")]'),
            $('//button[contains(text(), "Confident")]'),
            $('//button[contains(text(), "Gift Of A Friend")]'),
            $('//button[contains(text(), "Everytime You Lie")]'),
            $('//button[contains(text(), "2009")]'),
            $('//button[contains(text(), "Here We Go Again")]'),
            $('//button[contains(text(), "Cry Baby")]'),
            $('//button[contains(text(), "Anyone")]'),
            $('//button[contains(text(), "Daddy Issues")]'),
            $('//button[contains(text(), "6")]'),
            $('//button[contains(text(), "Dancing With The Devil")]'),
            $('//button[contains(text(), "Unbroken")]'),
            $('//button[contains(text(), "Lonely People")]'),
            $('//button[contains(text(), "2021")]'),
            $('//button[contains(text(), "4")]'),
            $('//button[contains(text(), "Fix A Heart")]'),
            $('//button[contains(text(), "Demi")]'),
            $('//button[contains(text(), "Moana")]'),
            $('//button[contains(text(), "Can\'t Back Down")]'),
        ]
    }
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

    async wrongAnswersBtns () {
        for (let i = 0; i < this.wrongAnswers.length; i++) {
            if (await this.wrongAnswers[i].isExisting()) {
                await this.wrongAnswers[i].click();
            } else {
                continue;
            }
        }
    }

    async hoverOverBtns () {
        for (let i = 0; i < this.answerBtns.length; i++) {
            await this.answerBtns[i].moveTo();
        }
    }

    async next () {
        await this.nextBtn.moveTo();
        await this.nextBtn.click();
    }

    async disabled () {
        for (let i = 0; i < this.disabledBtns.length; i++) {
            await this.disabledBtns[i].click();
            await expect(this.disabledBtns[i].toBeExisting());
        }
    }
    async loopThroughQuestionsNeg (numberOfQuestions) {
        for (let i = 0; i < numberOfQuestions; i++) {
            await this.hoverOverBtns();
            for (let i = 0; i < this.hoverOverBtns.length; i++) {
                await expect(this.hoverOverBtns[i]).toBeClickable();
            }
            await this.wrongAnswersBtns();
            await expect(this.answerCorrect).toBeExisting();
            await expect(this.answerWrong).toBeExisting();

            await this.disabled();
            // await expect(this.disabledBtns).toBeExisting();

            await this.next();
            await expect(QuizInfo.question).toBeExisting();
            await expect(this.score).toBeExisting();
        }
    }
    async answerBtnNeg () {
        await this.loopThroughQuestionsNeg(20);
    }
}
export default new SongQuizNeg();
