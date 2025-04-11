import { $, expect } from '@wdio/globals'
import SongQuiz from './songQuiz';
import QuizInfo from './quizInfo';

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

    async loopThroughQuestionsNeg (numberOfQuestions) {
        for (let i = 0; i < numberOfQuestions; i++) {
            await SongQuiz.hoverOverBtns();
            for (let i = 0; i < SongQuiz.hoverOverBtns.length; i++) {
                await expect(SongQuiz.hoverOverBtns[i]).toBeClickable();
            }
            await this.wrongAnswersBtns();
            await expect(SongQuiz.answerCorrect).toBeExisting();
            await expect(SongQuiz.answerWrong).toBeExisting();

            await SongQuiz.disabled();

            await SongQuiz.next();
            if(numberOfQuestions === 20) {
                await expect(SongQuiz.score).toBeExisting();
            } else {
                await expect(QuizInfo.question).toBeExisting();
            }
        }
    }

    async answerBtnNeg () {
        await this.loopThroughQuestionsNeg(20);
    }
}
export default new SongQuizNeg();
